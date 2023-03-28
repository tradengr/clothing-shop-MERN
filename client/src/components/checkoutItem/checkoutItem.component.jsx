import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, reduceItemFromCart, removeItemFromCart } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './checkoutItem.styles.scss';

export default function CheckoutItem({ product }) {
  const { imageUrl, name, quantity, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const handleAddItem = () => dispatch(addItemToCart(cartItems, product));
  const handleReduceItem = () => dispatch(reduceItemFromCart(cartItems, product));
  const handleRemoveItem = () => dispatch(removeItemFromCart(cartItems, product));
    
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img className='image' src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      {/* <span onClick={handleReduceItem}>-</span> */}
      {/* <span className='quantity'>{quantity}</span> */}
      <div className='quantity'>
        <span className='arrow' onClick={handleReduceItem}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={handleAddItem}>&#10095;</span>
      </div>
      {/* <span onClick={handleAddItem}>+</span> */}
      <span className='price'>${price}</span>
      <span className='remove-button' onClick={handleRemoveItem}>&#10005;</span>
    </div>
  )
}

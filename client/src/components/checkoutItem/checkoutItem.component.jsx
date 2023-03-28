import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';

import './checkoutItem.styles.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function CheckoutItem({ cartItem }) {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItemToCart, reduceItemFromCart, removeItemFromCart } = useContext(CartContext);

  const handleAddItem = () => addItemToCart(cartItem);
  const handleReduceItem = () => reduceItemFromCart(cartItem);
  const handleRemoveItem = () => removeItemFromCart(cartItem);
    
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

import React from 'react'
import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';

import './checkout.styles.scss';


export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotalPrice);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} product={cartItem} />)}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  )
}
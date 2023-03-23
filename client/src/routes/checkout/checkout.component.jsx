import React, { useContext } from 'react'

import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';
import { CartContext } from '../../contexts/cart.context'


export default function Checkout() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      {cartItems.map(item => <CheckoutItem item={item} />)}
    </div>
  )
}
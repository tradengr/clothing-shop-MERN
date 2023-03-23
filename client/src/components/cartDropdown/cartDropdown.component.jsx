import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cartItem/cartItem.component';

import './cartDropdown.styles.scss';

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
}
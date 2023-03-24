import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.styles';
import CartItem from '../cartItem/cartItem.component';

import './cartDropdown.styles.scss';

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const navigateToCheckout = () => navigate('/checkout');

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length 
          ? cartItems.map(item => <CartItem key={item.id} item={item} />)
          : <span className='empty-message'>Your Cart is empty</span>
        }
      </div>
      <Button onClick={navigateToCheckout}>Go to checkout</Button>
    </div>
  );
}
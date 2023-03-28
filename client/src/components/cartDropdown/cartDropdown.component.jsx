import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../button/button.styles';
import CartItem from '../cartItem/cartItem.component';

import { selectCartItems } from '../../redux/cart/cart.selector';

import './cartDropdown.styles.scss';

export default function CartDropdown() {
  const cartItems = useSelector(selectCartItems);

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
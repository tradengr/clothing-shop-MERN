import React from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { ReactComponent as CartIconLogo } from '../../assets/shopping-bag.svg';
import { toggleCart } from '../../redux/cart/cart.slice';
import { selectCartCount, selectIsCartOpen } from '../../redux/cart/cart.selector';

import './cartIcon.styles.scss';

export default function CartIcon() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const handleToggleCart = () => dispatch(toggleCart(!isCartOpen));

  return (
    <div className='cart-icon-container' onClick={handleToggleCart}>
      <CartIconLogo className='cart-icon-logo'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  );
}
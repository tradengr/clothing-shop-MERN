import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as CartIconLogo } from '../../assets/shopping-bag.svg';
import { selectCartCount, selectIsCartOpen } from '../../redux/cart/cart.selector';
import { toggleCart } from '../../redux/cart/cart.action';

import './cartIcon.styles.scss';

export default function CartIcon() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const handleToggleCart = () => dispatch(toggleCart(!isCartOpen));

  return (
    <div className='cart-icon-container' onClick={handleToggleCart}>
      <CartIconLogo className='cart-icon-logo'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  );
}
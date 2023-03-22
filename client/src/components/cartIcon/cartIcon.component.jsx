import React, { useContext } from 'react'
import { ReactComponent as CartIconLogo } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cartIcon.styles.scss';

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <CartIconLogo className='cart-icon-logo'/>
      <span className='item-count'>8</span>
    </div>
  );
}
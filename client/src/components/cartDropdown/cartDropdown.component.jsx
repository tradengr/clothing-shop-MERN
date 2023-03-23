import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cartItem/cartItem.component';

import './cartDropdown.styles.scss';

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  // const handleClick = () => window.location.assign('/checkout');

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      {/* <Button onClick={handleClick}>Go to checkout</Button> */}
      <Button>
        <Link to='/checkout'>
          Go to checkout
        </Link>
      </Button>
    </div>
  );
}
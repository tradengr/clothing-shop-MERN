import React from 'react'
import Button from '../button/button.component';

import './cartDropdown.styles.scss';

export default function CartDropdown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button>Go To Checkout</Button>
    </div>
  )
}
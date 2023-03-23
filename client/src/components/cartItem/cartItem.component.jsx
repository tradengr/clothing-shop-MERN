import React from 'react'
import './cartItem.styles.scss';

export default function CartItem({ item }) {
  const { name, quantity } = item;
  return (
    <div className='cart-item-container'>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
}
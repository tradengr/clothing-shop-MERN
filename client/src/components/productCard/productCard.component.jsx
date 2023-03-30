import React from 'react'
import { useDispatch } from 'react-redux';

import { InvertedButton } from '../button/button.styles';
import { addItemToCart } from '../../redux/cart/cart.slice';

import './productCard.styles.scss';

export default function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const handleAddItemToCart = () => dispatch(addItemToCart(product));

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='name-price-container'>
        <span className='name'>{name}</span>
        <span className='price'>{`$${price}`}</span>
      </div>
      <InvertedButton onClick={handleAddItemToCart}>Add To Cart</InvertedButton>
    </div>
  );
}
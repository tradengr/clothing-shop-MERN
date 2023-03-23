import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import './productCard.styles.scss';

export default function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddItemToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='name-price-container'>
        <span className='name'>{name}</span>
        <span className='price'>{`$${price}`}</span>
      </div>
      <Button buttonType='inverted' onClick={handleAddItemToCart}>Add To Cart</Button>
    </div>
  );
}
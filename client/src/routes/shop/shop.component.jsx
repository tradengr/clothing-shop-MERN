import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/products.contexts'
import ProductCard from '../../components/productCard/productCard.component';
import './shop.styles.scss';

export default function Shop() {
  const products = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map(product => {
        return (
          <ProductCard key={product.id} product={product} />
        );
      })} 
    </div>
  );
}
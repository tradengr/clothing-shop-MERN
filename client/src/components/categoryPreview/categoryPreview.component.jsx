import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../productCard/productCard.component';

import './categoryPreview.styles.scss';

export default function CategoryPreview({ categoriesMap, category }) {
  const products = categoriesMap[category];
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={category}>{category}</Link>
      </h2>
      <div className='preview'>
        {products
          .slice(0, 4)
          .map(product => <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>
  );
}
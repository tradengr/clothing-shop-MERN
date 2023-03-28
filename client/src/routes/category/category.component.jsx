import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/productCard/productCard.component';
import { selectCategoriesMap } from '../../redux/categories/categories.selector';

import './category.styles.scss';

export default function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [ products, setProducts ] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className='category-title'>{category}</h2>
      <div className='category-container'>
        {products && products.map(product => <ProductCard key={product.id} product={product} /> )}
      </div>
    </>

  );
} 
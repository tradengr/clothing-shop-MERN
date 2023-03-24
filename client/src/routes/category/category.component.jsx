import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.contexts';
import ProductCard from '../../components/productCard/productCard.component';

import './category.styles.scss';

export default function Category() {
  const { category } = useParams();
  const categoriesMap = useContext(CategoriesContext);
  const [ products, setProducts ] = useState(categoriesMap[category]);

  // const products = categoriesMap[category];
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    // <div className='category-container'>
    //   <h2>
    //     <span className='title'>{category}</span>
    //   </h2>
    //   <div className='preview'>
    //     {products && products.map(product => <ProductCard key={product.id} product={product} /> )}
    //   </div>
    // </div>
    <>
      <h2 className='category-title'>{category}</h2>
      <div className='category-container'>
        {products && products.map(product => <ProductCard key={product.id} product={product} /> )}
      </div>
    </>

  );
} 
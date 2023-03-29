import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/productCard/productCard.component';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../redux/categories/categories.selector';

import './category.styles.scss';

export default function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [ products, setProducts ] = useState(categoriesMap[category]);

  useEffect(() => { 
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className='category-title'>{category}</h2>
      {isLoading ? (
        <Spinner/>
      ) : (
        <div className='category-container'>
          {products && products.map(product => <ProductCard key={product.id} product={product} /> )}
        </div>
      )}
    </>
  );
}  
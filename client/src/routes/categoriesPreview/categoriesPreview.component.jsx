import React from 'react'
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/categoryPreview/categoryPreview.component';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../redux/categories/categories.selector';

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map(category => (
          <CategoryPreview key={category} categoriesMap={categoriesMap} category={category} />
        ))
      )}
    </>
  );
}
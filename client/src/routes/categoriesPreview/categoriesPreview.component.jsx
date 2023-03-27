import React from 'react'
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/categoryPreview/categoryPreview.component';
import { selectCategoriesMap } from '../../redux/categories/categories.selector';

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map(category => (
        <CategoryPreview key={category} categoriesMap={categoriesMap} category={category} />
      ))}
    </>
  );
}
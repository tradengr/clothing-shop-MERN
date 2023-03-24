import React, { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.contexts';
import CategoryPreview from '../../components/categoryPreview/categoryPreview.component';

export default function CategoriesPreview() {
  const categoriesMap = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map(category => (
        <CategoryPreview key={category} categoriesMap={categoriesMap} category={category} />
      ))}
    </>
  );
}
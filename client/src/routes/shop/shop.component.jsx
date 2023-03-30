import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categoriesPreview/categoriesPreview.component';
import Category from '../category/category.component';
import { getCategories } from '../../redux/categories/categories.slice';

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </>
  );
}
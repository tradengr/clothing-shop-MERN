import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categoriesPreview/categoriesPreview.component';
import Category from '../category/category.component';
import { httpGetCategories } from '../../apis/backendAPI';
import { setCategoriesMap } from '../../redux/categories/categories.action';

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    httpGetCategories().then(res => dispatch(setCategoriesMap(res.data)));
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
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categoriesPreview/categoriesPreview.component';
import Category from '../category/category.component';

export default function Shop() {
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </>
  );
}
import React, { createContext, useEffect, useState } from 'react'

import { httpGetCategories } from '../apis/backendAPI';

// Actual value/context
export const CategoriesContext = createContext({
  categoriesMap: {},
});

// Context Provider
export function CategoriesProvider({ children }) {
  const [ categoriesMap, setCategoriesMap ] = useState({});

  // fetch products here and setProducts
  useEffect(() => {
    httpGetCategories().then(res => setCategoriesMap(res.data));
  }, []);

  return (
    <CategoriesContext.Provider value={categoriesMap}>
      {children}
    </CategoriesContext.Provider>
  )
}
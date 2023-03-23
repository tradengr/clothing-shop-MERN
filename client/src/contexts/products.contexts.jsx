import React, { createContext, useEffect, useState } from 'react'

import { httpGetCategories } from '../apis/backendAPI';

// Actual value/context
export const ProductsContext = createContext({
  products: null,
  setProducts: () => null,
});

// Context Provider
export function ProductsProvider({ children }) {
  const [ products, setProducts ] = useState([]);

  // fetch products here and setProducts
  useEffect(() => {
    httpGetCategories().then(res => console.log(res.data));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}
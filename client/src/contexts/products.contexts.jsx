import React, { createContext, useState } from 'react'
import PRODUCTS from '../assets/shop-data.json';

// Actual value/context
export const ProductsContext = createContext({
  products: null,
  setProducts: () => null,
});

// Context Provider
export function ProductsProvider({ children }) {
  const [ products, setProducts ] = useState(PRODUCTS);
  // const value = { products, setProducts }

  // fetch products here and setProducts

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}
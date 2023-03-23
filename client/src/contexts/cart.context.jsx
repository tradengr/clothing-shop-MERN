import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

const addCartItem = (cartItems, product) => {
  // create a copy of cartItems to not mutate it
  const newCartItems = [...cartItems];
  // check if cart item already contains the product
  for (let item of newCartItems) {
    // if found: increment quantity and return newCartItem
    if (item.id === product.id) {
      item.quantity++;
      return newCartItems;
    }
  }
  // if not found: add new item to cartItems[]
  return newCartItems.concat([{ ...product, quantity: 1 }]);
  // return new cartItems[]
}

export function CartProvider({ children }) {
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartCount, setCartCount ] = useState(0);
  
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems])
  
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
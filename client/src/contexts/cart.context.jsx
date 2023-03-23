import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  reduceItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
});

const addCartItem = (cartItems, product) => {
  const newCartItems = [...cartItems];
  for (let item of newCartItems) {
    if (item.id === product.id) {
      item.quantity++;
      return newCartItems;
    }
  }
  return newCartItems.concat([{ ...product, quantity: 1 }]);
}

const reduceCartItem = (cartItems, product) => {
  const newCartItems = [...cartItems];
  for (let item of newCartItems) {
    if (item.id === product.id) {
      item.quantity -= 1;
      console.log(item.quantity);
      if (item.quantity < 1) {
        console.log('hit')
        return removeCartItem(cartItems, product);
      }
      return newCartItems;
    }
  }
}

const removeCartItem = (cartItems, product) => {
  const newCartItems = [...cartItems];
  return newCartItems.filter(item => {
    return item.id !== product.id;
  });
}

export function CartProvider({ children }) {
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartCount, setCartCount ] = useState(0);
  
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }

  const reduceItemFromCart = (product) => {
    setCartItems(reduceCartItem(cartItems, product))
  }

  const removeItemFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems])
  
  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    addItemToCart, 
    reduceItemFromCart,
    removeItemFromCart, 
    cartCount 
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
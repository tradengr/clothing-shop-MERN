import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  reduceItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
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

const reduceCartItem = (cartItems, cartItemToReduce) => {
  const newCartItems = [...cartItems];
  for (let item of newCartItems) {
    if (item.id === cartItemToReduce.id) {
      item.quantity--;
      if (item.quantity < 1) {
        return removeCartItem(cartItems, cartItemToReduce);
      }
      return newCartItems;
    }
  }
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const newCartItems = [...cartItems];
  return newCartItems.filter(item => {
    return item.id !== cartItemToRemove.id;
  });
}

export function CartProvider({ children }) {
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartCount, setCartCount ] = useState(0);
  const [ cartTotal, setCartTotal ] = useState(0);
  
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }

  const reduceItemFromCart = (cartItemToReduce) => {
    setCartItems(reduceCartItem(cartItems, cartItemToReduce))
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    setCartTotal(newTotalPrice);
  }, [cartItems])
  
  const value = {   
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    addItemToCart, 
    reduceItemFromCart,
    removeItemFromCart, 
    cartCount,
    cartTotal,
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
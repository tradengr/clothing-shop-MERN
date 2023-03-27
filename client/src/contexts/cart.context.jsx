import React, { createContext, useReducer } from 'react'

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

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  TOGGLE_CART: 'TOGGLE_CART',
}

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload, }
    case CART_ACTION_TYPES.TOGGLE_CART:
      return { ...state, isCartOpen: payload }
    default:
      throw new Error(`Unhandled type of: ${type}, in cartReducer`);
  }
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export function CartProvider({ children }) {
  const [ state, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const toggleCart = () => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART, payload: !state.isCartOpen });
  }
  
  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItems(newCartItems);
  }

  const reduceItemFromCart = (cartItemToReduce) => {
    const newCartItems = reduceCartItem(cartItems, cartItemToReduce);
    updateCartItems(newCartItems);
  }
  
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItems(newCartItems);
  }

  const updateCartItems = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, item) => total + item.quantity, 0);
    const newTotalPrice = newCartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    dispatch({ 
      type: CART_ACTION_TYPES.SET_CART_ITEMS, 
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newTotalPrice,
      },
    });
  }

  const value = {   
    isCartOpen, 
    toggleCart, 
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
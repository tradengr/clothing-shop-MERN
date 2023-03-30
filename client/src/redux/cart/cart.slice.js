// import { CART_ACTION_TYPES } from './cart.types';

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
// };

// export const cartReducer = (state = INITIAL_STATE, action) => {
  //   const { type, payload } = action;
//   switch (type) {
  //     case CART_ACTION_TYPES.SET_CART_ITEMS:
  //       return { ...state, cartItems: payload, };
  //     case CART_ACTION_TYPES.TOGGLE_CART:
  //       return { ...state, isCartOpen: payload };
//     default:
//       return state;
//   }
// }

import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

// Helper functions
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

export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    toggleCart(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    reduceItemFromCart(state, action) {
      state.cartItems = reduceCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
  },
});

export const {
  toggleCart,
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
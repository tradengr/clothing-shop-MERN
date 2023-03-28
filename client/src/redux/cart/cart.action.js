import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer.utils";

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

// Actions
export const toggleCart = (boolean) => {
  return createAction(CART_ACTION_TYPES.TOGGLE_CART, boolean);
}

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const reduceItemFromCart = (cartItems, cartItemToReduce) => {
  const newCartItems = reduceCartItem(cartItems, cartItemToReduce);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
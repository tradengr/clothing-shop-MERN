import React, { createContext, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

const addCartItem = (cartItems, product) => {
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

// const addCartItem = (cartItems, product) => {
//   const existingCartItem = cartItems.find(cartItem => {
//     return cartItem.id === product.id
//   });

//   if (existingCartItem) {
//     return cartItems.map(cartItem => {
//       return (cartItem.id === product.id)
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     });
//   }

//   return [...cartItems, { ...product, quantity: 1 }];

// }

export function CartProvider({ children }) {
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }
  
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
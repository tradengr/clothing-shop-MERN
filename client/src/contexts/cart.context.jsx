// import React, { createContext, useEffect, useState } from 'react'

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   reduceItemFromCart: () => {},
//   removeItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// const addCartItem = (cartItems, product) => {
//   const newCartItems = [...cartItems];
//   for (let item of newCartItems) {
//     if (item.id === product.id) {
//       item.quantity++;
//       return newCartItems;
//     }
//   }
//   return newCartItems.concat([{ ...product, quantity: 1 }]);
// }

// const reduceCartItem = (cartItems, cartItemToReduce) => {
//   const newCartItems = [...cartItems];
//   for (let item of newCartItems) {
//     if (item.id === cartItemToReduce.id) {
//       item.quantity--;
//       if (item.quantity < 1) {
//         return removeCartItem(cartItems, cartItemToReduce);
//       }
//       return newCartItems;
//     }
//   }
// }

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   const newCartItems = [...cartItems];
//   return newCartItems.filter(item => {
//     return item.id !== cartItemToRemove.id;
//   });
// }

// export function CartProvider({ children }) {
//   const [ isCartOpen, setIsCartOpen ] = useState(false);
//   const [ cartItems, setCartItems ] = useState([]);
//   const [ cartCount, setCartCount ] = useState(0);
//   const [ cartTotal, setCartTotal ] = useState(0);
  
//   const addItemToCart = (product) => {
//     setCartItems(addCartItem(cartItems, product));
//   }

//   const reduceItemFromCart = (cartItemToReduce) => {
//     setCartItems(reduceCartItem(cartItems, cartItemToReduce))
//   }

//   const removeItemFromCart = (cartItemToRemove) => {
//     setCartItems(removeCartItem(cartItems, cartItemToRemove));
//   }

//   const toggleCart = () => setIsCartOpen(!isCartOpen);

//   useEffect(() => {
//     const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
//     setCartCount(newCartCount);
//   }, [cartItems]);

//   useEffect(() => {
//     const newTotalPrice = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
//     setCartTotal(newTotalPrice);
//   }, [cartItems])
  
//   const value = {   
//     isCartOpen, 
//     cartItems, 
//     addItemToCart, 
//     reduceItemFromCart,
//     removeItemFromCart, 
//     cartCount,
//     cartTotal,
//     toggleCart,
//   }
  
//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// }




// import React, { createContext, useEffect, useReducer } from 'react'

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   reduceItemFromCart: () => {},
//   removeItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// const addCartItem = (cartItems, product) => {
//   const newCartItems = [...cartItems];
//   for (let item of newCartItems) {
//     if (item.id === product.id) {
//       item.quantity++;
//       return newCartItems;
//     }
//   }
//   return newCartItems.concat([{ ...product, quantity: 1 }]);
// }

// const reduceCartItem = (cartItems, cartItemToReduce) => {
//   const newCartItems = [...cartItems];
//   for (let item of newCartItems) {
//     if (item.id === cartItemToReduce.id) {
//       item.quantity--;
//       if (item.quantity < 1) {
//         return removeCartItem(cartItems, cartItemToReduce);
//       }
//       return newCartItems;
//     }
//   }
// }

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   const newCartItems = [...cartItems];
//   return newCartItems.filter(item => {
//     return item.id !== cartItemToRemove.id;
//   });
// }

// const CART_ACTION_TYPES = {
//   IS_CART_OPEN: 'IS_CART_OPEN',
//   CART_ITEMS: 'CART_ITEMS',
//   CART_COUNT: 'CART_COUNT',
//   CART_TOTAL: 'CART_TOTAL',
//   // ADD_ITEM_T0_CART: 'ADD_ITEM_TO_CART',
// }

// const cartReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case CART_ACTION_TYPES.IS_CART_OPEN:
//       return { ...state, isCartOpen: payload };
//     case CART_ACTION_TYPES.CART_ITEMS:
//       return { ...state, cartItems: payload };
//     case CART_ACTION_TYPES.CART_COUNT:
//       return { ...state, cartCount: payload };
//     case CART_ACTION_TYPES.CART_TOTAL:
//       return { ...state, cartTotal: payload };
//     // case CART_ACTION_TYPES.ADD_ITEM_T0_CART:
//     //   return {
//     //     ...state,
//     //     cartItems: payload.cartItems,
//     //     cartCount: payload.cartCount,
//     //     cartTotal: payload.cartTotal,
//     //   }
//     default:
//       throw new Error(`Unhandled type of: ${type}, in cartReducer`);
//   }
// }

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// export function CartProvider({ children }) {
//   const [ state, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
//   const { isCartOpen, cartItems, cartCount, cartTotal } = state;

//   const toggleCart = () => {
//     dispatch({ type: CART_ACTION_TYPES.IS_CART_OPEN, payload: !state.isCartOpen });
//   }
  
//   const addItemToCart = (product) => {
//     dispatch({ type: CART_ACTION_TYPES.CART_ITEMS, payload: addCartItem(cartItems, product) })
//   }

//   // ------------------------------
//   // const addItemToCart = (product) => {
//   //   dispatch({ 
//   //     type: CART_ACTION_TYPES.ADD_ITEM_T0_CART,
//   //     payload: {
//   //       cartItems: addCartItem(cartItems, product);

//   //     }
//   //   })
//   // }
//   // ------------------------------

//   const reduceItemFromCart = (cartItemToReduce) => {
//     dispatch({ type: CART_ACTION_TYPES.CART_ITEMS, payload: reduceCartItem(cartItems, cartItemToReduce) });
//   }
  
//   const removeItemFromCart = (cartItemToRemove) => {
//     dispatch({ type: CART_ACTION_TYPES.CART_ITEMS, payload: removeCartItem(cartItems, cartItemToRemove) });
//   }
  
//   useEffect(() => {
//     const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
//     dispatch({ type: CART_ACTION_TYPES.CART_COUNT, payload: newCartCount });
//   }, [cartItems]);

//   useEffect(() => {
//     const newTotalPrice = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
//     dispatch({ type: CART_ACTION_TYPES.CART_TOTAL, payload: newTotalPrice });
//   }, [cartItems])

//   const value = {   
//     isCartOpen, 
//     toggleCart, 
//     cartItems, 
//     addItemToCart, 
//     reduceItemFromCart,
//     removeItemFromCart, 
//     cartCount,
//     cartTotal,
//   }
  
//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// }


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

// const cartReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case CART_ACTION_TYPES.IS_CART_OPEN:
//       return { ...state, isCartOpen: payload };
//     case CART_ACTION_TYPES.CART_ITEMS:
//       return { ...state, cartItems: payload };
//     case CART_ACTION_TYPES.CART_COUNT:
//       return { ...state, cartCount: payload };
//     case CART_ACTION_TYPES.CART_TOTAL:
//       return { ...state, cartTotal: payload };
//     // case CART_ACTION_TYPES.ADD_ITEM_T0_CART:
//     //   return {
//     //     ...state,
//     //     cartItems: payload.cartItems,
//     //     cartCount: payload.cartCount,
//     //     cartTotal: payload.cartTotal,
//     //   }
//     default:
//       throw new Error(`Unhandled type of: ${type}, in cartReducer`);
//   }
// }
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
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
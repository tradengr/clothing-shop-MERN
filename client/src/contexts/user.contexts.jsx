// import { createContext, useEffect, useState } from "react";
// import { httpGetUser } from "../apis/backendAPI";

// // Actual value/context
// export const UserContext = createContext({
//   // Default Value
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// // Functional Component - Context Provider
// export const UserProvider = ({ children }) => {
//   const [ currentUser, setCurrentUser ] = useState(null);

//   useEffect(() => {
//     httpGetUser().then(res => setCurrentUser(res.data));
//   }, [])

//   return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
// }

// // Provider allows its child components to access the value on it's useState


import { createContext, useEffect, useReducer } from "react";
import { httpGetUser } from "../apis/backendAPI";

// Actual value/context
export const UserContext = createContext({
  // Default Value
  currentUser: null,
  setCurrentUser: () => null,
});

// To avoid human error on mispelling, create an object that contains our action types
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

// First param: current state obj
// Second param: action is what we pass into the dispatch function
const userReducer = (state, action) => {
  console.log('dispatched');
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { currentUser: payload }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
} 

const INITIAL_STATE = {
  currentUser: null,
}

// Functional Component - Context Provider
export const UserProvider = ({ children }) => {
  // userReducer:
    // First param: a reducer function we perform on our state to create new state
    // Second param: initial value of our state
  // Returns value (array):
    // First element: state: current value being stored in the reducer
      // value is either Initial State or Return value of reducer function
    // Second element: dispatch(): calls the reducer function to update state by passing the action obj
  const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
  }

  useEffect(() => {
    httpGetUser().then(res => setCurrentUser(res.data));
  }, [])

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}

// Provider allows its child components to access the value on it's useState
import { createContext, useEffect, useState } from "react";
import { httpGetUser } from "../apis/backendAPI";

// Actual value/context
export const UserContext = createContext({
  // Default Value
  currentUser: null,
  setCurrentUser: () => null,
});

// Functional Component - Context Provider
export const UserProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(null);

  useEffect(() => {
    httpGetUser().then(res => setCurrentUser(res.data));
  }, [])

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}

// Provider allows its child components to access the value on it's useState
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

// Actual value
export const UserContext = createContext({
  // Default Value
  currentUser: null,
  setCurrentUser: () => null,
});

// Functional Component
export const UserProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(null);
  // const value = { currentUser, setCurrentUser };

  useEffect(() => {
    axios.get('http://localhost:8000/user', { withCredentials: true })
      .then(res => setCurrentUser(res.data));
  }, [])

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}
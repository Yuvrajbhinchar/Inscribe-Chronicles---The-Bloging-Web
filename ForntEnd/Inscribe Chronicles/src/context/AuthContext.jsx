import React, { createContext, useContext, useState, useEffect } from "react";
import { getToken, isValidToken } from "../utils/auth";

// Create Auth Context
const AuthContext = createContext();

// Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = getToken();
    console.log(token);
    if (token && isValidToken(token)) {
      setIsAuth(true);
    } else {
      localStorage.removeItem("token");
    }
  }, []);

  return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>;
};

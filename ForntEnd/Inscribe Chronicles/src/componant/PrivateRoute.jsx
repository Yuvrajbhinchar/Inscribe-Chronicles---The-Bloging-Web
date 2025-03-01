import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const isAuth = useAuth();
  const location = useLocation();
  const pathName = location.pathname;

  console.log(isAuth, " is Auth");
  console.log(pathName, " Current Path");

  // If user is authenticated and on "/", redirect to "/home"
  // if (isAuth && pathName === "/") {
  //   return <Navigate to="/home" replace />;
  // }

  // If user is NOT authenticated, redirect them to "/"
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  // Allow access to the requested route
  return children;
};

export default PrivateRoute;

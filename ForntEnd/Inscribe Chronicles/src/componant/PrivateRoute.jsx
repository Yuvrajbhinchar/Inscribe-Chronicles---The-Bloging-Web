import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const isAuth = useAuth();
  console.log(isAuth);

  // If user is authenticated, prevent access to the LandingPage and redirect them to /home
  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;

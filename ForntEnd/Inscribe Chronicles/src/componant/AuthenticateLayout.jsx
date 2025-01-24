import React from 'react';
import Navbar from './Navbar';

const AuthenticatedLayout = ({ children }) => {
  return (
    <>
      <Navbar /> {/* Only for authenticated users */}
      <div>{children}</div>
    </>
  );
};

export default AuthenticatedLayout;

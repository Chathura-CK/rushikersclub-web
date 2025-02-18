import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../layout/Loader';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div> <Loader /> </div>; // Add a spinner or any loading indicator here
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

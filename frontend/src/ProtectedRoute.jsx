import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute will check if the user is logged in
const ProtectedRoute = ({ element }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Check if the user exists in localStorage

  // If the user is not logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If the user is logged in, render the given element
  return element;
};

export default ProtectedRoute;
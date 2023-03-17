import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

export const ProtectedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);
  return login ? children : <Navigate to="/login" />;
};

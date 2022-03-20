import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
// import useFirebase from '../Pages/hooks/useFirebase';

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const allContent = useFirebase()
  return (
    <AuthContext.Provider value={allContent}>
      {children}
    </AuthContext.Provider >
  );
};

export default AuthContext;
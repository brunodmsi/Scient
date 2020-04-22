import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, handleLogin, handleLogout, loggedInUserInfo
  } = useAuth();

  return (
    <Context.Provider value={{ authenticated, loading, handleLogin, handleLogout, loggedInUserInfo }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };

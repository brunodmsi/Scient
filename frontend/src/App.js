import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from '~/styles/global';
import { AuthProvider } from '~/context/AuthContext';

import history from './services/history';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;

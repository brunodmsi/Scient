/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { ToastContainer } from 'react-toastify';
import Routes from './routes.js';

export default function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}

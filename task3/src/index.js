// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './Store/userSlice';
import App from './App';

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

// Get the root element from the DOM
const container = document.getElementById('root');

// Create the root for React 18 using createRoot
const root = ReactDOM.createRoot(container);

// Render the application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

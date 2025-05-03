import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the change here
import App from './App';
import { CssBaseline } from '@mui/material';
import './index.css';

// This is how you render the app in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);

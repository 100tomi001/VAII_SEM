import React from 'react';
import ReactDOM from 'react-dom/client'; // Nový import
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Použitie createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

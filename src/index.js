import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); 
root.render(
  <App />
);

reportWebVitals();

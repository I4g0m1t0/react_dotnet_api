import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = createRoot(document.getElementById('root')); 
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabelaTarefas from './TabelaTarefas';
import FormAdd from './FormAdd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormEdit from './FormEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TabelaTarefas />} />
        <Route path="/FormEdit/:id" element={<FormEdit />} />
        <Route path="/FormAdd/" element={<FormAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente Form agora é uma função
function FormEdit() {
  // Use o hook useParams para acessar o parâmetro "id" da URL
  const { id } = useParams();

  return (
    <div className='container'>
      <h1 className="text-center">Editar Tarefa</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Nome da tarefa</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder='Insira o nome da tarefa'/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escreva uma descrição sobre a tarefa'></textarea>
      </div>
      {/* Exemplo de como usar o parâmetro "id" */}
      <p>O ID da tarefa é: {id}</p>
    </div>
  );
}

export default FormEdit;

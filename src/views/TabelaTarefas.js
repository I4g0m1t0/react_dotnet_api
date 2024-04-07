import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaTarefa from './ListaTarefas'; 
import { Link } from 'react-router-dom';

class TabelaTarefas extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{marginBottom: "20px", marginTop: "20px"}}>Lista de Tarefas</h1>
        <table className="table" style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Concluído</th>
              <th>Data de Ínicio</th>
              <th>Data de Conclusão</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            <ListaTarefa /> 
          </tbody>
        </table>
        <div className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
          <Link to={`/FormAdd/`}><button type="button" className="btn btn-outline-primary" style={{ paddingLeft: '15px', paddingRight: '15px' }}>Adicionar Tarefa</button></Link>
        </div>
      </div>
    );
  }
}

export default TabelaTarefas;

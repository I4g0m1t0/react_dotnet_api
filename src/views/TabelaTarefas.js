import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaTarefa from './ListaTarefas'; 
import { Link } from 'react-router-dom';

class TabelaTarefas extends Component {
  render() {
    return (
      <div className="justify-content-center" style={{ marginTop: "20px", marginBottom: "20px", marginRight: "40px", marginLeft: "40px"}}>
        <h1 className="text-center" style={{ marginBottom: "20px" }}>Lista de Tarefas</h1>
        <table className="table mx-auto" style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Concluído</th>
              <th>Data de Ínicio</th>
              <th>Data de Conclusão</th>
              <th>Marcar como Concluída</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            <ListaTarefa /> 
          </tbody>
        </table>
        <div className="d-flex justify-content-center" style={{marginTop: "20px"}}>
          <Link to={`/FormAdd/`}><button type="button" className="btn btn-outline-primary">Adicionar Tarefa</button></Link>
        </div>
      </div>
    );
  }
}

export default TabelaTarefas;

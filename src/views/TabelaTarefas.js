import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaTarefa from './ListaTarefas'; // Corrigido o nome do arquivo de importação

class TabelaTarefas extends Component {
  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
}

export default TabelaTarefas;

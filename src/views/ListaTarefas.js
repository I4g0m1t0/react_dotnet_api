import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router-dom';

library.add(faEdit, faTrash);

class ListaTarefa extends Component {
  state = {
    tarefas: []
  }

  componentDidMount() {
    this.lista();
  }

  lista = () => {
    axios.get('https://localhost:7146/api/Tarefa')
      .then(response => {
        // handle success
        const tarefas = response.data;
        this.setState({ tarefas });
      })
      .catch(error => {
        // handle error
        console.error('Error fetching data:', error);
      });
  }

  excluirTarefa = (tarefa) => {
    const { id } = tarefa; // Extrai o ID da tarefa
    if (window.confirm("Deseja realmente excluir?")) {
      axios.delete(`https://localhost:7146/api/Tarefa/${id}`)
        .then(response => {
          this.lista();
        })
        .catch(error => {
          console.error('Erro ao excluir tarefa:', error);
        });
    }
  }
  
  
  

  render() {
    return (
      <>
        {this.state.tarefas.map(tarefa => (
          <tr key={tarefa.id}>
            <td>{tarefa.id}</td>
            <td>{tarefa.nome}</td>
            <td>{tarefa.descricao}</td>
            <td>{tarefa.concluida ? 'Sim' : 'Não'}</td>
            <td>{tarefa.dataEntrada}</td>
            <td>{tarefa.dataConclusao}</td>
            <td><Link to={`/FormEdit/${tarefa.id}`}><FontAwesomeIcon icon="edit" /></Link></td> 
            <td><FontAwesomeIcon icon="trash" onClick={() => this.excluirTarefa(tarefa)} style={{color:"red"}} /></td>
          </tr>
        ))}
      </>
    );
  }
}

export default ListaTarefa;

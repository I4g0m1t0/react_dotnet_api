import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

library.add(faEdit, faTrash);

class ListaTarefa extends Component {
    state = {
      tarefas: []
    }
    componentDidMount(){
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
  render() {
    return (
      <>
        {
          this.state.tarefas.map(tarefas =>(
            <tr>
              <td>{tarefas.id}</td>
              <td>{tarefas.nome}</td>
              <td>{tarefas.descricao}</td>
              <td>{tarefas.concluida}</td>
              <td>{tarefas.dataEntrada}</td>
              <td>{tarefas.dataConclusao}</td>
              <td><FontAwesomeIcon icon="edit" /></td> 
              <td><FontAwesomeIcon icon="trash" /></td>
            </tr>
          ))
        
        }
      </>
    );
  }
}

export default ListaTarefa;

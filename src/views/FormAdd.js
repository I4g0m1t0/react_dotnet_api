import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class FormAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      descricao: '',
      concluida: false,
      dataConclusao: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleRadioChange = (event) => {
    const value = event.target.value === 'true';
    this.setState({
      concluida: value
    });
  };

  handleSubmit = () => {
    const { nome, descricao, concluida, dataConclusao } = this.state;

    axios.post('https://localhost:7146/api/Tarefa', {
      nome: nome,
      descricao: descricao,
      concluida: concluida,
      dataConclusao: dataConclusao
    })
    .then(response => {
      console.log(response);
      window.location.href = "/";
    })
    .catch(error => {
      console.error('Erro ao enviar dados para a API:', error);
    });
  }

  render() {
    return (
      <div className='container' style={{ marginTop: "20px" }}>
        <h1 className="text-center">Adicionar Tarefa</h1>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome da tarefa:</label>
          <input type="text" className="form-control" id="nome" name='nome' value={this.state.nome} onChange={this.handleInputChange} placeholder='Insira o nome da tarefa'/>
        </div>
        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">Descrição:</label>
          <textarea className="form-control" id="descricao" name='descricao' value={this.state.descricao} onChange={this.handleInputChange} rows="3" placeholder='Insira a descrição da tarefa'></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">A tarefa já foi concluída?</label>
          <br></br>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="concluida" id="sim" value={true} checked={this.state.concluida === true} onChange={this.handleRadioChange} />
            <label className="form-check-label" htmlFor="sim">Sim</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="concluida" id="nao" value={false} checked={this.state.concluida === false} onChange={this.handleRadioChange} />
            <label className="form-check-label" htmlFor="nao">Não</label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="dataConclusao" className="form-label">Data prevista para conclusão:</label>
          <input className="form-control" type="date" id="dataConclusao" name='dataConclusao' value={this.state.dataConclusao} onChange={this.handleInputChange} />
        </div>

        <div className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
          <button type="button" className="btn btn-outline-primary" style={{ paddingLeft: '25px', paddingRight: '25px' }} onClick={this.handleSubmit}>Adicionar</button>
        </div>
      </div>
    );
  }
}

export default FormAdd;

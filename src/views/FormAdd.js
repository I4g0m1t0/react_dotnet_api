import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// Componente Form agora é uma função
class FormAdd extends Component {
  render(){
  return (
    <div className='container' style={{marginTop:"20px"}}>
          <h1 className="text-center">Adicionar Tarefa</h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Nome da tarefa:</label>
            <input type="text" className="form-control" id="nome" name='nome' placeholder='Insira o nome da tarefa' htmlFor="nome"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição:</label>
            <textarea className="form-control" id="descricao" name='descricao' rows="3" placeholder='Escreva uma descrição sobre a tarefa' htmlFor="descricao"></textarea>
          </div>

          {/*Radio button pra verificar se a tarefa foi concluída*/}
          <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">A tarefa já foi concluída?</label>
              <br></br>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={true}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Sim
                </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked value={false}/>
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Não
              </label>
            </div>
          </div>

          {/*Inserindo a data*/}
          <div className="mb-3">
            <label htmlFor="exampleDateInput" className="form-label">Data prevista para conclusão:</label>
            <input className="form-control" type="date" id="dataConclusao" name='dataConclusao' htmlFor="dataConclusao"/>
          </div>
          
          {/*botão adicionar*/}
          <div className="d-flex justify-content-center" style={{marginTop:"20px"}}>
            <button type="button" className="btn btn-outline-primary" style={{paddingLeft: '25px', paddingRight: '25px'}}>Adicionar</button>
          </div>     
        </div> 
  );
}
}

export default FormAdd;

import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component{
  render(){
  return <div  className='container'>
          <h1 className="text-center">Gerenciador de Tarefas</h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Nome da tarefa</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder='Insira o nome da tarefa'/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escreva uma descrição sobre a tarefa'></textarea>
          </div>
        </div>  
  }
}

export default Form;

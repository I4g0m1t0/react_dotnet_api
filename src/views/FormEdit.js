import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FormEdit() {
  const [tarefa, setTarefa] = useState({
    id: 0,
    nome: "",
    descricao: "",
    dataEntrada: "",
    dataConclusao: "",
    concluida: false
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`https://localhost:7146/api/Tarefa/${id}`)
        .then(response => {
          const tarefaData = response.data;
          setTarefa(tarefaData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [id]);

  //Para alterar as strings.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTarefa(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  //Para salvar os dados
  const salvarDados = () => {
    axios.put(`https://localhost:7146/api/Tarefa/${id}`, tarefa)
      .then(response => {
        console.log('Dados salvos com sucesso:', response.data);
        // Redirecionar para a página inicial após salvar os dados
        window.location.href = "/";
      })
      .catch(error => {
        console.error('Erro ao salvar dados:', error);
      });
  };

  // Para lidar com a seleção do radio button
  const handleRadioChange = (value) => {
    setTarefa(prevState => ({
      ...prevState,
      concluida: value === 'true'
    }));
  };

  // Para lidar com a alteração da data
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setTarefa(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const { nome, descricao, dataConclusao, concluida } = tarefa;

  return (
    <div className='container' style={{ marginTop: "20px" }}>
      <h1 className="text-center">Editar Tarefa {id}</h1>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Nome da tarefa:</label>
        <input type="text" className="form-control" id="nome" name='nome' value={nome} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="descricao" className="form-label">Descrição:</label>
        <textarea className="form-control" id="descricao" name='descricao' rows="3" value={descricao} onChange={handleChange}></textarea>
      </div>

      <label htmlFor="descricao" className="form-label">Tarefa concluída?</label>
      <div className="mb-3 form-check">
        <div className="form-check">
          <input type="radio" className="form-check-input" id="concluidaSim" name="concluida" value="true" checked={concluida === true} onChange={() => handleRadioChange('true')} />
          <label className="form-check-label" htmlFor="concluidaSim">Sim</label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" id="concluidaNao" name="concluida" value="false" checked={concluida === false} onChange={() => handleRadioChange('false')} />
          <label className="form-check-label" htmlFor="concluidaNao">Não</label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="dataConclusao" className="form-label">Data prevista para conclusão:</label>
        <input type="date" className="form-control" id="dataConclusao" name='dataConclusao' value={dataConclusao} onChange={handleDateChange} />
      </div>

      <div className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
        <button type="button" className="btn btn-outline-primary" style={{ paddingLeft: '25px', paddingRight: '25px' }} onClick={salvarDados}>Salvar Alterações</button>
      </div>
    </div>
  );
}

export default FormEdit;

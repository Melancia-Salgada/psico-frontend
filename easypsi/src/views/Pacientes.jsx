import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';

const Pacientes = () => {
  const headers = ['Paciente', 'Horário', 'Próxima consulta', 'Atividade'];
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_BACKEND'); 
        const jsonData = await response.json();
        
        setData(jsonData.pacientes); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Pacientes</Titulo>
        <Pesquisa showButton={true} appName='Paciente' />
        <List headers={headers} data={data} />
      </div>
      <WhiteMode />
    </div>
  );
};

export default Pacientes;

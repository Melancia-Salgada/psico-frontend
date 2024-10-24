import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';

const Consultas = ({  }) => {
  const headers = ['Paciente', 'Data', 'Horário', 'Valor', 'Status', 'Atividade'];
  const [data, setData] = useState([]);

  const svg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
    </svg>
  )

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_BACKEND'); 
        const jsonData = await response.json();
        
        setData(jsonData.consultas); 
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
        <Titulo showButton={true} buttonLink='agenda' buttonText='Voltar' buttonIcon={svg}>Consultas</Titulo>
        <Pesquisa showButton={true} appName='Consulta'/>
        <List headers={headers} data={data} />
      </div>
      <WhiteMode />
    </div>
  );
};

export default Consultas;

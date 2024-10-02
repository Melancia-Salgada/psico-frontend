import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';

const Consultas = ({  }) => {
  const headers = ['Paciente', 'Data', 'Horário', 'Valor', 'Status', 'Atividade'];
  const [data, setData] = useState([]);

  

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
    <div className={`min-h-screen`}>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Consultas</Titulo>
        <Pesquisa showButton={true} />
        <List headers={headers} data={data} />
      </div>
      <WhiteMode />
    </div>
  );
};

export default Consultas;

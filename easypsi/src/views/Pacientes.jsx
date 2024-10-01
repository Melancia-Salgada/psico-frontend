import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';

const Pacientes = () => {
  const headers = ['Paciente', 'Horário', 'Próxima consulta', 'Atividade'];
  const [data, setData] = useState([]);
  const [whiteMode, setWhiteMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DO_SEU_BACKEND'); // Replace with your backend URL
        const jsonData = await response.json();
        
        setData(jsonData.pacientes); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  // Toggle the white mode class on the html element
  useEffect(() => {
    if (whiteMode) {
      document.documentElement.classList.add('whitemode');
    } else {
      document.documentElement.classList.remove('whitemode');
    }
  }, [whiteMode]);

  return (
    <div className={`min-h-screen`}>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Pacientes</Titulo>
        <Pesquisa showButton={true} />
        <List headers={headers} data={data} />
      </div>
      <WhiteMode onToggle={setWhiteMode} /> 
    </div>
  );
};

export default Pacientes;

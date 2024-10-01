import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';

const Pacientes = () => {
  const headers = ['Paciente', 'Horário', 'Próxima consulta', 'Atividade'];
  const [data, setData] = useState([]);
  const [whiteMode, setWhiteMode] = useState(false); // State to manage white mode

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DO_SEU_BACKEND');
        const jsonData = await response.json();
        
        setData(jsonData.pacientes); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={whiteMode ? 'white-mode' : ''}> {/* Apply class based on whiteMode */}
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Pacientes</Titulo>
        <Pesquisa showButton={true} />
        <List headers={headers} data={data} />
      </div>
      <WhiteMode onToggle={setWhiteMode} /> {/* Pass the toggle function to WhiteMode */}
    </div>
  );
};

export default Pacientes;

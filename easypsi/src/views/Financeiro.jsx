import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';

const Financeiro = () => {
  const headers = ['Paciente', 'Valor', 'Vencimento', 'Status'];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_BACKEND'); 
        const jsonData = await response.json();
        
        setData(jsonData.financeiro); 
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
        <Titulo showButton={false}>Financeiro</Titulo>
        <Pesquisa showButton={true} />
        <List headers={headers} data={data} />
      </div>
      <WhiteMode />
    </div>
  );
};

export default Financeiro;

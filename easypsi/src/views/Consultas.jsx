import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';

const Consultas = () => {
  const headers = ['Paciente', 'Data', 'Horário', 'Status', 'Tipo', 'Ações'];
  const [data] = useState([
    ['João Silva', '15/11/2024', '08:00', 'Realizado', 'Inicial'],
    ['João Silva', '15/11/2024', '08:00', 'Realizado', 'Inicial'],
    ['Maria Oliveira', '18/11/2024', '09:30', 'Não Realizado', 'Acompanhamento'],
    ['Carlos Santos', '25/11/2024', '11:00', 'Realizado', 'Retorno'],
    ['Ana Paula', 'Não definido', '14:00', 'Não Realizado', 'Cancelada'],
    ['Luiz Fernando', '28/11/2024', '10:00', 'Não Realizado', 'Inicial'],
    ['Fernanda Lima', '30/11/2024', '15:00', 'Não Realizado', 'Acompanhamento'],
  ]);

  

  

  const [filtroStatus, setFiltroStatus] = useState(''); // Armazena filtro de status
  const [filtroTipo, setFiltroTipo] = useState(''); // Armazena filtro de tipo
  const [searchTerm, setSearchTerm] = useState(''); // Armazena busca

  // função para filtro
  const filteredData = data.filter((paciente) => {
    const isStatusMatch = filtroStatus === '' || paciente[3] === filtroStatus; // Verifica o status
    const isTipoMatch = filtroTipo === '' || paciente[4].toLowerCase() === filtroTipo.toLowerCase(); // Verifica o tipo
    const isSearchMatch = paciente[0].toLowerCase().includes(searchTerm.toLowerCase()); // Verifica  pesquisa
    return isStatusMatch && isTipoMatch && isSearchMatch;
  });

  const svg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
    </svg>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_BACKEND'); 
        const jsonData = await response.json();
        
        // setData(jsonData.consultas); 
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
        <Pesquisa
          showButton={true}
          appName='Consulta'
          onFiltroChange={setFiltroStatus} 
          onSearchChange={setSearchTerm} 
          onTipoChange={setFiltroTipo}
        />
        <List headers={headers} data={filteredData} /> {/* Usa filteredData */}
      </div>
      <WhiteMode />
    </div>
  );
};

export default Consultas;

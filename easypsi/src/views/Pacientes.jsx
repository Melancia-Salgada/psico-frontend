import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';

const Pacientes = () => {
  const headers = ['Paciente', 'Horário', 'Próxima consulta', 'Atividade'];

  // Dados fictícios para simular o conteúdo
  const [data] = useState([
    ['João Silva', '08:00', '15/11/2024', 'Ativo'],
    ['Maria Oliveira', '09:30', '18/11/2024', 'Ativo'],
    ['Carlos Santos', '11:00', 'Não definido', 'Ativo'],
    ['Ana Paula', '14:00', '25/11/2024', 'Inativo'],
  ]);

  const [filtroStatus, setFiltroStatus] = useState(''); // Armazena filtro
  const [searchTerm, setSearchTerm] = useState(''); // Armazena busca

  // Função para filtrar dados com base no status selecionado e no termo de pesquisa
  const filteredData = data.filter((paciente) => {
    const isStatusMatch = filtroStatus === '' || paciente[3] === filtroStatus; // Verifica o status
    const isSearchMatch = paciente[0].toLowerCase().includes(searchTerm.toLowerCase()); // Verifica o termo de pesquisa
    return isStatusMatch && isSearchMatch; // Retorna true se ambos os filtros forem correspondentes
  });

  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Pacientes</Titulo>
        <Pesquisa
          showButton={true}
          appName='Paciente'
          onFiltroChange={setFiltroStatus} // Passa a função de alteração do filtro
          onSearchChange={setSearchTerm} // Passa a função de alteração da pesquisa
        />
        <List headers={headers} data={filteredData} />
      </div>
      <WhiteMode />
    </div>
  );
};

export default Pacientes;

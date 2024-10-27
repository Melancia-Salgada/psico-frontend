import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';

const Pacientes = () => {
  const headers = ['Paciente', 'Horário', 'Próxima consulta', 'Atividade', 'Ações'];

  // Dados fictícios para simuolar o conteúd
  const [data] = useState([
    ['João Silva', '08:00', '15/11/2024', 'Ativo'],
    ['Maria Oliveira', '09:30', '18/11/2024', 'Ativo'],
    ['Carlos Santos', '11:00', 'Não definido', 'Ativo'],
    ['Ana Paula', '14:00', '25/11/2024', 'Inativo'],
  ]); //Mudar para setdata quando integrar o back

  const [filtroStatus, setFiltroStatus] = useState(''); // Armazena filtro
  const [searchTerm, setSearchTerm] = useState(''); // Armazena busca

  // Função para filtrar dados com base no status selecionado e no termo de pesquisa
  const filteredData = data.filter((paciente) => {
    const isStatusMatch = filtroStatus === '' || paciente[3] === filtroStatus; // Verifica o status
    const isSearchMatch = paciente[0].toLowerCase().includes(searchTerm.toLowerCase()); // Verifica o termo de pesquisa
    return isStatusMatch && isSearchMatch; // Retorna true se ambos os filtros forem correspondentes
  });

  // Função para lidar com o clique do botão "Ver mais"
  const handleViewMore = (row) => {
    // Aqui você pode implementar a lógica para mostrar mais detalhes
    // Por exemplo, pode usar um modal, um alerta ou redirecionar para outra página
    alert(`Detalhes de ${row[0]}: Horário: ${row[1]}, Próxima consulta: ${row[2]}, Atividade: ${row[3]}`);
  };

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
          margin={true}
        />
        <List headers={headers} data={filteredData} onViewMore={handleViewMore} /> {/* Passa a função */}
      </div>
      <WhiteMode />
    </div>
  );
};

export default Pacientes;

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';
import axios from 'axios';

const Consultas = () => {
  const headers = ['Nome', 'Email do Paciente', 'Data', 'Horário', 'Ações'];
  const [data, setData] = useState([]); // State para armazenar os dados

  

  

  const [filtroStatus, setFiltroStatus] = useState(''); // Armazena filtro de status
  const [filtroTipo, setFiltroTipo] = useState(''); // Armazena filtro de tipo
  const [searchTerm, setSearchTerm] = useState(''); // Armazena busca
  const [dateRange, setDateRange] = useState({ inicio: '', fim: '' });

  // função para filtro
  const filteredData = data.filter((paciente) => {
    const isStatusMatch = filtroStatus === '' || paciente[3] === filtroStatus;
    const isTipoMatch = filtroTipo === '' || paciente[4].toLowerCase() === filtroTipo.toLowerCase();
    const isSearchMatch = paciente[0].toLowerCase().includes(searchTerm.toLowerCase());
  
    const consultaData = new Date(paciente[1].split('/').reverse().join('-'));
    const inicio = dateRange.inicio ? new Date(dateRange.inicio) : null;
    const fim = dateRange.fim ? new Date(dateRange.fim) : null;
    const isDateMatch = (!inicio || consultaData >= inicio) && (!fim || consultaData <= fim);
  
    return isStatusMatch && isTipoMatch && isSearchMatch && isDateMatch;
  });

  const handleDateRangeChange = (inicio, fim) => {
    setDateRange({ inicio, fim });
  };
  


  const svg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
    </svg>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // ou o método adequado que você utiliza para armazenar o token
  
        const response = await axios.get(`http://127.0.0.1:8003/listar-agendamentos`, {
          headers: {
            Authorization: `Bearer ${token}` // Adiciona o token no cabeçalho
          }
        });
        

        
        console.log(response.data); // Verifique a estrutura dos dados da API
        // Aqui ele retorna as consultas do tipo Array, não existe a propriedade pacientes dentro da resposta,
        // checar a resposta deste console.log no navegador pra implementar a lista de agendamentos
        const consultas = response.data
        const formattedData = consultas.map(consulta => {
          const [data, hora] = consulta[0].inicio.split(' ');
          return [
            consulta[0].nome,
            consulta[0].email_cliente,
            data,        // Data separada
            hora,        // Horário separado
          ];
        });
        
        
        setData(formattedData)

        {/*const pacientes = response.data.Pacientes; // Acesse a chave 'Pacientes'
        const formattedData = pacientes.map(paciente => [
          paciente.nomeCompleto,
          paciente.email,
          paciente.telefone, // Use 'telefone' aqui, e não 'phonenumber'
          paciente.grupo // Use 'grupo' aqui
        ]); 
        setData(formattedData); // Atualiza o estado com os dados formatados*/}
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
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
          onDateRangeChange={handleDateRangeChange}
        />


        <List headers={headers} data={filteredData} appName='Consulta' limite="h-[30rem]"/> {/* Usa filteredData */}
      </div>
      <WhiteMode />
    </div>
  );
};

export default Consultas;

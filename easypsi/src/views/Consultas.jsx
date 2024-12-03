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
  const [searchTerm, setSearchTerm] = useState(''); // Armazena busca
  const [dateRange, setDateRange] = useState({ inicio: '', fim: '' });

  // Função para filtro
  const filteredData = data.filter((paciente) => {
    const isSearchMatch = paciente.email_cliente && paciente.email_cliente.toLowerCase().includes(searchTerm.toLowerCase());
    
    const consultaData = new Date(paciente.data.split('/').reverse().join('-'));
    const inicio = dateRange.inicio ? new Date(dateRange.inicio) : null;
    const fim = dateRange.fim ? new Date(dateRange.fim) : null;
    const isDateMatch = (!inicio || consultaData >= inicio) && (!fim || consultaData <= fim);

    return isSearchMatch && isDateMatch;
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
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://127.0.0.1:8003/listar-agendamentos`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log('Dados completos da API:', response.data);

        const consultas = Array.isArray(response.data) ? response.data : [];
        console.log('Consultas extraídas:', consultas);

        const formattedData = consultas.map(consulta => ({
          nome: consulta.nome,
          email_cliente: consulta.email_cliente,
          data: consulta.inicio.split(' ')[0],  // Data
          hora: consulta.inicio.split(' ')[1],  // Hora
        }));

        console.log('Dados formatados:', formattedData);
        setData(formattedData);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  console.log('Estado final de data:', data);

  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={true} buttonLink='agenda' buttonText='Voltar' buttonIcon={svg}>Consultas</Titulo>
        <Pesquisa
          showButton={true}
          appName='Consulta'
          onSearchChange={setSearchTerm}
          onDateRangeChange={handleDateRangeChange}
        />
        <List headers={headers} data={filteredData} appName='Consulta' limite="h-[30rem]"/> {/* Usa filteredData */}
      </div>
      <WhiteMode />
    </div>
  );
};

export default Consultas;

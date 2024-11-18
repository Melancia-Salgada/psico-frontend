import React, { useState,useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';
import axios from 'axios';

const Pacientes = () => {
  const headers = ['Nome', 'Email', 'Telefone', 'Grupo', 'Ações'];

  const [data, setData] = useState([]); // State para armazenar os dados
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtém o token, por exemplo, de localStorage, sessão ou de outro lugar
        const token = localStorage.getItem('token'); // ou o método adequado que você utiliza para armazenar o token
  
        const response = await axios.get(`http://127.0.0.1:8002/todos-pacientes`, {
          headers: {
            Authorization: `Bearer ${token}` // Adiciona o token no cabeçalho
          }
        });
  
        console.log(response.data); // Verifique a estrutura dos dados da API
        const pacientes = response.data.Pacientes; // Acesse a chave 'Pacientes'
        const formattedData = pacientes.map(paciente => [
          paciente.nomeCompleto,
          paciente.email,
          paciente.telefone, // Use 'telefone' aqui, e não 'phonenumber'
          paciente.grupo // Use 'grupo' aqui
        ]); 
        setData(formattedData); // Atualiza o estado com os dados formatados
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };
  
    fetchData(); // Chama a função para buscar os dados
  }, []); // A dependência vazia garante que a requisição seja feita apenas uma vez ao montar o componente
  

  const [filtroStatus, setFiltroStatus] = useState(''); // Armazena filtro
  const [searchTerm, setSearchTerm] = useState(''); // Armazena busca

  // Função para filtrar dados com base no status selecionado e no termo de pesquisa
  const filteredData = data.filter((paciente) => {
    const isStatusMatch = filtroStatus === '' || paciente[3] === filtroStatus; // Verifica o status
    const isSearchMatch = paciente[0].toLowerCase().includes(searchTerm.toLowerCase()); // Verifica o termo de pesquisa
    return isStatusMatch && isSearchMatch; // Retorna true se ambos os filtros forem correspondentes
  });


  return (
    <>
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
        <List headers={headers} data={filteredData}  appName='Paciente'/> {/* Passa a função */}
      </div>
      <WhiteMode />
    </>
  );
};

export default Pacientes;

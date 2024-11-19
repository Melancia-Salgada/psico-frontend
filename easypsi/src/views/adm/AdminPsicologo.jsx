import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import Titulo from '../../components/Titulo';
import WhiteMode from '../../components/WhiteMode';
import List from '../../components/Lista/List';
import Pesquisa from '../../components/Lista/Pesquisa';
import axios from 'axios'; // Importe o axios para a requisição

const AdminPsicologo = () => {
  const headers = ['Email', 'CRP', 'CPF','Ações'];
  const [data, setData] = useState([]); // State para armazenar os dados
  const [searchTerm, setSearchTerm] = useState(''); // Armazena busca
  const token = localStorage.getItem('token');

  // Função para carregar os dados da API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8001/listar-usuarios', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }); // Chama a API para obter os dados
        console.log(response.data); // Verifique a estrutura dos dados da API

        const users = response.data.users; // Pega a lista de usuários da resposta
        if (users) {
          const filteredPsychologists = users.filter(user => user.tipo === 'Psicólogo'); // Filtra apenas os psicólogos
          const formattedData = filteredPsychologists.map(user => [user.email, user.CPF, user.CRP]); // Formata os dados para o formato da tabela
          setData(formattedData); // Atualiza o estado com os dados formatados
        }
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData(); // Chama a função para buscar os dados
  }, []); // A dependência vazia garante que a requisição seja feita apenas uma vez ao montar o componente

  // Filtra os dados com base no termo de pesquisa
  const filteredData = data.filter((paciente) => {
    const nome = paciente[0] || ''; // Caso esteja undefined, usa uma string vazia
    const isSearchMatch = nome.toLowerCase().includes(searchTerm.toLowerCase()); // Verifica o termo de pesquisa
    return isSearchMatch; // Retorna true se corresponder ao termo de pesquisa
  });

  return (
    <div>
      <AdminSidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Gerenciamento de Psicólogos</Titulo>
        <Pesquisa onSearchChange={setSearchTerm} showButton={false} appName='Psicologo' margin={true} />
        <List headers={headers} data={filteredData} appName='Psicologo' />
      </div>
      <WhiteMode />
    </div>
  );
};

export default AdminPsicologo;

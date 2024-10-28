import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar'
import Titulo from '../../components/Titulo'
import WhiteMode from '../../components/WhiteMode'
import List from '../../components/Lista/List'
import Pesquisa from '../../components/Lista/Pesquisa';

const AdminPsicologo = () => {

    const headers = ['Nome', 'Email', 'CRM', 'Ações'];
  
    // Dados fictícios para simuolar o conteúd
    const [data] = useState([
      ['Carol', '123', '101'],
      ['Francini', '456', '456'],
      ['Murilo', '789', '789'],
      ['Julia', '101', '123']
    ]); //Mudar para setdata quando integrar o back
  
    const [searchTerm, setSearchTerm] = useState(''); // Armazena busca
    const filteredData = data.filter((paciente) => {
      const isSearchMatch = paciente[0].toLowerCase().includes(searchTerm.toLowerCase()); // Verifica o termo de pesquisa
      return isSearchMatch; // Retorna true se ambos os filtros forem correspondentes
    });
  
    return (
      <div>
          <AdminSidebar></AdminSidebar>
          <div className='container-dash'>
              <Titulo showButton={false}>Gerenciamento de psicólogos</Titulo>
              <Pesquisa onSearchChange={setSearchTerm} showButton={false} appName='Psicologo' margin={true}></Pesquisa>
              <List headers={headers} data={filteredData}></List>
          </div>
          <WhiteMode />
      </div>
    )
  }

export default AdminPsicologo
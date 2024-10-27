import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar'
import Titulo from '../../components/Titulo'
import WhiteMode from '../../components/WhiteMode'
import List from '../../components/Lista/List'



const Gerenciamento = () => {

  const headers = ['Email', 'Número', 'CPF'];

  // Dados fictícios para simuolar o conteúd
  const [data] = useState([
    ['a@a.com', '123', '15/11/2024', 'Ativo'],
    ['Maria Oliveira', '09:30', '18/11/2024', 'Ativo'],
    ['Carlos Santos', '11:00', 'Não definido', 'Ativo'],
    ['Ana Paula', '14:00', '25/11/2024', 'Inativo'],
  ]); //Mudar para setdata quando integrar o back

  return (
    <div>
        <AdminSidebar></AdminSidebar>
        <div className='container-dash'>
            <Titulo showButton={false}>Gerenciamento de admins</Titulo>
            <List headers={headers} data={data}></List>
        </div>
        <WhiteMode />
    </div>
  )
}

export default Gerenciamento
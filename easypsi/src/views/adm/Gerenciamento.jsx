import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar'
import Titulo from '../../components/Titulo'
import WhiteMode from '../../components/WhiteMode'
import List from '../../components/Lista/List'
import Pesquisa from '../../components/Lista/Pesquisa';



const Gerenciamento = () => {

  const headers = ['Email', 'Número', 'CPF', 'Ações'];

  // Dados fictícios para simuolar o conteúd
  const [data] = useState([
    ['a@a.com', '123', '101'],
    ['b@b.com', '456', '456'],
    ['c@c.com', '789', '789'],
    ['c@c.com', '101', '123']
  ]); //Mudar para setdata quando integrar o back

  return (
    <div>
        <AdminSidebar></AdminSidebar>
        <div className='container-dash'>
            <Titulo showButton={false}>Gerenciamento de admins</Titulo>
            <Pesquisa></Pesquisa>
            <List headers={headers} data={data}></List>
        </div>
        <WhiteMode />
    </div>
  )
}

export default Gerenciamento
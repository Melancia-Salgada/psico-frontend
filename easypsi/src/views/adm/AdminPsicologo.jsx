import React from 'react'
import AdminSidebar from './AdminSidebar'
import Titulo from '../../components/Titulo'
import WhiteMode from '../../components/WhiteMode'

const AdminPsicologo = () => {
  return (
    <div>
        <AdminSidebar></AdminSidebar>
        <div className='container-dash'>
            <Titulo showButton={false}>Gerenciamento de psicólogos</Titulo>
        </div>
        <WhiteMode />
    </div>
  )
}

export default AdminPsicologo
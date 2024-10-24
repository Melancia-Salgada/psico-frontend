import React from 'react'
import AdminSidebar from './AdminSidebar'
import Titulo from '../../components/Titulo'
import WhiteMode from '../../components/WhiteMode'

const AdminPerfil = () => {
  return (
    <div>
        <AdminSidebar></AdminSidebar>
        <div className='container-dash'>
            <Titulo showButton={false}>Perfil</Titulo>
        </div>
        <WhiteMode />
    </div>
  )
}

export default AdminPerfil
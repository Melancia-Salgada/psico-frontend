import React from 'react'
import AdminSidebar from '../adm/AdminSidebar'
import Titulo from '../../components/Titulo'
import WhiteMode from '../../components/WhiteMode'

const AdminHome = () => {
  return (
    <div>
      <AdminSidebar></AdminSidebar>
      <div className='container-dash'>
        <Titulo showButton={false}>Olá, <span className='text-roxo'>Nome</span>!</Titulo>
      </div>
      <WhiteMode />
    </div>
  )
}

export default AdminHome
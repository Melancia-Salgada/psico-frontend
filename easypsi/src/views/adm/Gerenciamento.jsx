import React from 'react'
import AdminSidebar from './AdminSidebar'
import Titulo from '../../components/Titulo'
import WhiteMode from '../../components/WhiteMode'

const Gerenciamento = () => {
  return (
    <div>
        <AdminSidebar></AdminSidebar>
        <div className='container-dash'>
            <Titulo showButton={false}>Gerenciamento de admins</Titulo>
        </div>
        <WhiteMode />
    </div>
  )
}

export default Gerenciamento
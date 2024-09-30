import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'

const Perfil = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-32'>
            <Titulo>Perfil</Titulo>
        </div>
    </div>
  )
}

export default Perfil
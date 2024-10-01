import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import WhiteMode from '../components/WhiteMode'

const Perfil = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-32'>
            <Titulo>Perfil</Titulo>
        </div>
        <WhiteMode/>
    </div>
  )
}

export default Perfil
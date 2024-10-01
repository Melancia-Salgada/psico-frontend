import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import Lista from '../components/Lista'

const Pacientes = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-32'>
          <Titulo>Pacientes</Titulo>
          <Lista></Lista>
        </div>
    </div>
  )
}

export default Pacientes
import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'

const Pacientes = () => {
  return (
    <div>
        <Sidebar/>
        <div className='container ml-24'>
          <Titulo>Pacientes</Titulo>
        </div>
    </div>
  )
}

export default Pacientes
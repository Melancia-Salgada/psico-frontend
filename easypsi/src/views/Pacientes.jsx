import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import Lista from '../components/Lista'
import WhiteMode from '../components/WhiteMode'

const Pacientes = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-32 mr-page-rigth'>
          <Titulo>Pacientes</Titulo>
          <Lista></Lista>
        </div>
        <WhiteMode/>
    </div>
  )
}

export default Pacientes
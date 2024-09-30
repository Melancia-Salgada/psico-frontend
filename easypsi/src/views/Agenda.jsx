import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'

const Agenda = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-32'>
            <Titulo>Agenda</Titulo>
        </div>
    </div>
  )
}

export default Agenda
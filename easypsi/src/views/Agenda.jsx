import React from 'react'
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import WhiteMode from '../components/WhiteMode'

const Agenda = () => {
  return (
    <div>
        <Sidebar/>
        <div className='container-dash'>
            <Titulo showButton={true}>Agenda</Titulo>
        </div>
        <WhiteMode/>
    </div>
  )
}

export default Agenda
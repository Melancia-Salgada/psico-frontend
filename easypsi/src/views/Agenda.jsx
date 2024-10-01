import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import WhiteMode from '../components/WhiteMode'

const Agenda = () => {


  return (
    <div>
        <Sidebar/>
        <div className='container-dash'>
            <Titulo>Agenda</Titulo>
        </div>
        <WhiteMode />
    </div>
  )
}

export default Agenda
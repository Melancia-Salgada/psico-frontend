import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import WhiteMode from '../components/WhiteMode'

const Perfil = () => {

  return (
    <div>
        <Sidebar/>
        <div className='container-dash'>
            <Titulo showButton={false}>Perfil</Titulo>
        </div>
        <WhiteMode />
    </div>
  )
}

export default Perfil
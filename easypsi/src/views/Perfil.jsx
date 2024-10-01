import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import WhiteMode from '../components/WhiteMode'

const Perfil = () => {

  const [whiteMode, setWhiteMode] = useState(localStorage.getItem('whiteMode') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('whitemode', whiteMode);
    localStorage.setItem('whiteMode', whiteMode); 
  }, [whiteMode]);

  return (
    <div>
        <Sidebar/>
        <div className='container-dash'>
            <Titulo>Perfil</Titulo>
        </div>
        <WhiteMode onToggle={setWhiteMode} />
    </div>
  )
}

export default Perfil
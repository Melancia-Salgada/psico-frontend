import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import WhiteMode from '../components/WhiteMode';

const Home = () => {
  const [whiteMode, setWhiteMode] = useState(localStorage.getItem('whiteMode') === 'true');

  useEffect(() => {
    if (whiteMode) {
      document.documentElement.classList.add('whitemode');
    } else {
      document.documentElement.classList.remove('whitemode');
    }
    localStorage.setItem('whiteMode', whiteMode); 
  }, [whiteMode]);

  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Olá, Nome</Titulo>
      </div>
      <WhiteMode onToggle={setWhiteMode} />
    </div>
  );
};

export default Home;

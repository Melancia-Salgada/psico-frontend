import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import WhiteMode from '../components/WhiteMode';

const Home = () => {


  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Olá, <span className='text-roxo'>Nome</span>!</Titulo>
      </div>
      <WhiteMode />
    </div>
  );
};

export default Home;

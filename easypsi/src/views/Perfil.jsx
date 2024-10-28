import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import Titulo from '../components/Titulo'
import WhiteMode from '../components/WhiteMode'
import Perfil1 from '../assets/perfil.jpg';

const Perfil = () => {

  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Perfil</Titulo>
        <div className="flex items-center justify-center py-20">
      <div className="w-full w-100 p-10 bg-cinza shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Informações do Psicólogo</h2>
        
        <div className="flex justify-center mb-6">
          <img
            src= {Perfil1}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-preto-whitemode shadow-lg"
          />
        </div>

        <div className="mt-4">
          <div className="mb-4">
            <label className="text-preto-darkmode font-bold text-center">Nome</label>
            <p className="text-gray-800 text-lg">Natália Lee Tarifa Batista</p>
          </div>
          <div className="lex flex-col items-center mb-4">
            <label className="text-preto-darkmode font-bold">CPF/CNPJ</label>
            <p className="text-gray-800 text-lg">47340752845</p>
          </div>
          <div className="mb-4">
            <label className="text-preto-darkmode font-bold">CRP</label>
            <p className="text-gray-800 text-lg">47340752845</p>
          </div>
          <div className="mb-4">
          <label className="text-preto-darkmode font-bold">Email</label>
            <p className="text-gray-800 text-lg">ajuda@gmail.com</p>
          </div>
        </div>
        <a href='/agenda'className='flex justify-center mt-auto'><button className="mt-6 bg-roxo text-white px-8 py-4 rounded hover:bg-purple-400">Editar</button></a>
      </div>
    </div>
        <WhiteMode />
      </div>
    </div>
  )
}

export default Perfil
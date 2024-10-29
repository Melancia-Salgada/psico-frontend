import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import WhiteMode from '../components/WhiteMode';
import Perfil1 from '../assets/perfil.jpg';
import { EditarPerfil } from '../components/Cards/Sobre';

const Perfil = () => {
  const [popupAberto, setPopupAberto] = useState(false);

  const togglePopup = () => setPopupAberto((prev) => !prev);

  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Perfil</Titulo>
        
        <div className="flex items-center justify-center py-20">
          <div className="w-full p-10 bg-cinza shadow-lg rounded-lg max-w-lg">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">DADOS DO PSICÓLOGO</h2>
            
            <div className="flex justify-center mb-6">
              <img
                src={Perfil1}
                alt="Avatar"
                className="w-32 h-32 rounded-full border-4 border-preto-whitemode shadow-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <label className="text-roxo font-bold text-lg md:text-2xl">Nome</label>
                <p className="text-gray-800 text-xl">Natália Lee Tarifa Batista</p>
              </div>
              
              <div>
                <label className="text-roxo font-bold text-lg md:text-2xl">CPF/CNPJ</label>
                <p className="text-gray-800 text-xl">47340752845</p>
              </div>

              <div>
                <label className="text-roxo font-bold text-lg md:text-2xl">CRP</label>
                <p className="text-gray-800 text-xl">47340752845</p>
              </div>

              <div>
                <label className="text-roxo font-bold text-lg md:text-2xl">Email</label>
                <p className="text-gray-800 text-xl">ajuda@gmail.com</p>
              </div>
            </div>  

            <div className="flex justify-center mt-6">
              <button onClick={togglePopup} className="bg-roxo text-white px-8 py-4 rounded hover:bg-purple-400">
                Editar
              </button>
            </div>

            {popupAberto && (
              <div className='popup' onClick={togglePopup}>
                <div onClick={(e) => e.stopPropagation()} className='m-20 moveis:m-0'>
                  <EditarPerfil closePopup={togglePopup} />
                  <div className="flex justify-center mt-4">
                    <button className='bg-roxo text-white px-8 py-4 rounded hover:bg-purple-400'>SALVAR</button>
                  </div>
                </div>
              </div>
            )}

            <WhiteMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;

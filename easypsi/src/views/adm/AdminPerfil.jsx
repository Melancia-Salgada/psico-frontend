import React, { useState, useContext } from 'react';
import Sidebar from '../../views/adm/AdminSidebar';
import Titulo from '../../components/Titulo';
import WhiteMode from '../../components/WhiteMode';
import Perfil1 from '../../assets/perfil.jpg';
import { EditarPerfilAdmin } from '../../components/Cards/Sobre';
import { TemaContexto } from '../../components/WhiteMode';


const AdminPerfil = () => {
  const [popupAberto, setPopupAberto] = useState(false);

  const togglePopup = () => setPopupAberto((prev) => !prev);

  const { tema } = useContext(TemaContexto);
  const bgTxt= tema? 'bg-cinza':'bg-neutral-800 '

  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Perfil</Titulo>
        
        <div className="flex items-center justify-center py-20">
          <div className={`w-full p-10 shadow-lg rounded-lg max-w-lg ${bgTxt}`}>
            <h2 className="text-3xl font-semibold text-center mb-6">DADOS DO ADMINISTRADOR</h2>
            
            <div className="flex justify-center mb-6">
              <img
                src={Perfil1}
                alt="Avatar"
                className="w-32 h-32 rounded-full border-4 border-preto-whitemode shadow-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <label className="text-roxo font-bold text-lg md:text-2xl">Email</label>
                <p className=" text-xl">Natalia@gmail.com</p>
              </div>
              
              <div>
                <label className="text-roxo font-bold text-lg md:text-2xl">CPF/CNPJ</label>
                <p className=" text-xl">47340752845</p>
              </div>

              <div>
                <label className="text-roxo font-bold text-lg md:text-2xl">Telefone</label>
                <p className=" text-xl">40028922</p>
              </div>

            </div>  

            <div className="flex justify-center mt-6">
              <button onClick={togglePopup} className="bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all">
                Editar
              </button>
            </div>

            {popupAberto && (
              <div className='popup' onClick={togglePopup}>
                <div onClick={(e) => e.stopPropagation()} className='m-20 moveis:m-0'>
                  <EditarPerfilAdmin closePopup={togglePopup} />
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

export default AdminPerfil;

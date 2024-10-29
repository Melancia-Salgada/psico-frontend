import React, { useEffect, useState, useContext } from 'react';
import Sidebar from '../adm/AdminSidebar';
import Titulo from '../../components/Titulo';
import WhiteMode from '../../components/WhiteMode';
import List from '../../components/Lista/List';
import { TemaContexto } from '../../components/WhiteMode';
import {Adm} from '../../components/Cards/Novo';
import { useNavigate } from 'react-router-dom';


const AdminHome = () => {

  const { tema } = useContext(TemaContexto);

  const estilo = tema? " bg-cinza  hover:bg-azul hover:bg-opacity-60": "bg-neutral-800  hover:bg-azul hover:bg-opacity-60 "

  const headers = ["Psicólogo", "Email", "Data de requisição","Ações"]
  const data = [
    ["a", "b", "c"],
    ["a", "b", "c"],
    ["a", "b", "c"],
    ["a", "b", "c"],
    ["a", "b", "c"],
    ["a", "b", "c"],
    ["a", "b", "c"],
    ["a", "b", "c"],
    ["a", "b", "c"],
  ]

  const closePopup = () => setpopupAberto(false);
  const navigate = useNavigate()
  const [popupAberto, setpopupAberto] = useState(false);
  const [popupName, setpopupName] = useState("");

  const renderPopup = () => {
    switch (popupName) {
      case "Admin":
        return <Adm closePopup={closePopup} />;
      case "Consulta":
        return <Consulta closePopup={closePopup} />;
      
      default:
        return null;
    }
  };

  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Olá, <span className='text-roxo'>Nome</span>!</Titulo>
        <div className='mt-10'>
          <div className=' ml-20 mr-20'>
            <div name="botao-rapidos" className='flex justify-around'>
              <div className={`p-4 rounded-2xl transition-all cursor-pointer ${estilo}` } onClick={() => {setpopupAberto(true);setpopupName("Admin")}}>
                <div className='w-[15rem] h-[15rem] flex items-center justify-center'> {/* Adicionei flex e items-center */}
                  <div className='flex flex-col items-center'> {/* Mudei para flex-col e adicionei items-center */}
                    <div className='flex justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </div>
                    <div className='flex justify-center'>
                      <span className='font-bold text-2xl mt-3'>Novo Administrador</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`p-4 rounded-2xl transition-all cursor-pointer ${estilo} `} onClick={()=>navigate("/psicologo-adm")}>
                <div className='w-[15rem] h-[15rem] flex items-center justify-center'> {/* Adicionei flex e items-center */}
                  <div className='flex flex-col items-center'> {/* Mudei para flex-col e adicionei items-center */}
                    <div className='flex justify-center'>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-bandaid" viewBox="0 0 16 16">
                        <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242M12.293 8 8.027 3.734 3.738 8.031 8 12.293zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492z"/>
                        <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707M8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707"/>
                    </svg>
                    
                    </div>
                    <div className='flex justify-center mt-3'>
                      <span className='font-bold text-2xl'>Ver Psicólogos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='justify-between flex gap-40 mt-10 ml-6 mr-6'>
            <div className='w-full'> 
              <span className='text-2xl font-bold'>Novas Requisições</span>
              <div className='mt-5 ml-10 mr-10'>
                <List headers={headers} data={data} margin={false}  limite="h-[32vh]"></List>
              </div>
            </div>
            
            
          </div>
          {popupAberto && (
          <div className='popup' onClick={() => setpopupAberto(false)}>
            <div onClick={(e) => e.stopPropagation()} className='m-20 moveis:m-0'>
              {renderPopup()}
            </div>
          </div>
        )}
        </div>
      </div>
      <WhiteMode />
    </div>
  );
};

export default AdminHome;



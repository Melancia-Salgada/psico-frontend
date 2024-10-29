import React, { useEffect, useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';
import { TemaContexto } from '../components/WhiteMode';
import { Paciente, Consulta, Financeiro} from '../components/Cards/Novo';


const Home = () => {

  const { tema } = useContext(TemaContexto);

  const estilo = tema? " bg-cinza  hover:bg-azul hover:bg-opacity-60": "bg-neutral-800  hover:bg-azul hover:bg-opacity-60 "

  const headers = ["Paciente", "Data", "Tipo", "Ações"]
  const dataConsulta = [
    ["a", "b", "c"],
    ["a", "b", "c"],
    ["a", "b", "c"],
  ]
  const dataFinanceiro = [
    ["d", "f", "g"],
    ["d", "f", "g"],
    ["d", "f", "g"],
    ["d", "f", "g"],
    ["d", "f", "g"],
    ["d", "f", "g"]
  ]

  const closePopup = () => setpopupAberto(false);

  const [popupAberto, setpopupAberto] = useState(false);
  const [popupName, setpopupName] = useState("");

  const renderPopup = () => {
    switch (popupName) {
      case "Paciente":
        return <Paciente closePopup={closePopup} />;
      case "Consulta":
        return <Consulta closePopup={closePopup} />;
      case "Financeiro":
        return <Financeiro closePopup={closePopup}></Financeiro>
      
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
              <div className={`p-4 rounded-2xl transition-all cursor-pointer ${estilo}` } onClick={() => {setpopupAberto(true);setpopupName("Paciente")}}>
                <div className='w-[15rem] h-[15rem] flex items-center justify-center'> {/* Adicionei flex e items-center */}
                  <div className='flex flex-col items-center'> {/* Mudei para flex-col e adicionei items-center */}
                    <div className='flex justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </div>
                    <div className='flex justify-center'>
                      <span className='font-bold text-2xl mt-3'>Novo Paciente</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`p-4 rounded-2xl transition-all cursor-pointer ${estilo} `} onClick={() => {setpopupAberto(true);setpopupName("Consulta")}}>
                <div className='w-[15rem] h-[15rem] flex items-center justify-center'> {/* Adicionei flex e items-center */}
                  <div className='flex flex-col items-center'> {/* Mudei para flex-col e adicionei items-center */}
                    <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"/>
                      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                    </svg>
                    </div>
                    <div className='flex justify-center mt-3'>
                      <span className='font-bold text-2xl'>Nova Consulta</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`p-4 rounded-2xl transition-all cursor-pointer ${estilo}`} onClick={() => {setpopupAberto(true);setpopupName("Financeiro")}}>
                <div className='w-[15rem] h-[15rem] flex items-center justify-center'> {/* Adicionei flex e items-center */}
                  <div className='flex flex-col items-center'> {/* Mudei para flex-col e adicionei items-center */}
                    <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-piggy-bank" viewBox="0 0 16 16">
                      <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.138-1.496A6.6 6.6 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.6 7.6 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962"/>
                      <path fill-rule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069q0-.218-.02-.431c.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a1 1 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.74.74 0 0 0-.375.562c-.024.243.082.48.32.654a2 2 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595M2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.6 6.6 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.65 4.65 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393m12.621-.857a.6.6 0 0 1-.098.21l-.044-.025c-.146-.09-.157-.175-.152-.223a.24.24 0 0 1 .117-.173c.049-.027.08-.021.113.012a.2.2 0 0 1 .064.199"/>
                    </svg>
                    </div>
                    <div className='flex justify-center mt-3'>
                      <span className='font-bold text-2xl'>Novo Financeiro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='justify-between flex gap-40 mt-10 ml-6 mr-6'>
            <div className='w-full'> 
              <span className='text-2xl font-bold'>Próximas Consultas</span>
              <div className='mt-5 ml-10 mr-10'>
                <List headers={headers} data={dataConsulta} margin={false} appName="Consulta"></List>
              </div>
              <div className='justify-center flex items-center '>
                <a className=' mt-8' href='/consultas'>
                  <button className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>
                    <span>Ver em Consulta</span>
                  </button>
                </a>
              </div>
            </div>
            <div className='w-full'> 
              <span className='text-2xl font-bold'>Pagamentos Pendentes</span>
              <div className='mt-5 ml-10 mr-10'>
                <List headers={headers} data={dataFinanceiro} margin={false} limite="h-[25vh]" appName="Financeiro"></List>
              </div>
              <div className='justify-center flex items-center '>
                <a className=' mt-5' href='/financeiro'>
                  <button className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>
                    <span>Ver em financeiro</span>
                  </button>
                </a>
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

export default Home;

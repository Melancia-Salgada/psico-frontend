import React, { useContext, useEffect, useState } from 'react';
import { Paciente, Consulta, Adm, Financeiro } from '../Cards/Novo';
import { TemaContexto } from '../WhiteMode';
import { atualizarIntervaloData } from './DatePesquisa';


const Pesquisa = ({ showButton = true, appName = "", margin = true, onFiltroChange, onSearchChange, onTipoChange, onDateRangeChange = "" }) => { 

  const [date, setDate] = useState('Essa semana'); 
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [popupAberto, setpopupAberto] = useState(false);
  const { tema } = useContext(TemaContexto);

  
  const mt = margin ? 'mt-5' : 'mt-0';
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar'; 
  const drop = tema ? '' : 'bg-neutral-900 text-white'

  useEffect(() => {
    if (appName === "Consulta") {
      const { inicio, fim } = atualizarIntervaloData(date);
      setDataInicio(inicio);
      setDataFim(fim);
      onDateRangeChange(inicio, fim);
    }
  }, [appName]); 
  

  const handleFiltroChange = (e) => {
    const statusSelecionado = e.target.value;
    onFiltroChange(statusSelecionado);
  };

  const handleTipoChange = (e) => {
    const tipoSelecionado = e.target.value;
    onTipoChange(tipoSelecionado); 
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    onSearchChange(searchTerm); 
  };

  const handleDateChange = (e) => {
    const filtro = e.target.value;
    setDate(filtro);

    if (filtro === 'personalizado') {
      setDataInicio('');
      setDataFim('');
    } else {
      const { inicio, fim } = atualizarIntervaloData(filtro);
      setDataInicio(inicio);
      setDataFim(fim);
      onDateRangeChange(inicio, fim);
    }
  };

  const handleDataInicioChange = (e) => {
    const inicio = e.target.value;
    setDataInicio(inicio);
    onDateRangeChange(inicio, dataFim);
  };

  const handleDataFimChange = (e) => {
    const fim = e.target.value;
    setDataFim(fim);
    onDateRangeChange(dataInicio, fim);
  };


  const closePopup = () => setpopupAberto(false);

  const renderPopup = () => {
    switch (appName) {
      case "Paciente":
        return <Paciente closePopup={closePopup} />;
      case "Consulta":
        return <Consulta closePopup={closePopup} />;
      case "Adm":
        return <Adm closePopup={closePopup}></Adm>
      case "Financeiro":
        return <Financeiro closePopup={closePopup}></Financeiro>
      default:
        return null;
    }
  };

  const renderDrop = () => {
    switch (appName){
      case "Paciente":
        return (
          <div>
            <label className='text-2xl font-bold mb-2'>Filtro</label>
            <select
              className={`p-2 flex flex-row w-52 cursor-pointer ${inputBorder}`}
              onChange={handleFiltroChange}
            >
              <option value="" className={`py-2 ${drop}`}>Grupo do paciente</option>
              <option value="Criança" className={`py-2 ${drop}`}>Criança</option>
              <option value="Adolescente" className={`py-2 ${drop}`}>Adolescente</option>
              <option value="Adulto" className={`py-2 ${drop}`}>Adulto</option>
              <option value="Idoso" className={`py-2 ${drop}`}>Idoso</option>
            </select>
          </div>
        )
      case "Consulta":
        

        const renderPersonalizado = () => {
          if (date == "personalizado") {
            return (
              <>
                <span>De:</span>
                <div>
                  <input
                    name="dataInicio"
                    className={`p-2 w-full ${inputBorder}`}
                    type="date"
                    onChange={handleDataInicioChange}
                  />
                </div>
                <span>Até:</span>
                <div>
                  <input
                    name="dataFim"
                    className={`p-2 w-full ${inputBorder} `}
                    type="date"
                    value={dataFim} onChange={handleDataFimChange}
                  />
                </div>
              </>
            );
          }
          return null;
        };

        return (
          <div>
            <label className='text-2xl font-bold mb-2'>Filtros</label>
            <div className='flex gap-3'>
              <select
                className={`p-2 flex flex-row w-40 ${inputBorder} cursor-pointer`}
                onChange={handleFiltroChange}
              >
                <option value="" className={`py-2 ${drop}`}>Todos</option>
                <option value="Realizado" className={`py-2 ${drop}`}>Realizado</option>
                <option value="Não Realizado" className={`py-2 ${drop}`}>Não realizado</option>
              </select>
              <select
                className={`p-2 flex flex-row w-40 ${inputBorder} cursor-pointer`}
                onChange={handleTipoChange} // Alterado para chamar handleTipoChange
              >
                <option value="" className={`py-2 ${drop}`}>Todos</option>
                <option value="Inicial" className={`py-2 ${drop}`}>Inicial</option>
                <option value="Acompanhamento" className={`py-2 ${drop}`}>Acompanhamento</option>
                <option value="Retorno" className={`py-2 ${drop}`}>Retorno</option>
                <option value="Cancelada" className={`py-2 ${drop}`}>Cancelada</option>
              </select>
              <select
                className={`p-2 flex flex-row w-40 ${inputBorder} cursor-pointer`}
                onChange={handleDateChange}
                value={date}
              >
                <option value="Essa semana" className={`py-2 ${drop}`}>Essa semana</option>
                <option value="Esse mês" className={`py-2 ${drop}`}>Esse mês</option>
                <option value="Esse ano" className={`py-2 ${drop}`}>Esse ano</option>
                <option value="Todos" className={`py-2 ${drop}`}>Todos</option>
                <option value="personalizado" className={`py-2 ${drop}`}>Personalizado</option>
              </select>
              {renderPersonalizado()}
            </div>
          </div>
        )
      case "Financeiro":
        return (
          <div>
            <label className='text-2xl font-bold mb-2'>Filtro</label>
            <div className='flex'>
              <select
                className={`p-2 flex flex-row w-40 ${inputBorder} cursor-pointer`}
                onChange={handleFiltroChange}
              >
                <option value="" className={`py-2 ${drop}`}>Todos</option>
                <option value="Devendo" className={`py-2 ${drop}`}>Devendo</option>
                <option value="Pago" className={`py-2 ${drop}`}>Pago</option>
              </select>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={`${mt}`}>
      <div className='flex justify-between items-end gap-4 flex-1'>
        <div className='flex justify-between gap-4'>
          <div>
            <label className='text-2xl font-bold mb-2'>Pesquisar</label>
            <input 
              className={`p-2 w-full ${inputBorder}`} 
              type='text' 
              placeholder='Pesquisar' 
              onChange={handleSearchChange} 
            />
          </div>

          {/* Dropdown para Filtro de Status */}
          {renderDrop()}
        </div>

        {/* Botão Novo */}
        {showButton && (
          <div>
            <a className='flex items-center' onClick={() => setpopupAberto(true)}>
              <button className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center w-44 h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>
                <span className=''>
                  <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_359_1773)">
                      <path d="M15 28.125C11.519 28.125 8.18064 26.7422 5.71922 24.2808C3.25781 21.8194 1.875 18.481 1.875 15C1.875 11.519 3.25781 8.18064 5.71922 5.71922C8.18064 3.25781 11.519 1.875 15 1.875C18.481 1.875 21.8194 3.25781 24.2808 5.71922C26.7422 8.18064 28.125 11.519 28.125 15C28.125 18.481 26.7422 21.8194 24.2808 24.2808C21.8194 26.7422 18.481 28.125 15 28.125ZM15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30Z" fill="white" />
                      <path d="M15 7.5C15.2486 7.5 15.4871 7.59877 15.6629 7.77459C15.8387 7.9504 15.9375 8.18886 15.9375 8.4375V14.0625H21.5625C21.8111 14.0625 22.0496 14.1613 22.2254 14.3371C22.4012 14.5129 22.5 14.7514 22.5 15C22.5 15.2486 22.4012 15.4871 22.2254 15.6629C22.0496 15.8387 21.8111 15.9375 21.5625 15.9375H15.9375V21.5625C15.9375 21.8111 15.8387 22.0496 15.6629 22.2254C15.4871 22.4012 15.2486 22.5 15 22.5C14.7514 22.5 14.5129 22.4012 14.3371 22.2254C14.1613 22.0496 14.0625 21.8111 14.0625 21.5625V15.9375H8.4375C8.18886 15.9375 7.9504 15.8387 7.77459 15.6629C7.59877 15.4871 7.5 15.2486 7.5 15C7.5 14.7514 7.59877 14.5129 7.77459 14.3371C7.9504 14.1613 8.18886 14.0625 8.4375 14.0625H14.0625V8.4375C14.0625 8.18886 14.1613 7.9504 14.3371 7.77459C14.5129 7.59877 14.7514 7.5 15 7.5Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_359_1773">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>Novo</span>
              </button>
            </a>
          </div>
        )}
        {popupAberto && (
          <div className='popup popup-background' onClick={() => setpopupAberto(false)}>
            <div onClick={(e) => e.stopPropagation()} className='m-20 moveis:m-0'>
              {renderPopup()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pesquisa;

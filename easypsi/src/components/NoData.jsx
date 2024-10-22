
import { TemaContexto } from './WhiteMode';
import React, { useContext } from 'react';

const NoData = () => {
const { tema } = useContext(TemaContexto); // Corrigido o uso do useContext
const estilos = tema ? "text-red-500 w-full rounded-2xl" : "text-red-400";

  return (
    
    <div className={`text-[18px] p-10 ${estilos} transition-colors transition-all`}>
        <span className='justify-center flex mb-4'>
            Não há nenhum dado cadastrado.
        </span>
        <div className='justify-center flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-emoji-neutral-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
            </svg>
        </div>
    </div>
      
  )
}

export default NoData
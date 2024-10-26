import React, { useContext } from 'react';
import { TemaContexto } from '../WhiteMode';
import NoData from '../NoData';

const List = ({ headers, data, onViewMore }) => { // Inclua onViewMore aqui

  const { tema } = useContext(TemaContexto);

  const estilos = tema ? "text-red-500 bg-cinza w-full rounded-2xl" : "text-red-400";
  const bar = tema ? "border-preto-whitemode" : "border-branco-darkmode";
  const isEmpty = !data || (Array.isArray(data) && data.length === 0);

  
  const renderAcao = () => {
    if(headers.includes('Ações')) {
      return (
        <div className='flex-1 text-center text-[18px] p-2'>
          <button 
            className='bg-roxo text-white p-2 rounded-full hover:bg-purple-950 transition-all' 
            onClick={() => onViewMore(row)} // Chama a função ao clicar
          >
            <div className='flex gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16">
                <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1z"/>
                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
              </svg>
            </div>
            
          </button>
        </div>
      )
    }
  }

  return (
    <div className='mt-[5.3rem] ml-[6.3rem] mr-[6.3rem]'>
      <div>
        {/* Listagem */}
        <div>
          {isEmpty ? (
            <NoData />
          ) : (
            <>
              {/* Header */}
              <div className="flex justify-between">
                {headers.map((header, index) => (
                  <div key={index} className='flex-1 text-center'>
                    <span className='text-[20px] font-extrabold'>{header}</span>
                  </div>
                ))}
              </div>

              {/* Dados */}
              {data.map((row, index) => (
                <div className={`flex justify-between border-b-[1px] p-2 ${bar}`} key={index}>
                  {row.map((item, itemIndex) => (
                    <div className='flex-1 text-center text-[18px] p-2' key={itemIndex}>
                      {item}
                    </div>
                  ))}
                  {/* Adiciona o botão "Ver mais" */}
                  {renderAcao()}
                  
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;

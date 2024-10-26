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
            className='bg-blue-500 text-white p-2 rounded' 
            onClick={() => onViewMore(row)} // Chama a função ao clicar
          >
            Ver mais
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
                <div className={`flex justify-between border-b-[1px] ${bar}`} key={index}>
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

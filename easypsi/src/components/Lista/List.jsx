import React from 'react';

const List = ({ headers, data }) => {
  // Verifica se data está vazia ou se é um erro
  const isEmpty = !data || (Array.isArray(data) && data.length === 0);

  return (
    <div className='mt-[5.3rem] ml-[6.3rem] mr-[6.3rem]'>
      <div>
        {/* Listagem */}
        <div>
          {isEmpty ? (
            <div className='text-center text-[18px] p-4 text-red-500'>
              Não possui nenhum cliente cadastrado.
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex justify-between">
                {headers.map((header, index) => (
                  <div key={index} className='flex-1 text-center'>
                    <span className=' text-[20px] font-extrabold'>{header}</span>
                  </div>
                ))}
              </div>

              {/* Dados */}
              {data.map((row, index) => (
                <div className='flex justify-between border-b-[1px] border-branco-darkmode' key={index}>
                  {row.map((item, itemIndex) => (
                    <div className='flex-1 text-center text-[18px] p-2' key={itemIndex}>
                      {item}
                    </div>
                  ))}
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

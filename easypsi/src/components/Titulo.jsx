import React from 'react';

const Titulo = ({ showButton = true, children }) => {
  return (
    <div>
      <div className='flex justify-between mt-20'>
        <div className=''>
          <span className='text-5xl'>{children}</span>
        </div>
        
        {showButton && (
          <div>
            <button className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center w-44 h-[53px] justify-between pl-9 pr-9 font-bold'>
              a
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Titulo;

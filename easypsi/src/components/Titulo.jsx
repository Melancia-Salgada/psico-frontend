import React from 'react';

const Titulo = ({ showButton = true, buttonLink = '#', buttonText = '', buttonIcon = null, children }) => {
  return (
    <div>
      <div className='flex justify-between mt-20'>
        <div>
          <span className='text-5xl'>{children}</span>
        </div>

        {showButton && (
          <div>
            <a href={buttonLink}>
              <button className='bg-roxo gap-2 text-branco-whitemode text-[20px] rounded-full flex items-center w-48 h-[69px] justify-between  pl-5 pr-5 font-semibold'>
                {buttonIcon && <span className=''>{buttonIcon}</span>}
                {buttonText}
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Titulo;

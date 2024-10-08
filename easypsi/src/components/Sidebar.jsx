import React, { useContext } from 'react';
import { TemaContexto } from '../components/WhiteMode';

const Sidebar = () => {

  const {tema} = useContext(TemaContexto)

  const cor = tema ? '#121214' : '#FFFFFF';
  const background =  tema? 'bg-azul transition-colors duration-500' : 'bg-preto-darkmode transition-colors duration-500';
  const sombra = tema ? 'shadow-[0_0_20px_rgba(0,0,0,0.6)]' : '';

  return (
    <div className={`fixed top-0 left-0 w-24 h-screen ${sombra}`}>
      <div className={`h-screen ${background}`}>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col items-center justify-between mt-16 '>
            <a href='/home' className='mb-16'>
              <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 15L21 1L41 15V37C41 38.0609 40.5317 39.0783 39.6983 39.8284C38.8648 40.5786 37.7343 41 36.5556 41H5.44444C4.2657 41 3.13524 40.5786 2.30175 39.8284C1.46825 39.0783 1 38.0609 1 37V15Z" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.332 41V21H27.6654V41" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href='/agenda' className='mb-16'>
              <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.5556 5H5.44444C2.98985 5 1 6.79086 1 9V37C1 39.2091 2.98985 41 5.44444 41H36.5556C39.0102 41 41 39.2091 41 37V9C41 6.79086 39.0102 5 36.5556 5Z" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M29.8887 1V9" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.1113 1V9" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 17H41" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href='/financeiro' className='mb-16'>
              <svg width="30" height="30" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1V41" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28.5 8.27246H9.75C7.42936 8.27246 5.20376 8.94291 3.56282 10.1363C1.92187 11.3297 1 12.9484 1 14.6361C1 16.3238 1.92187 17.9425 3.56282 19.1359C5.20376 20.3293 7.42936 20.9997 9.75 20.9997H22.25C24.5706 20.9997 26.7962 21.6702 28.4372 22.8636C30.0781 24.057 31 25.6756 31 27.3634C31 29.0511 30.0781 30.6697 28.4372 31.8631C26.7962 33.0566 24.5706 33.727 22.25 33.727H1" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href='/pacientes' className='mb-16'>
              <svg width="30" height="30" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.0909 30.9994V27.6661C30.0909 25.898 29.3247 24.2024 27.9608 22.9521C26.5969 21.7019 24.747 20.9995 22.8182 20.9995H8.27273C6.34388 20.9995 4.49403 21.7019 3.13013 22.9521C1.76623 24.2024 1 25.898 1 27.6661V30.9994" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5462 14.3332C19.5628 14.3332 22.8189 11.3485 22.8189 7.66661C22.8189 3.98474 19.5628 1 15.5462 1C11.5295 1 8.27344 3.98474 8.27344 7.66661C8.27344 11.3485 11.5295 14.3332 15.5462 14.3332Z" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M40.9995 30.9991V27.6658C40.9983 26.1887 40.4619 24.7537 39.4747 23.5863C38.4874 22.4189 37.1052 21.5851 35.5449 21.2158" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28.2734 1.2168C29.8378 1.58396 31.2244 2.41796 32.2146 3.58729C33.2048 4.75663 33.7422 6.19481 33.7422 7.67508C33.7422 9.15535 33.2048 10.5935 32.2146 11.7629C31.2244 12.9322 29.8378 13.7662 28.2734 14.1334" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className='flex flex-col items-center justify-between mb-16'>
            <a href='/perfil' className='mb-16'>
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 30.9999V27.6666C31 25.8985 30.2098 24.2028 28.8033 22.9526C27.3968 21.7024 25.4891 21 23.5 21H8.5C6.51088 21 4.60322 21.7024 3.1967 22.9526C1.79018 24.2028 1 25.8985 1 27.6666V30.9999" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 14.3332C20.1421 14.3332 23.5 11.3485 23.5 7.66661C23.5 3.98474 20.1421 1 16 1C11.8579 1 8.5 3.98474 8.5 7.66661C8.5 11.3485 11.8579 14.3332 16 14.3332Z" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href='/login' className=''>
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9998 31H4.33328C3.44924 31 2.60141 30.6488 1.97629 30.0237C1.35118 29.3986 1 28.5507 1 27.6667V4.33333C1 3.44928 1.35118 2.60143 1.97629 1.97631C2.60141 1.35119 3.44924 1 4.33328 1H10.9998" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.666 24.3332L30.9992 15.9998L22.666 7.6665" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30.9997 16H11" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

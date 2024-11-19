import React, { useContext } from 'react';
import { TemaContexto } from '../components/WhiteMode';

const Sidebar = () => {

  const {tema} = useContext(TemaContexto)

  const cor = "#FFFFFF";
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
            <a href='/ajustes' className='mb-16'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
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

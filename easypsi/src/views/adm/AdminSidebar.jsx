import React, { useContext } from 'react';
import { TemaContexto } from '../../components/WhiteMode';

const AdminSidebar = () => {

  const {tema} = useContext(TemaContexto)

  const cor = "#FFFFFF";
  const background =  tema? 'bg-azul transition-colors duration-500' : 'bg-preto-darkmode transition-colors duration-500';
  const sombra = tema ? 'shadow-[0_0_20px_rgba(0,0,0,0.6)]' : '';

  return (
    <div className={`fixed top-0 left-0 w-24 h-screen ${sombra}`}>
        <div className={`h-screen ${background}`}>
            <div className='flex flex-col justify-between h-full'>
                <div className='flex flex-col items-center justify-between mt-16 '>
                    <a href='/home-adm' className='mb-16'>
                        <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 15L21 1L41 15V37C41 38.0609 40.5317 39.0783 39.6983 39.8284C38.8648 40.5786 37.7343 41 36.5556 41H5.44444C4.2657 41 3.13524 40.5786 2.30175 39.8284C1.46825 39.0783 1 38.0609 1 37V15Z" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.332 41V21H27.6654V41" stroke={cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <a href='/gerenciamento-adm' className='mb-16'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFF" class="bi bi-folder2-open" viewBox="0 0 16 16">
                            <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z"/>
                        </svg>
                    </a>
                    <a href='/psicologo-amd' className='mb-16'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bandaid" viewBox="0 0 16 16">
                            <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242M12.293 8 8.027 3.734 3.738 8.031 8 12.293zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492z"/>
                            <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707M8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707"/>
                        </svg>
                    </a>
                </div>

                <div className='flex flex-col items-center justify-between mb-16'>
                    <a href='/perfil-adm' className='mb-16'>
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

export default AdminSidebar;

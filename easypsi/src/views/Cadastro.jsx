import React, { useContext, useState } from 'react';
import Logo from '../assets/Logo.png';
import WhiteMode from '../components/WhiteMode';
import { TemaContexto } from '../components/WhiteMode';
import LogoDark from '../assets/LogoDark.png'

function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {tema} = useContext(TemaContexto)
  const inputBorder = tema ? 'whitemode' : ''; 
  const logo = tema? LogoDark : Logo

  const eyeClosed = (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
    </svg>
  )

  const eyeOpen = (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
    </svg>
  )

  const renderEyeConfirm = () => {
    return showConfirmPassword ? eyeOpen : eyeClosed
  }

  const renderEye = () => {
    return showPassword ? eyeOpen : eyeClosed
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="mb-5 mt-0">
        <img src={logo} alt="Logo EasyPSI" className="max-w-full h-auto" />
      </div>
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 mb-8">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <label className="w-full">
            <span className="font-bold">EMAIL</span>
            <input
              type="email"
              className={`caixa-texto-cad ${inputBorder} w-full mt-1`}
              placeholder="DIGITE SEU EMAIL"
            />
          </label>

          <label className="w-full">
            <span className="font-bold">NOME</span>
            <input
              type="text"
              className={`caixa-texto-cad ${inputBorder} w-full mt-1`}
              placeholder="DIGITE SEU NOME"
            />
          </label>

          <label className="w-full">
            <span className="font-bold">CRP</span>
            <input
              type="text"
              className={`caixa-texto-cad ${inputBorder} w-full mt-1`}
              placeholder="DIGITE SEU CRP"
            />
          </label>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <label className="w-full">
            <span className="font-bold">CNPJ</span>
            <input
              type="text"
              className={`caixa-texto-cad ${inputBorder} w-full mt-1`}
              placeholder="DIGITE SEU CNPJ"
            />
          </label>

          <label className="w-full relative">
            <span className="font-bold">SENHA</span>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`caixa-texto-cad ${inputBorder} w-full`}
                placeholder="DIGITE SUA SENHA"
              />
              <div onClick={togglePasswordVisibility} className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6'>
                {renderEye()}
              </div>
            </div>
          </label>

          <label className="w-full relative">
            <span className="font-bold">DIGITE SUA SENHA NOVAMENTE</span>
            <div className="relative mt-1">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className={`caixa-texto-cad ${inputBorder} w-full`}
                placeholder="DIGITE SUA SENHA NOVAMENTE"
              />
              <div onClick={toggleConfirmPasswordVisibility} className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6'>
                {renderEyeConfirm()}
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="w-full max-w-4xl flex justify-center">
        <a href="/confirmacao" className="w-full sm:w-auto">
          <button className="bg-roxo text-branco-whitemode text-xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all">
            CADASTRAR
          </button>
        </a>
      </div>

      <div className='mt-6'>
        <a href="/login" className='hover:text-roxo'>Já tenho uma conta</a>
      </div>

      <div className="mt-8">
        <WhiteMode />
      </div>
    </div>
  );
}

export default Cadastro;

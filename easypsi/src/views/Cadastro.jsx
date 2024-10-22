import React, { useContext, useState } from 'react';
import Logo from '../assets/Logo.png';
import EyeClosed from '../assets/eye-closed.png';
import EyeOpen from '../assets/eye-open.png';
import WhiteMode from '../components/WhiteMode';
import { TemaContexto } from '../components/WhiteMode';

function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {tema} = useContext(TemaContexto)
  const inputBorder = tema ? 'whitemode' : ''; 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 mt-8 transition-none">
      <div className="mb-5 mt-0">
        <img src={Logo} alt="Logo EasyPSI" className="max-w-full h-auto" />
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
              <img
                src={showPassword ? EyeOpen : EyeClosed}
                alt="Mostrar senha"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6"
                onClick={togglePasswordVisibility}
              />
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
              <img
                src={showConfirmPassword ? EyeOpen : EyeClosed}
                alt="Mostrar senha"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
          </label>
        </div>
      </div>

      <div className="w-full max-w-4xl flex justify-center">
        <a href="/home" className="w-full sm:w-auto">
          <button className="btn-entrar w-full px-8 py-3 text-lg font-bold" type="button">
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

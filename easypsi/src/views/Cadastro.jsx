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
    <div className="flex flex-col place-items-center mt-pat transition-none">
      <div className="mb-5 mt-0">
        <img src={Logo} alt="Logo EasyPSI" />
      </div>
      <div className="w-[1150px] px-12 flex flex-row gap-24 mb-16">
        <div className="flex flex-col gap-4">
          <label className="place-self-start">
            <span className="font-bold ">EMAIL</span>
            <br />
            <input
              type="email"
              className={`caixa-texto-cad ${inputBorder}`}
              placeholder="DIGITE SEU EMAIL"
            />
          </label>

          <label className="place-self-start">
            <span className="font-bold ">NOME</span>
            <br />
            <input
              type="text"
              className={`caixa-texto-cad ${inputBorder}`}
              placeholder="DIGITE SEU NOME"
            />
          </label>

          <label className="place-self-start">
            <span className="font-bold ">CRP</span>
            <br />
            <input
              type="text"
              className={`caixa-texto-cad ${inputBorder}`}
              placeholder="DIGITE SEU CRP"
            />
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <label className="place-self-start">
            <span className="font-bold ">CNPJ</span>
            <br />
            <input
              type="text"
              className={`caixa-texto-cad ${inputBorder}`}
              placeholder="DIGITE SEU CNPJ"
            />
          </label>

          <label className="place-self-start relative">
            <span className="font-bold">SENHA</span>
            <br />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`caixa-texto-cad ${inputBorder}`}
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

          <label className="place-self-start relative">
            <span className="font-bold ">DIGITE SUA SENHA NOVAMENTE</span>
            <br />
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className={`caixa-texto-cad ${inputBorder}`}
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

      <a href="/home">
        <button className="btn-entrar" type="button">
          CADASTRAR
        </button>
      </a>
      

      <div className='mt-10'>
       <a href="/login" className='hover:text-roxo'>Já tenho uma conta</a>
      </div>

      <WhiteMode></WhiteMode>



    </div>
  );
}

export default Cadastro;

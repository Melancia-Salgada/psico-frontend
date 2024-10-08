import React, { useContext, useState } from 'react';
import Logo from '../assets/Logo.png';
import EyeClosed from '../assets/eye-closed.png';
import WhiteMode, { TemaContexto } from '../components/WhiteMode';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {tema} = useContext(TemaContexto)
  

  const inputBorder = tema ? 'whitemode' : ''; 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col place-items-center mt-pat transition-none">
      <div className="mb-20 mt-0">
        <img src={Logo} alt="Logo EasyPSI" />
      </div>

      <div className="mb-7">
        <label className="place-self-start">
          <span className="font-bold">EMAIL</span><br />
          <input
            type="email"
            className={`caixa-texto ${inputBorder}`}
            placeholder="DIGITE SEU EMAIL"
          />
        </label>
      </div>
      <div className="mb-7 relative">
        <label className="place-self-start">
          <span className="font-bold ">SENHA</span><br />
          <input
            type={showPassword ? 'text' : 'password'}
            className={`caixa-texto ${inputBorder}`}
            placeholder="DIGITE SUA SENHA"
          />
          <img
            src={showPassword ? EyeOpen : EyeClosed}
            alt="Mostrar senha"
            className="absolute right-4 top-14 transform -translate-y-1/2 cursor-pointer w-9 " // Usando classes de largura e altura personalizadas
            onClick={togglePasswordVisibility}
          />
          

        </label>

      </div>
      <a href="/home">
      <button className='btn-entrar' type="button">ENTRAR</button>
      </a>
      

      <div className='mt-10'>
       <a href="/cadastro" className='hover:text-roxo'>Ainda não tenho uma conta</a>
      </div>

      <WhiteMode></WhiteMode>
    </div>
  );
};

export default Login;
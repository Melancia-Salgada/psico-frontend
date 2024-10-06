import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import EyeClosed from '../assets/eye-closed.png';
import EyeOpen from '../assets/eye-open.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col place-items-center mt-pat">
      <div className="mb-20 mt-0">
        <img src={Logo} alt="Logo EasyPSI" />
      </div>

      <div className="mb-7">
        <label className="place-self-start">
          <span className="font-bold text-branco-darkmode">EMAIL</span><br />
          <input
            type="email"
            className=" w-inputW border-borderw focus:border-borderw bg-transparent border-inputColor focus:border-inputColor h-inputH focus:h-inputH rounded-borderr focus:rounded-borderr
            pl-inputPad text-white focus:w-inputW placeholder-white  placeholder-opacity-35 focus:bg-opacity-20 transition-colors duration-300"
            placeholder="DIGITE SEU EMAIL"
          />
        </label>
      </div>
      <div className="mb-7 relative">
        <label className="place-self-start">
          <span className="font-bold text-branco-darkmode">SENHA</span><br />
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-inputW border-borderw focus:border-borderw bg-transparent border-inputColor focus:border-inputColor h-inputH focus:h-inputH rounded-borderr focus:rounded-borderr
            pl-inputPad text-white focus:w-inputW placeholder-white placeholder-opacity-35 focus:bg-opacity-20 transition-colors duration-300"
            placeholder="DIGITE SUA SENHA"
          />
          <img
            src={showPassword ? EyeOpen : EyeClosed}
            alt="Mostrar senha"
            className="absolute right-4 top-3/4 transform -translate-y-1/2 cursor-pointer w-7 h-" // Usando classes de largura e altura personalizadas
            onClick={togglePasswordVisibility}
          />
          

        </label>

      </div>
      <button className='btn-entrar' type="button">ENTRAR</button>
    </div>
  );
};

export default Login;

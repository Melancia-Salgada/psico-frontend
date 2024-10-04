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
            className="w-inputW border-borderw focus:border-borderw bg-transparent border-inputColor focus:border-inputColor h-inputH focus:h-inputH rounded-borderr focus:rounded-borderr
            pl-inputPad text-white focus:w-inputW placeholder-white focus:bg-opacity-20 transition-colors duration-300"
            placeholder="Digite seu email"
          />
        </label>
      </div>

      <div className="mb-7 relative">
        <label className="place-self-start">
          <span className="font-bold text-branco-darkmode">SENHA</span><br />
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-inputW border-borderw focus:border-borderw bg-transparent border-inputColor focus:border-inputColor h-inputH focus:h-inputH rounded-borderr focus:rounded-borderr
            pl-inputPad text-white focus:w-inputW placeholder-white focus:bg-opacity-20 transition-colors duration-300"
            placeholder="Digite sua senha"
          />
          <img
            src={showPassword ? EyeOpen : EyeClosed}
            alt="Mostrar senha"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-[47.67px] h-[32.5px]" // Usando classes de largura e altura personalizadas
            onClick={togglePasswordVisibility}
          />

        </label>
      </div>
    </div>
  );
};

export default Login;

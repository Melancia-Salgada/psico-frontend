import React, { useContext, useState } from 'react';
import Logo from '../assets/Logo.png';
import EyeClosed from '../assets/eye-closed.png';
import WhiteMode, { TemaContexto } from '../components/WhiteMode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();

  {/*Visualizar senha*/}
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  {/*Darkmode*/}
  const {tema} = useContext(TemaContexto)
  const inputBorder = tema ? 'whitemode' : ''; 

  {/*Fofocando com back*/}
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        username,
        password
      });

      // Check if the response was successful
      if (response.status === 200) {
          
          // Store token in localStorage
          //localStorage.setItem('token', response.data); por enquanto vamos armazenar o token no indexedDB
          const token = response.data;
          console.log(token)
          localStorage.setItem('token', token)
          //await setToken(token);
          
          //console.log(response.data)
          // Successful authentication, redirect to /dashboard page
          navigate('/home');
      } else {
          // Authentication failed, display an error message
          console.error('Error authenticating user');
      }
    } catch (error) {
      if (error/*error.response && error.response.data && error.response.data.message*/) {
        console.log("deu erro", error)
      } 
    }
  };

  return (
    <div className="flex flex-col place-items-center mt-pat transition-none">
      <div className="mb-20 mt-0">
        <img src={Logo} alt="Logo EasyPSI" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-7">
          <label className="place-self-start">
            <span className="font-bold">EMAIL</span><br />
            <input
              type="text"
              className={`caixa-texto ${inputBorder}`}
              placeholder="Digite seu email"
              id='email'
              name='username'
              value={username}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-7 relative">
          <label className="place-self-start">
            <span className="font-bold ">SENHA</span><br />
            <input
              type={showPassword ? 'text' : 'password'}
              className={`caixa-texto ${inputBorder}`}
              placeholder="Digite sua senha"
              id='password'
              name='password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <img
              src={showPassword ? EyeOpen : EyeClosed}
              alt="Mostrar senha"
              className="absolute right-4 top-14 transform -translate-y-1/2 cursor-pointer w-9 " // Usando classes de largura e altura personalizadas
              onClick={togglePasswordVisibility}
            />
            

          </label>

        </div>
        <button className='btn-entrar' type="submit">ENTRAR</button>
        

      </form>
      
      
      

      <div className='mt-10'>
       <a href="/cadastro" className='hover:text-roxo'>Ainda não tenho uma conta</a>
      </div>

      <WhiteMode></WhiteMode>
    </div>
  );
};

export default Login;
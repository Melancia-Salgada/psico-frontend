import React, { useContext, useState } from 'react';
import Logo from '../assets/Logo.png';
import WhiteMode, { TemaContexto } from '../components/WhiteMode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogoDark from '../assets/LogoDark.png'


const Login = () => {
  const navigate = useNavigate();

  {/*Visualizar senha*/}
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

  const renderEye = () => {
    return showPassword ? eyeOpen : eyeClosed
  }
  
  {/*Darkmode*/}
  const {tema} = useContext(TemaContexto)
  const inputBorder = tema ? 'whitemode' : ''; 
  const logo = tema? LogoDark : Logo

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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="mb-20 mt-0 transition-all">
        <img src={logo} alt="Logo EasyPSI" />
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
          <label className="w-full relative">
          <span className="font-bold ">SENHA</span><br />
            <div className='relative mt-1'>
              <input
                type={showPassword ? 'text' : 'password'}
                className={`caixa-texto ${inputBorder}`}
                placeholder="Digite sua senha"
                id='password'
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <div onClick={togglePasswordVisibility} className=' absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6'>
                {renderEye()}
              </div>
            </div>
          </label>
        </div>
        <div className="w-full max-w-4xl flex justify-center">
        <a href="/home" className="w-full sm:w-auto">
          <button className="btn-entrar w-full px-8 py-3 text-lg font-bold" type="button">
            ENTRAR
          </button>
        </a>
      </div>
      </form>
      <div className='mt-6'>
        <a href="/cadastro" className='hover:text-roxo'>Ainda não tenho uma conta</a>
      </div>
      <WhiteMode />
    </div>
  );
};

export default Login;

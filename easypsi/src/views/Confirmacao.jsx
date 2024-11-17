import React, { useContext, useState } from 'react';
import { TemaContexto } from '../components/WhiteMode';
import WhiteMode from '../components/WhiteMode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Confirmacao = () => {
  const navigate = useNavigate()
  
  //fofoca com o back
  const[codigo, setCodigo] = useState('')

  const psi = JSON.parse(localStorage.getItem('psicologo'))

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      
      const response = await axios.post(`http://127.0.0.1:8001/novo-psicologo/${codigo}`, {
        username: psi.username,
        password: psi.password,
        phonenumber: psi.phonenumber,
        email: psi.email,
        tipo: psi.tipo,
        status: psi.status,
        CPF: psi.CPF,
        CNPJ: psi.CNPJ,
        CRP: psi.CRP,
      });

      // Check if the response was successful
      if (response.status === 200) {
          
          console.log(response.data)
          // Successful authentication, redirect to /home page
          navigate('/login');
      } else {
          // Authentication failed, display an error message
          console.error('Error authenticating user');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.log("deu erro", error)
      } 
    }
  };


  //estilos
  const { tema } = useContext(TemaContexto);
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar';
  const bg = tema? 'bg-cinza':'bg-neutral-900'

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className={`${bg} w-[40rem] p-6 rounded-lg shadow-lg`}>
        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-envelope-exclamation" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0m0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
            </svg>
          </div>
          <div className='flex flex-col items-center text-center mb-6'>
            <span className='font-bold text-3xl'>Verificação de email</span>
            <span>Por favor, insira o código de verificação enviado ao seu e-mail</span>
          </div>
          <div>
            <input
              name="codigo"
              className={`p-2 w-80 ${inputBorder}`}
              type="text"
              placeholder="Digite o código de verificação"
              value={codigo}
              onChange={(e)=>setCodigo(e.target.value)}
            />
          </div>
          <div className='mt-8'>
            
            <button className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all' type="submit">
              <span>Confirmar</span>
            </button>

            <div>enviar codigo novamente</div>
            
          </div>
        </form>
      </div>
      <WhiteMode />
    </div>
  );
}

export default Confirmacao;

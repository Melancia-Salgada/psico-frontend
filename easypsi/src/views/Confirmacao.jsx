import React, { useContext } from 'react';
import { TemaContexto } from '../components/WhiteMode';
import WhiteMode from '../components/WhiteMode';

const Confirmacao = () => {
  const { tema } = useContext(TemaContexto);
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar';

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-azul w-[40rem] p-6 rounded-lg shadow-lg'>
        <div className='flex flex-col items-center'>
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
              name="paciente"
              className={`p-2 w-80 ${inputBorder}`}
              type="text"
              placeholder="Digite o código de verificação"
            />
          </div>
        </div>
      </div>
      <WhiteMode />
    </div>
  );
}

export default Confirmacao;

import React, { useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import WhiteMode from '../components/WhiteMode';
import Perfil1 from '../assets/perfil.jpg';
import { EditarPerfil } from '../components/Cards/Sobre';
import { TemaContexto } from '../components/WhiteMode';
import Accordion from '../components/Accordion';


const Perfil = () => {
  const [popupAberto, setPopupAberto] = useState(false);

  const togglePopup = () => setPopupAberto((prev) => !prev);

  const { tema } = useContext(TemaContexto);
  const bgTxt= tema? 'bg-cinza':'bg-neutral-800 '

  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Ajustes</Titulo>

        <div className='flex justify-center gap-16 py-20'>
          <div className="flex items-center justify-center ">
            <div className={`w-full p-10 shadow-lg rounded-lg max-w-lg ${bgTxt}`}>
              <h2 className="text-3xl font-semibold text-center mb-6">DADOS DO PSICÓLOGO</h2>
              
              <div className="flex justify-center mb-6">
                <img
                  src={Perfil1}
                  alt="Avatar"
                  className="w-32 h-32 rounded-full border-4 border-preto-whitemode shadow-lg"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                <div>
                  <label className="text-roxo font-bold text-lg md:text-2xl">Nome</label>
                  <p className=" text-xl">Jerson da Fonsceca</p>
                </div>
                
                <div>
                  <label className="text-roxo font-bold text-lg md:text-2xl">CPF/CNPJ</label>
                  <p className=" text-xl">47340752845</p>
                </div>

                <div>
                  <label className="text-roxo font-bold text-lg md:text-2xl">CRP</label>
                  <p className=" text-xl">47340752845</p>
                </div>

                <div>
                  <label className="text-roxo font-bold text-lg md:text-2xl">Email</label>
                  <p className=" text-xl">ajuda@gmail.com</p>
                </div>
              </div>  

              <div className="flex justify-center mt-6">
                <button onClick={togglePopup} className="bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all">
                  Editar
                </button>
              </div>

              {popupAberto && (
                <div className='popup' onClick={togglePopup}>
                  <div onClick={(e) => e.stopPropagation()} className='m-20 moveis:m-0'>
                    <EditarPerfil closePopup={togglePopup} />
                  </div>
                </div>
              )}

              <WhiteMode />
            </div>
          </div>

          <div className='w-[700px]'>
            <div className={`p-4 rounded-lg ${bgTxt}`}>
            <Accordion header={'Como posso ter acesso aos dados clínicos de meus paciente?'} content={"É possível encontrar um botão para ver dados clínicos dentro da página do paciente o quais se deseja ver tais dados"}></Accordion>
              <Accordion header={"Como posso emitir os recibos?"} content={'Ao clicar no botão "ação" de algum item listado na aba de financeiro é possível encontrar um botão de gerar recibo, onde um pdf vai ser gerado e baixado automaticamente no dispositivo do psicólogo'}></Accordion>
              <Accordion header={"Como funciona o atendimento por vídeo?"} content={"Ao clicar nas consultas, se nota a exitência de um botão de iniciar consulta, onde ao ser clicado é gerado um link para a chamada e direciona o psicólogo diretamente para a chamada do Google Meet"}></Accordion>
              <Accordion header={"Porque só posso desativar e não deletar um paciente por completo?"} content={"Está previsto por lei uma obrigatóriedade em manter quaisquer dados clínicos de pacientes mesmo que ainda não passem mais com o mesmo psicólogos."}></Accordion>
              <Accordion header={'Porque nas abas de gerenciamento está aparecendo uma tela de "não há dados"?'} content={"Provavelmente você não possi nenhum dado cadastrado em nosso banco de dados, tente criar algum dado para ver se o problema persiste."} ultimo={true}></Accordion>
            </div>
          </div>


        </div>
        
        

        
      </div>
    </div>
  );
};

export default Perfil;

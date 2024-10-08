import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo.png';
import Imagem1 from '../assets/img_landingpage1.svg';
import Imagem2 from '../assets/img_landingpage2.svg';
import WhiteMode from '../components/WhiteMode';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  return (
    <div className='font-sans'>

      {/* Header */}
      <header className="w-full bg-cinza py-4 shadow-md">
        <nav className="h20 mx-auto px-6 flex justify-between items-center">
          <a href="./" className=''>
            <h1 className="text-4xl font-bold text-preto-whitemode dark:text-preto-darkmode">Easy<span className='text-azul'>Psi</span></h1>
          </a>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-preto-darkmode hover:text-azul transition font-bold">Início</a></li>
            <li><a href="#features" className="text-preto-darkmode hover:text-azul transition font-bold">Recursos</a></li>
            <li><a href="#about" className="text-preto-darkmode hover:text-azul transition font-bold">Sobre</a></li>
            <li><a href="#contact" className="text-preto-darkmode hover:text-azul transition font-bold">Contato</a></li>
          </ul>
          <Link to="/login">
            <button className="bg-roxo text-branco-darkmode px-8 py-4 rounded-3xl hover:bg-purple-700 transition" >Login</button>
          </Link>
        </nav>
      </header>

      {/* Inicio */}
      <section id="home" className="container mx-auto px-6 flex flex-col lg:flex-row items-center mt-16 lg:mt-32">
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h2 className="text-5xl font-bold text-branco-darkmode mb-6 leading-tight">
            Inicie sua jornada na melhor plataforma de gestão para psicólogos:
            Easy<span className="text-azul">Psi</span>
          </h2>
          <p className="text-lg text-branco-darkmode mb-6">
            Nossa plataforma foi criada para facilitar a sua rotina, permitindo que você dedique mais tempo ao que realmente importa:<span className='text-azul'> cuidar das pessoas!</span>
          </p>
          <Link to="/Cadastro">
            <button className="bg-azul text-branco-whitemode px-8 py-3 rounded-3xl hover:bg-blue-700 transition shadow-lg">
              Comece Agora
            </button>
          </Link>
        </div>
        {/* Imagem */}
        <div className="lg:w-1/2">
          <img
            src={Imagem1}
            alt="Ilustração de 3 pessoas posicionadas próximas usando roupas roxas e brancas"
            className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
          />
        </div>
      </section>

      {/* Recursos */}
      <section id="features" className="bg-roxo py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-branco-whitemode mb-8">Recursos Poderosos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Agendamento */}
            <div className="p-6 bg-cinza rounded-lg shadow-md hover:shadow-lg transition hover:scale-105">
              <h4 className="text-2xl font-semibold text-azul mb-4">Agendamento</h4>
              <p className="text-preto-darkmode font-medium text-justify"> 
              
              Com uma interface intuitiva, é possível visualizar e modificar compromissos em poucos cliques. <br/><br/>
              O sistema envia <span className='text-azul font-semibold'>lembretes automáticos</span> aos pacientes por e-mail, reduzindo falta!<br/> <br/>
              Além disso, integra múltiplas agendas, permitindo um <span className='text-azul font-semibold'>controle unificado dos horários</span>. A flexibilidade do agendamento facilita o ajuste de horários conforme a necessidade dos pacientes.

              </p>
            </div>

            {/* Controle Financeiro */}
            <div className="p-6 bg-cinza rounded-lg shadow-md hover:shadow-lg transition hover:scale-105">
              <h4 className="text-2xl font-semibold text-azul mb-4">Controle Financeiro</h4>
              <p className="text-preto-darkmode font-medium text-justify">
                
                Psicólogos podem acompanhar quais pacientes já efetuaram o pagamento e identificar aqueles com pendências financeiras.<br/><br/>
                O sistema também possibilita <span className='text-azul font-semibold'>a emissão de recibos </span> personalizados para cada consulta ou serviço prestado.<br/> <br/>
                Além disso, a funcionalidade de <span className='text-azul font-semibold'>dashboards</span> oferece uma visão clara e personalizada das finanças, permitindo o controle financeiro e a tomada de decisões estratégicas.
                
                </p>
            </div>

            {/*Controle de Pacientes*/}
            <div className="p-6 bg-cinza rounded-lg shadow-md hover:shadow-lg transition hover:scale-105">
              <h4 className="text-2xl font-semibold text-azul mb-4">Controle de Pacientes</h4>
              <p className="text-preto-darkmode font-medium text-justify">

                O controle de pacientes permite gerenciar dados clínicos e administrativos de forma segura e organizada.<br/><br/>
                Informações como <span className='text-azul font-semibold'>histórico clínico, dados de contato e evolução terapêutica</span> são armazenadas de forma centralizada. Psicólogos podem acessar o prontuário de cada paciente a qualquer momento, com total privacidade e segurança!<br/><br/>
                O sistema garante conformidade com a <span className='text-azul font-semibold'>LGPD</span>, protegendo os dados sensíveis.
              
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="about" className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img
            src={Imagem2}
            alt="Ilustração de computador com icone de um homem dentro"
            className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
          />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h4 className="text-4xl font-bold text-branco-darkmode">Nossa Missão</h4>
            <p className="text-lg text-cinza mb-9">
              <br/>
            Acreditamos que a saúde mental é uma prioridade e que os psicólogos desempenham um papel fundamental na promoção do bem-estar emocional.<br/> <br/>
            
             Nosso objetivo é oferecer uma <span className='font-bold text-azul'>solução completa de gestão</span> que simplifica o dia a dia do consultório. Desenvolvemos <span className='font-bold text-azul'>ferramentas intuitivas e eficientes</span> que permitem aos psicólogos focar no que realmente importa: o atendimento aos pacientes.<br/> <br/>
             
              Com funcionalidades de <span className='font-bold text-azul'>agendamento, controle financeiro, gestão de pacientes e histórico clínico</span>, nossa plataforma visa otimizar a prática profissional, proporcionando mais tempo e recursos para a prática clínica. Estamos comprometidos em apoiar os psicólogos na entrega de um atendimento de qualidade, ajudando-os a crescer e prosperar em suas carreiras.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full bg-roxo py-6 text-white">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>&copy; 2024 EASYPSI. Todos os direitos reservados à alunos fatec.</p>
          <div className="flex space-x-4">
            <a href="google.com" className="hover:text-azul transition">Facebook</a>
            <a href="google.com" className="hover:text-azul transition">Twitter</a>
            <a href="google.com" className="hover:text-azul transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
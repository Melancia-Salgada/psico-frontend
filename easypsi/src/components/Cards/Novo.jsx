import React, { useState } from "react";
import { Quill } from "../TextEditor/Quill";



export const Paciente = ({ closePopup }) => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8001/login', {
        username,
        password
      });

      console.log("salvo com sucesso")
    } catch (error) {
      if (error/*error.response && error.response.data && error.response.data.message*/) {
        console.log("deu erro", error)
      } 
    }
  };
    
  return (
    <div className="bg-preto-darkmode rounded-[50px] relative w-full h-full lg:min-w-[60rem] lg:min-h-[50rem] moveis:w-screen moveis:h-screen moveis:rounded-none">
      <div className="pt-14 pl-16 pr-16 pb-20">
        <div className="flex justify-between font-bold">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-[30px]">Novo Paciente</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer p-2" onClick={closePopup}>X</div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="w-full lg:w-1/2 space-y-4">
              {/* Informações Pessoais */}
              <div>
                <label className="text-lg sm:text-xl font-bold mb-2">Nome</label>
                <input
                  name="nome"
                  className="p-2 w-full caixa-texto-cad"
                  type="text"
                  placeholder="Digite o nome"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex-1">
                  <label className="text-lg sm:text-xl font-bold mb-2">Nascimento</label>
                  <input
                    name="nascimento"
                    className="p-2 w-full caixa-texto-cad"
                    type="date"
                    placeholder="Digite a data de nascimento"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-lg sm:text-xl font-bold mb-2">Telefone</label>
                  <input
                    name="telefone"
                    className="p-2 w-full caixa-texto-cad"
                    type="text"
                    placeholder="Digite o Telefone"
                  />
                </div>
              </div>

              {/* Dados */}
              <div>
                <span className="underline">Dados Adicionais</span>
                <div>
                  <label className="text-lg sm:text-xl font-bold mb-2">Email</label>
                  <input
                    name="email"
                    className="p-2 w-full caixa-texto-cad"
                    type="text"
                    placeholder="Digite o email"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <label className="text-lg sm:text-xl font-bold mb-2">CPF</label>
                    <input
                      name="cpf"
                      className="p-2 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o CPF"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-lg sm:text-xl font-bold mb-2">RG</label>
                    <input
                      name="rg"
                      className="p-2 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o RG"
                    />
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div>
                <span className="underline">Local</span>
                <div>
                  <label className="text-lg sm:text-xl font-bold mb-2">Endereço</label>
                  <input
                    name="endereco"
                    className="p-2 w-full caixa-texto-cad"
                    type="text"
                    placeholder="Digite o endereço"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <label className="text-lg sm:text-xl font-bold mb-2">Complemento</label>
                    <input
                      name="complemento"
                      className="p-2 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o complemento"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-lg sm:text-xl font-bold mb-2">CEP</label>
                    <input
                      name="cep"
                      className="p-2 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o CEP"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* barra */}
            <div className="hidden lg:block">
              <div className="border-preto-whitemode border-[3px] h-auto"></div>
            </div>

            {/* Informação Responsável */}
            <div className="w-full lg:w-1/2 space-y-4">
              <span className="underline">Menor de Idade</span>
              <div>
                <label className="text-lg sm:text-xl font-bold mb-2">Nome do Responsável</label>
                <input
                  name="responsavelNome"
                  className="p-2 w-full caixa-texto-cad"
                  type="text"
                  placeholder="Digite o nome do responsável"
                />
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <label className="text-lg sm:text-xl font-bold mb-2">Telefone</label>
                    <input
                      name="responsavelTelefone"
                      className="p-2 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o telefone"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-lg sm:text-xl font-bold mb-2">CPF</label>
                    <input
                      name="responsavelCpf"
                      className="p-2 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o CPF"
                    />
                  </div>
                </div>
              </div>

              {/* Anotações */}
              <div>
                <span className="underline">Anotações</span>
                <Quill/>
              </div>
            </div>
          </div>

          {/* Botão */}
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full sm:w-auto">
              Salvar Paciente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Consulta = ({ closePopup }) => {
  return (
    <div className="bg-preto-darkmode rounded-[50px] relative w-full h-auto lg:w-[60rem] lg:h-[40rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-between font-bold mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Nova Consulta</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>
        
        <form className="space-y-4 sm:space-y-6">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
            <div className="w-full lg:w-1/2 space-y-4">
              {/* Paciente */}
              <div>
                <label className="text-lg sm:text-xl font-bold mb-1 block">Paciente</label>
                <input
                  name="paciente"
                  className="p-2 w-full caixa-texto-cad"
                  type="text"
                  placeholder="Digite o nome do Paciente"
                />
              </div>
              
              {/* Horario */}
              <div>
                <span className="text-base sm:text-lg font-semibold block mb-2">Horário</span>
                <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <label className="text-sm font-bold mb-1 block">Data</label>
                    <input
                      name="data"
                      className="p-2 w-full caixa-texto-cad"
                      type="date"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-bold mb-1 block">Inicio</label>
                    <input
                      name="inicio"
                      className="p-2 w-full caixa-texto-cad"
                      type="time"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-bold mb-1 block">Fim</label>
                    <input
                      name="fim"
                      className="p-2 w-full caixa-texto-cad"
                      type="time"
                    />
                  </div>
                </div>
              </div>

              {/* financeiro */}
              <div>
                <span className="text-base sm:text-lg font-semibold block mb-2">Financeiro</span>
                <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <label className="text-sm font-bold mb-1 block">Valor</label>
                    <input
                      name="valor"
                      className="p-2 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o valor da consulta"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-bold mb-1 block">Vencimento</label>
                    <input
                      name="vencimento"
                      className="p-2 w-full caixa-texto-cad"
                      type="date"
                      placeholder="Data de vencimento"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* barra */}
            <div className="hidden lg:block border-preto-whitemode border-[3px] h-auto"></div>

            <div className="w-full lg:w-1/2 space-y-4">
              {/* Anotações */}
              <div>
                <span className="text-base sm:text-lg font-semibold block mb-2">Anotações</span>
                <Quill/>
              </div>
            </div>
          </div>

          {/* botao */}
          <div className="mt-4 sm:mt-6">
            <button type="submit" className="w-full sm:w-auto bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
              Agendar Consulta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Pagamento = () => {



  
};

export const Adm = () => {};


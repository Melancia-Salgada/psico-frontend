
import React, { useContext, useState } from 'react';
import { TemaContexto } from '../WhiteMode';


export const SobrePaciente = ({ closePopup }) => {
    
  return (
    <div className="bg-preto-darkmode relative w-full h-auto lg:w-[60rem] lg:h-[48rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-between font-bold mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Novo Paciente</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>
        
        <form className="space-y-3">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="w-full lg:w-1/2 space-y-3">
              {/* Informações Pessoais */}
              <div>
                <div className="flex flex-col">
                  <label className="text-md sm:text-lg font-bold mb-1 p-2">Nome</label>
                  <input
                    name="nome"
                    className="p-1 w-full caixa-texto-cad"
                    type="text"
                    placeholder="Digite o nome"
                  />
                </div>
              </div>

                <div className="flex flex-col sm:flex-row justify-between gap-3">
                  <div className="flex-1">
                    <label className="text-md sm:text-lg font-bold mb-1 p-2">Nascimento</label>
                    <input
                      name="nascimento"
                      className="p-1 w-3/4 flex-1 caixa-texto-cad"
                      type="date"
                      placeholder="Digite a data de nascimento"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-md sm:text-lg font-bold mb-1 p-2">Telefone</label>
                    <input
                      name="telefone"
                      className="p-1 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o Telefone"
                    />
                  </div>
                </div>

              {/* Dados */}
              <div>
                <span className="underline">Dados Adicionais</span>
                <div>
                  <label className="text-md sm:text-lg font-bold mb-1 p-2">Email</label>
                  <input
                    name="email"
                    className="p-1 w-full caixa-texto-cad"
                    type="text"
                    placeholder="Digite o email"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-3">
                  <div className="flex-1">
                    <label className="text-md sm:text-lg font-bold mb-1 p-2">CPF</label>
                    <input
                      name="cpf"
                      className="p-1 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o CPF"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-md sm:text-lg font-bold mb-1 p-2">RG</label>
                    <input
                      name="rg"
                      className="p-1 w-full caixa-texto-cad"
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
                  <label className="text-md sm:text-lg font-bold mb-1 p-2">Endereço</label>
                  <input
                    name="endereco"
                    className="p-1 w-full caixa-texto-cad"
                    type="text"
                    placeholder="Digite o endereço"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-3">
                  <div className="flex-1">
                    <label className="text-md sm:text-lg font-bold mb-1 p-2">Complemento</label>
                    <input
                      name="complemento"
                      className="p-1 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o complemento"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-md sm:text-lg font-bold mb-1 p-2">CEP</label>
                    <input
                      name="cep"
                      className="p-1 w-full caixa-texto-cad"
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
            <div className="w-full lg:w-1/2 space-y-3">
              <span className="underline">Menor de Idade</span>
              <div>
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Nome do Responsável</label>
                <input
                  name="responsavelNome"
                  className="p-1 w-full caixa-texto-cad"
                  type="text"
                  placeholder="Digite o nome do responsável"
                />
                <div className="flex flex-col sm:flex-row justify-between gap-3">
                  <div className="flex-1">
                    <label className="text-md sm:text-lg font-bold mb-1 p-2">Telefone</label>
                    <input
                      name="responsavelTelefone"
                      className="p-1 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o telefone"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-md sm:text-lg font-bold mb-1 p-2">CPF</label>
                    <input
                      name="responsavelCpf"
                      className="p-1 w-full caixa-texto-cad"
                      type="text"
                      placeholder="Digite o CPF"
                    />
                  </div>
                </div>
              </div>

              {/* Anotações */}
              <div>
                <span className="underline">Anotações</span>
              </div>
            </div>
          </div>

          {/* Botão */}
          <div className="mt-12 flex justify-center">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-auto">
              Salvar Paciente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
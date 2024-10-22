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
    <div className="  bg-roxo rounded-[50px] relative w-full h-full lg:min-w-[60rem] lg:min-h-[50rem] moveis:w-screen moveis:h-screen moveis:rounded-none">
      <div className="pt-14 pl-16 pr-16 pb-20">
        <div className="flex justify-between font-bold">
          <div className="lg:text-[80px] mb-[30px] md:text-[60px]">Novo Paciente</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-[30px] cursor-pointer p-2 " onClick={closePopup}>X</div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between gap-10">
            <div>
              {/* Personal Information */}
              <div>
                <label className="mb-2">Nome</label>
                <input
                  name="nome"
                  className="p-2 w-full"
                  type="text"
                  placeholder="Digite o nome"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <label className="mb-2">Nascimento</label>
                  <input
                    name="cpf"
                    className="p-2 w-full"
                    type="text"
                    placeholder="Digite a data de nascimento"
                  />
                </div>
                <div>
                  <label className="mb-2">Telefone</label>
                  <input
                    name="rg"
                    className="p-2 w-full"
                    type="text"
                    placeholder="Digite o Telefone"
                  />
                </div>
              </div>

              {/* Dados */}
              <div>
                <span className="underline">Dados Adicionais</span>
                <div>
                  <label className="mb-2">Email</label>
                  <input
                    name="email"
                    className="p-2 w-full"
                    type="text"
                    placeholder="Digite o email"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <label className="mb-2">CPF</label>
                    <input
                      name="cpf"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o CPF"
                    />
                  </div>
                  <div>
                    <label className="mb-2">RG</label>
                    <input
                      name="rg"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o RG"
                    />
                  </div>
                </div>
                
              </div>

              {/* endereço */}
              <div>
                <span className="underline">Local</span>
                <div>
                  <label className="mb-2">Endereço</label>
                  <input
                    name="endereco"
                    className="p-2 w-full"
                    type="text"
                    placeholder="Digite o endereço"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <label className="mb-2">Complemento</label>
                    <input
                      name="complemento"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o complemento"
                    />
                  </div>
                  <div>
                    <label className="mb-2">CEP</label>
                    <input
                      name="cep"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o CEP"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* barra */}
            <div>
              <div className="border-preto-whitemode border-[3px] h-full"></div>
            </div>

            {/* informação respondavel */}
            <div>
              <span className="underline">Menor de Idade</span>
              <div>
                <label className="mb-2">Nome do Responsável</label>
                <input
                  name="responsavelNome"
                  className="p-2 w-full"
                  type="text"
                  placeholder="Digite o nome do responsável"
                />
                <div className="flex justify-between">
                  <div>
                    <label className="mb-2">Telefone</label>
                    <input
                      name="responsavelTelefone"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o telefone"
                    />
                  </div>
                  <div>
                    <label className="mb-2">CPF</label>
                    <input
                      name="responsavelCpf"
                      className="p-2 w-full"
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

          {/* botao */}
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
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
    <div className="  bg-roxo rounded-[50px] relative w-full h-full lg:min-w-[60rem] lg:min-h-[50rem] moveis:w-screen moveis:h-screen moveis:rounded-none">
      <div className="pt-14 pl-16 pr-16 pb-20">
        <div className="flex justify-between font-bold">
          <div className="lg:text-[80px] mb-[30px] md:text-[60px]">Nova Consulta</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-[40px] cursor-pointer p-2 " onClick={closePopup}>X</div>
          </div>
        </div>
        
        <form>
          <div className="flex justify-between gap-10">
            <div>
              {/* Paciente */}
              <div>
                <label className="mb-2">Paciente</label>
                <input
                  name="paciente"
                  className="p-2 w-full"
                  type="text"
                  placeholder="Digite o nome do Paciente"
                />
              </div>
              

              {/* Horario */}
              <div>
                <span className="underline">Horário</span>
                <div>
                  <label className="mb-2">Data</label>
                  <input
                    name="data"
                    className="p-2 w-full"
                    type="text"
                    placeholder="Digite a data da consulta"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <label className="mb-2">Inicio</label>
                    <input
                      name="inicio"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o horário do inicio da consulta"
                    />
                  </div>
                  <div>
                    <label className="mb-2">Fim</label>
                    <input
                      name="fim"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o horário do final da consulta"
                    />
                  </div>
                </div>
                
              </div>

              {/* financeiro */}
              <div>
                <span className="underline">Financeiro</span>
                
                <div className="flex justify-between">
                  <div>
                    <label className="mb-2">Valor</label>
                    <input
                      name="complemento"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o valor da consulta"
                    />
                  </div>
                  <div>
                    <label className="mb-2">Vencimento</label>
                    <input
                      name="cep"
                      className="p-2 w-full"
                      type="text"
                      placeholder="Digite o vencimento para o pagamento da consulta"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* barra */}
            <div>
              <div className="border-preto-whitemode border-[3px] h-full"></div>
            </div>

            <div>
              

              {/* Anotações */}
              <div>
                <span className="underline">Anotações</span>
                <Quill/>
              </div>
            </div>
          </div>

          {/* botao */}
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Agendar Consulta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Pagamento = () => {};

export const Adm = () => {};

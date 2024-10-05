import React, { useState } from "react";
import { Quill } from "../TextEditor/Quill";

export const Paciente = () => {

  return (
    <div className="h-[50rem] w-[95rem] bg-roxo rounded-[50px] relative">
      <div className="pt-10 pl-16 pr-16">
        <div className="text-[80px] mb-[30px]">Novo Paciente</div>
        <form>
          <div className="flex justify-between">
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

              {/* Additional Data */}
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
                {/* Add more fields as needed */}
              </div>

              {/* Address Information */}
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

            {/* Divider */}
            <div>
              <div className="border-preto-whitemode border-[3px] h-full"></div>
            </div>

            {/* Minor Information */}
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

              {/* Notes */}
              <div>
                <span className="underline">Anotações</span>
                <Quill/>
              </div>
            </div>
          </div>

          {/* Submit Button */}
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

export const Consulta = () => {};

export const Pagamento = () => {};

export const Adm = () => {};

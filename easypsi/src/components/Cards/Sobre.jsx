import React, { useContext, useState } from 'react';
import { TemaContexto } from '../WhiteMode';

export const SobrePaciente = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar';

  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[60rem] lg:h-[48rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-between font-bold mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Dados do Paciente</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="w-full lg:w-1/2 space-y-3">
            {/* Informações Pessoais */}
            <div>
              <div className="flex flex-col">
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Nome</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Nome do paciente"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Email</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Telefone</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            {/* Dados */}
            <div>
              <span className="underline">Dados Adicionais</span>
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <label className="text-md sm:text-lg font-bold mb-1 p-2">CPF</label>
                  <input
                    className={`p-1 w-full ${inputBorder}`}
                    type="text"
                    placeholder="000.000.000-00"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-md sm:text-lg font-bold mb-1 p-2">RG</label>
                  <input
                    className={`p-1 w-full ${inputBorder}`}
                    type="text"
                    placeholder="00.000.000-0"
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
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Rua Exemplo, 123"
                />
              </div>
              <div>
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Complemento</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Apto 123"
                />
              </div>
            </div>
          </div>

          {/* barra */}
          <div className="hidden lg:block">
            <div className="border-preto-whitemode border-[3px] h-auto"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-3">
            {/* Consultas */}
            <div>
              <span className="text-lg font-bold ">Consultas</span>
              <div className="flex items-center justify-between mb-4">
                <input
                  type="text"
                  placeholder="PESQUISA"
                  className={`p-1 w-1/3 ${inputBorder}`}
                />
                <input
                  type="text"
                  placeholder="FILTRO"
                  className={`p-1 w-1/3 ${inputBorder}`}
                />
                <button className="bg-blue-500 p-2 rounded-full"></button>
              </div>

              <div className="flex justify-between text-sm mb-4 font-bold">
                <span>DIA</span>
                <span>HORA</span>
                <span>VALOR</span>
                <span>FINANCEIRO</span>
                <span>ESTADO</span>
              </div>

              <div className="space-y-2">
                <div className="p-2">Consulta 1</div>
                <hr />
                <div className="p-2">Consulta 2</div>
                <hr />
                <div className="p-2">Consulta 3</div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SobreConsulta = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar';

  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[60rem] lg:h-[48rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-between font-bold mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Dados do Paciente</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="w-full lg:w-1/2 space-y-3">
            {/* Informações Pessoais */}
            <div>
              <div className="flex flex-col">
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Nome</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Nome do paciente"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Email</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Telefone</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            {/* Dados */}
            <div>
              <span className="underline">Dados Adicionais</span>
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <label className="text-md sm:text-lg font-bold mb-1 p-2">CPF</label>
                  <input
                    className={`p-1 w-full ${inputBorder}`}
                    type="text"
                    placeholder="000.000.000-00"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-md sm:text-lg font-bold mb-1 p-2">RG</label>
                  <input
                    className={`p-1 w-full ${inputBorder}`}
                    type="text"
                    placeholder="00.000.000-0"
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
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Rua Exemplo, 123"
                />
              </div>
              <div>
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Complemento</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Apto 123"
                />
              </div>
            </div>
          </div>

          {/* barra */}
          <div className="hidden lg:block">
            <div className="border-preto-whitemode border-[3px] h-auto"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-3">
            {/* Consultas */}
            <div>
              <span className="text-lg font-bold ">Consultas</span>
              <div className="flex items-center justify-between mb-4">
                <input
                  type="text"
                  placeholder="PESQUISA"
                  className={`p-1 w-1/3 ${inputBorder}`}
                />
                <input
                  type="text"
                  placeholder="FILTRO"
                  className={`p-1 w-1/3 ${inputBorder}`}
                />
                <button className="bg-blue-500 p-2 rounded-full"></button>
              </div>

              <div className="flex justify-between text-sm mb-4 font-bold">
                <span>DIA</span>
                <span>HORA</span>
                <span>VALOR</span>
                <span>FINANCEIRO</span>
                <span>ESTADO</span>
              </div>

              <div className="space-y-2">
                <div className="p-2">Consulta 1</div>
                <hr />
                <div className="p-2">Consulta 2</div>
                <hr />
                <div className="p-2">Consulta 3</div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SobreFinanceiro = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar';

  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[40rem] lg:h-[30rem] md:w-[90%] sm:w-full sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4 sm:p-6">
        <div className="flex justify-between font-bold mb-4">
          <div className="text-2xl sm:text-3xl">Editar Pagamento</div>
          <div className="hover:text-red-500 transition-colors text-2xl cursor-pointer" onClick={closePopup}>X</div>
        </div>

        <div className="flex flex-col space-y-4 w-full max-w-xl mx-auto">
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-md font-bold mb-1">Valor</label>
              <input
                className={`p-1 w-full ${inputBorder}`}
                type="text"
                placeholder="R$ 0,00"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-md font-bold mb-1">Data de Vencimento</label>
              <input
                className={`p-1 w-full ${inputBorder}`}
                type="date"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-md font-bold mb-1">Estado</label>
              <select className={`p-1 w-full ${inputBorder}`}>
                <option value="pendente">Pendente</option>
                <option value="pago">Pago</option>
                <option value="atrasado">Atrasado</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button className="btn-entrar px-8 py-3 text-lg font-bold">
              GRAVAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SobreAdmin = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar';

  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[60rem] lg:h-[48rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-between font-bold mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Dados do Paciente</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="w-full lg:w-1/2 space-y-3">
            {/* Informações Pessoais */}
            <div>
              <div className="flex flex-col">
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Nome</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Nome do paciente"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Email</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Telefone</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            {/* Dados */}
            <div>
              <span className="underline">Dados Adicionais</span>
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1">
                  <label className="text-md sm:text-lg font-bold mb-1 p-2">CPF</label>
                  <input
                    className={`p-1 w-full ${inputBorder}`}
                    type="text"
                    placeholder="000.000.000-00"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-md sm:text-lg font-bold mb-1 p-2">RG</label>
                  <input
                    className={`p-1 w-full ${inputBorder}`}
                    type="text"
                    placeholder="00.000.000-0"
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
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Rua Exemplo, 123"
                />
              </div>
              <div>
                <label className="text-md sm:text-lg font-bold mb-1 p-2">Complemento</label>
                <input
                  className={`p-1 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Apto 123"
                />
              </div>
            </div>
          </div>

          {/* barra */}
          <div className="hidden lg:block">
            <div className="border-preto-whitemode border-[3px] h-auto"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-3">
            {/* Consultas */}
            <div>
              <span className="text-lg font-bold ">Consultas</span>
              <div className="flex items-center justify-between mb-4">
                <input
                  type="text"
                  placeholder="PESQUISA"
                  className={`p-1 w-1/3 ${inputBorder}`}
                />
                <input
                  type="text"
                  placeholder="FILTRO"
                  className={`p-1 w-1/3 ${inputBorder}`}
                />
                <button className="bg-blue-500 p-2 rounded-full"></button>
              </div>

              <div className="flex justify-between text-sm mb-4 font-bold">
                <span>DIA</span>
                <span>HORA</span>
                <span>VALOR</span>
                <span>FINANCEIRO</span>
                <span>ESTADO</span>
              </div>

              <div className="space-y-2">
                <div className="p-2">Consulta 1</div>
                <hr />
                <div className="p-2">Consulta 2</div>
                <hr />
                <div className="p-2">Consulta 3</div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


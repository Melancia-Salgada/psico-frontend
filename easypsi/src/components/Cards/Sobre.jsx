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
              <div className="flex flex-row justify-between gap-3 mt-2">
                <div className="flex-1">
                  <label className="text-md sm:text-lg font-bold">CPF</label>
                  <span className="text-sm block">000.000.000-00</span>
                </div>
                <div className="flex-1">
                  <label className="text-md sm:text-lg font-bold">RG</label>
                  <span className="text-sm block">00.000.000-0</span>
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
    <div className={`${bgTxt} relative w-full h-auto lg:w-[50rem] lg:h-[35rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex justify-between font-bold mb-4">
          <div className="text-xl sm:text-2xl md:text-3xl">DADOS DA CONSULTA</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-6">
          <div className="w-1/2 space-y-4">
            <div>
              <label className="text-md sm:text-lg font-bold block">NOME DO PACIENTE</label>
              <span className="text-sm block p-1">João da Silva</span>
            </div>

            <div>
              <span className="text-md sm:text-lg font-bold block">Horários</span>
              <div className="space-y-2">
                <div>
                  <label className="block">DIA</label>
                  <span className="text-sm block p-1">15/03/2024</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block">HORA INÍCIO</label>
                    <span className="text-sm block p-1">14:00</span>
                  </div>
                  <div className="flex-1">
                    <label className="block">HORA FIM</label>
                    <span className="text-sm block p-1">15:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-md sm:text-lg font-bold block">Financeiro</span>
              <div className="space-y-2">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block">VALOR</label>
                    <span className="text-sm block p-1">R$ 150,00</span>
                  </div>
                  <div className="flex-1">
                    <label className="block">DATA MAX PGMNT</label>
                    <span className="text-sm block p-1">20/03/2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divisor vertical */}
          <div className="border-l-2 border-preto-whitemode h-auto"></div>

          <div className="w-1/2">
            <div>
              <label className="text-md sm:text-lg font-bold block">Anotações</label>
              <textarea
                className={`p-2 w-full h-48 ${inputBorder}`}
                placeholder="Digite suas anotações aqui..."
              />
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
    <div className={`${bgTxt} relative w-full h-auto lg:w-[40rem] lg:h-[40rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex justify-between font-bold mb-4 sm:mb-6">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Novo Administrador</div>
        <div>
          <div className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer" onClick={closePopup}>X</div>
        </div>
      </div>
      
      <form className="space-y-6">
        <div className="space-y-6">
          <div>
            <label className="text-md sm:text-lg font-bold mb-2 p-2">Email</label>
            <input
              name="email"
              className="p-2 w-full caixa-texto-cad"
              type="email"
              placeholder="Digite o email"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex-1">
              <label className="text-md sm:text-lg font-bold mb-2 p-2">CPF</label>
              <input
                name="cpf"
                className="p-2 w-full caixa-texto-cad"
                type="text"
                placeholder="Digite o CPF"
              />
            </div>
            <div className="flex-1">
              <label className="text-md sm:text-lg font-bold mb-2 p-2">Telefone</label>
              <input
                name="telefone"
                className="p-2 w-full caixa-texto-cad"
                type="text"
                placeholder="Digite o telefone"
              />
            </div>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold mb-2 p-2">Senha</label>
            <div className="relative">
              <input
                name="password"
                className="p-2 w-full caixa-texto-cad"
                type={showPassword ? "text" : "password"}
                placeholder="Digite a senha"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => togglePassword('password')}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold mb-2 p-2">Confirmar Senha</label>
            <div className="relative">
              <input
                name="confirmPassword"
                className="p-2 w-full caixa-texto-cad"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirme a senha"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => togglePassword('confirm')}
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-12 flex justify-center">
          <button type="submit" className="btn-entrar px-8 py-3 text-lg font-bold">
            GRAVAR
          </button>
          
        </div>
      </form>
    </div>
  </div>
  );
};

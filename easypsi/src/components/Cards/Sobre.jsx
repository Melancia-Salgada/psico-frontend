import React, { useContext, useState } from 'react';
import { TemaContexto } from '../WhiteMode';

export const SobrePaciente = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[50rem] lg:h-[28rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4">
        <div className="flex justify-between font-bold mb-4">
          <div className="text-2xl sm:text-3xl">Dados do Paciente</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-2xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="w-full lg:w-1/2 space-y-2">
            {/* Informações Pessoais */}
            <div className="flex flex-col">
              <label className="text-md sm:text-lg font-bold">Nome</label>
              <span className="text-sm block">João da Silva</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold">Email</label>
                <span className="text-sm block">joao@exemplo.com</span>
              </div>
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold">Telefone</label>
                <span className="text-sm block">(00) 00000-0000</span>
              </div>
            </div>

            {/* Dados */}
            <div>
              <span className="text-md sm:text-lg font-bold">Dados Adicionais</span>
              <div className="flex flex-row justify-between gap-3">
                <div className="flex-1">
                  <label className="text-md font-bold">CPF</label>
                  <span className="text-sm block">000.000.000-00</span>
                </div>
                <div className="flex-1">
                  <label className="text-md font-bold">RG</label>
                  <span className="text-sm block">00.000.000-0</span>
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div>
              <span className="text-md sm:text-lg font-bold">Local</span>
              <div>
                <label className="text-md font-bold">Endereço</label>
                <span className="text-sm block">Rua Exemplo, 123</span>
              </div>
              <div>
                <label className="text-md font-bold">Complemento</label>
                <span className="text-sm block">Apto 123</span>
              </div>
            </div>
          </div>

          {/* barra */}
          <div className="hidden lg:block border-l-2 border-preto-whitemode h-auto"></div>

          <div className="w-full lg:w-1/2">
            {/* Consultas */}
            <div>
              <span className="text-lg font-bold">Últimas Consultas</span>
              <div className="flex justify-between text-sm font-bold mt-2">
                <span>DATA</span>
                <span>HORA</span>
                <span>ESTADO</span>
              </div>

              <div className="space-y-1 mt-2">
                <div className="flex justify-between text-sm">
                  <span>15/03/24</span>
                  <span>14:00</span>
                  <span>Concluída</span>
                </div>
                <hr/>
                <div className="flex justify-between text-sm">
                  <span>22/03/24</span>
                  <span>15:00</span>
                  <span>Agendada</span>
                </div>
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
    <div className={`${bgTxt} relative w-full h-auto lg:w-[50rem] lg:h-[28rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex justify-between font-bold mb-4">
          <div className="text-xl sm:text-2xl md:text-3xl">Dados da Consulta</div>
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
                className={`p-2 w-full h-48 rounded-lg ${inputBorder}`}
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

  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[30rem] lg:h-[20rem] md:w-[90%] sm:w-full sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4">
        <div className="flex justify-between font-bold mb-4">
          <div className="text-2xl sm:text-3xl">Dados do Pagamento</div>
          <div className="hover:text-red-500 transition-colors text-2xl cursor-pointer" onClick={closePopup}>X</div>
        </div>

        <div className="flex flex-col space-y-3 w-full max-w-xl mx-auto">
          <div className="flex flex-col">
            <label className="text-md sm:text-lg font-bold mb-1">Valor</label>
            <span className="text-sm block p-1">R$ 150,00</span>
          </div>

          <div className="flex flex-col">
            <label className="text-md sm:text-lg font-bold mb-1">Data de Vencimento</label>
            <span className="text-sm block p-1">15/03/2024</span>
          </div>

          <div className="flex flex-col">
            <label className="text-md sm:text-lg font-bold mb-1">Estado</label>
            <span className="text-sm block p-1">Pendente</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SobreAdmin = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';

  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[30rem] lg:h-[20rem] md:w-[90%] sm:w-full sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4">
        <div className="flex justify-between font-bold mb-4">
          <div className="text-2xl sm:text-2xl md:text-3xl">Dados do Administrador</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <label className="text-md sm:text-lg font-bold block">Email</label>
            <span className="text-sm block p-1">admin@exemplo.com</span>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold block">CPF</label>
            <span className="text-sm block p-1">000.000.000-00</span>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold block">Telefone</label>
            <span className="text-sm block p-1">(00) 00000-0000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SobrePsicologo = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  return (
   <div className={`${bgTxt} relative w-full h-auto lg:w-[30rem] lg:h-[28rem] md:w-[90%] sm:w-full sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4">
        <div className="flex justify-between font-bold mb-4">
          <div className="text-2xl sm:text-2xl md:text-3xl">Dados do psicólogo</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
        <div>
            <label className="text-md sm:text-lg font-bold block">Nome</label>
            <span className="text-sm block p-1">Placeholder</span>
          </div>
          <div>
            <label className="text-md sm:text-lg font-bold block">Email</label>
            <span className="text-sm block p-1">psicologo@exemplo.com</span>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold block">CPF</label>
            <span className="text-sm block p-1">000.000.000-00</span>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold block">Telefone</label>
            <span className="text-sm block p-1">(00) 00000-0000</span>
          </div>
          <div>
            <label className="text-md sm:text-lg font-bold block">CRP</label>
            <span className="text-sm block p-1">00000000</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export const EditarPerfil = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar'; 


  return (
    <>
      <div className={`${bgTxt} relative w-full h-auto lg:w-[40rem] lg:h-[35rem] md:w-[90%] sm:w-full sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4">
        <div className="flex justify-between font-bold mb-4">
          <div className="text-xl sm:text-2xl md:text-3xl">DADOS DO PSICÓLOGO</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <div className="space-y-6">
            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">Nome</label>
              <input
                name="nome"
                className={`p-2 w-full ${inputBorder}`}
                type="nome"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">CPF</label>
              <input
                name="cpf"
                className={`p-2 w-full ${inputBorder}`}
                type="cpf"
                placeholder="Digite seu CPF"
              />
            </div>

            <div>
            <label className="text-md sm:text-lg font-bold mb-2 p-2">CRP</label>
              <input
                name="crp"
                className={`p-2 w-full ${inputBorder}`}
                type="crp"
                placeholder="Digite seu CRP"
              />
            </div>
            <div>
            <label className="text-md sm:text-lg font-bold mb-2 p-2">E-mail</label>
              <input
                name="e-mail"
                className={`p-2 w-full ${inputBorder}`}
                type="e-mail"
                placeholder="Digite seu e-mail"
              />
            </div>

            </div>
            
            <div className="flex justify-center mt-4">
                    <button className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>SALVAR</button>
                  </div>
          </div>
    </div>
    </>
    
  );
        

};

export const EditarPerfilAdmin = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar'; 


  return (
    <>
      <div className={`${bgTxt} relative w-full h-auto lg:w-[40rem] lg:h-[28rem] md:w-[90%] sm:w-full sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4">
        <div className="flex justify-between font-bold mb-4">
          <div className="text-xl sm:text-2xl md:text-3xl">DADOS DO ADMINISTRADOR</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <div className="space-y-6">
            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">Email</label>
              <input
                name="nome"
                className={`p-2 w-full ${inputBorder}`}
                type="nome"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">CPF</label>
              <input
                name="cpf"
                className={`p-2 w-full ${inputBorder}`}
                type="cpf"
                placeholder="Digite seu CPF"
              />
            </div>

            <div>
            <label className="text-md sm:text-lg font-bold mb-2 p-2">Telefone</label>
              <input
                name="crp"
                className={`p-2 w-full ${inputBorder}`}
                type="crp"
                placeholder="Digite seu CRP"
              />
            </div>
            

            </div>
            
            <div className="flex justify-center mt-4">
                    <button className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>SALVAR</button>
                  </div>
          </div>
    </div>
    </>
    
  );
        

};

export const SobreRequisicao = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[30rem] lg:h-[30rem] md:w-[90%] sm:w-full sm:rounded-none lg:rounded-2xl`}>
    <div className="p-4">
      <div className="flex justify-between font-bold mb-4">
        <div className="text-2xl sm:text-2xl md:text-3xl">Dados do psicólogo</div>
        <div>
          <div className="hover:text-red-500 transition-colors text-xl cursor-pointer" onClick={closePopup}>X</div>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
      <div>
          <label className="text-md sm:text-lg font-bold block">Nome</label>
          <span className="text-sm block p-1">Placeholder</span>
        </div>
        <div>
          <label className="text-md sm:text-lg font-bold block">Email</label>
          <span className="text-sm block p-1">psicologo@exemplo.com</span>
        </div>

        <div>
          <label className="text-md sm:text-lg font-bold block">CPF</label>
          <span className="text-sm block p-1">000.000.000-00</span>
        </div>

        <div>
          <label className="text-md sm:text-lg font-bold block">Telefone</label>
          <span className="text-sm block p-1">(00) 00000-0000</span>
        </div>
        <div>
          <label className="text-md sm:text-lg font-bold block">CRP</label>
          <span className="text-sm block p-1">00000000</span>
        </div>
      </div>
      <div className='flex justify-between'>
        <button type="submit" className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>
          <span>Aceitar</span>
        </button>
        <button type="submit" className='bg-red-600 text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>
          <span>Negar</span>
        </button>
      </div>
    </div>
  </div>
  );
        

};
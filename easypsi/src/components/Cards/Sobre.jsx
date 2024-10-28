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
                <hr />
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
          <div className="text-xl sm:text-2xl md:text-3xl">DADOS DO ADMINISTRADOR</div>
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
export const EditarPerfil = ({ closePopup }) => {

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
    <div className="bg-preto-darkmode relative w-full h-auto lg:w-[70rem] lg:h-[50rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl">
      <div className="p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="flex justify-between font-bold mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Novo Paciente</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3">
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
              <div className="border-preto-whitemode border-[3px] h-full"></div>
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
                <Quill/>
              </div>
            </div>
          </div>

          {/* Botão */}
          <div className="mt-12 flex justify-center">
            <div className='justify-center flex items-center '>
              
                <button type="submit" className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>
                  <span>Agendar consulta</span>
                </button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
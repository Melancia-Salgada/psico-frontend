import { Quill } from "../TextEditor/Quill";
import React, { useContext, useState } from 'react';
import { TemaContexto } from '../WhiteMode';


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
    <div className="bg-preto-darkmode relative w-full h-auto lg:w-[60rem] lg:h-[48rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
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
                <Quill/>
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

export const Consulta = ({ closePopup }) => {

  const { tema } = useContext(TemaContexto);
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar'; 
  const drop = tema ? '' : 'bg-neutral-900 text-white';
  const bgTxt= tema? 'bg-branco-whitemode':'bg-neutral-900 '

  const [repete, setRepete] = useState('no');

  // Função para renderizar o campo "Até"
  const renderAte = () => {
    if (repete !== "no") {
      return (
        <>
          <span>Até</span>
          <div>
            <input
              name="data"
              className={`p-2 w-3/4 ${inputBorder}`}
              type="date"
            />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[60rem] lg:h-[35rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
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
                <label className="text-lg sm:text-xl font-bold mb-1 block p-2">Nome do paciente</label>
                <input
                  name="paciente"
                  className={`p-2 w-3/4 ${inputBorder}`}
                  type="text"
                  placeholder="Digite o nome do Paciente"
                />
              </div>
              
              {/* Horário */}
              <div>
                <span className="text-base sm:text-lg font-semibold block mb-2">Horário</span>
                <div>
                  <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                    <div className="flex-1">
                      <label className="text-sm font-bold mb-1 block p-2">Data</label>
                      <input
                        name="data"
                        className={`p-2 w-3/4 ${inputBorder}`}
                        type="date"
                        
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-bold mb-1 block p-2">Início</label>
                      <input
                        name="inicio"
                        className={`p-2 w-full ${inputBorder}`}
                        type="time"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-bold mb-1 block p-2">Fim</label>
                      <input
                        name="fim"
                        className={`p-2 w-full ${inputBorder}`}
                        type="time"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 flex justify-between">
                  <div className="">
                    <select
                      className={`p-2 flex flex-row ${inputBorder} cursor-pointer`}
                      onChange={(e) => setRepete(e.target.value)}
                    >
                      <option value="no" className={`py-2 ${drop}`}>Não se repete</option>
                      <option value="Semanalmente" className={`py-2 ${drop}`}>Semanalmente</option>
                      <option value="Mensalmente" className={`py-2 ${drop}`}>Mensalmente</option>
                    </select>
                  </div>
                  {renderAte()}
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

          {/* Botão */}
          <div className="mt-12 flex justify-center">
            <button type="submit" className="sm:w-auto bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
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

export const Adm = ({ closePopup }) => {

  const { tema } = useContext(TemaContexto);
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar'; 
  const drop = tema ? '' : 'bg-neutral-900 text-white';
  const bgTxt= tema? 'bg-branco-whitemode':'bg-neutral-900 '

  const [repete, setRepete] = useState('no');

  // Função para renderizar o campo "Até"
  const renderAte = () => {
    if (repete !== "no") {
      return (
        <>
          <span>Até</span>
          <div>
            <input
              name="data"
              className="p-2 w-3/4 ${inputBorder}"
              type="date"
            />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[60rem] lg:h-[48rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
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
                <label className="text-lg sm:text-xl font-bold mb-1 block p-2">Nome do paciente</label>
                <input
                  name="paciente"
                  className={`p-2 w-3/4 ${inputBorder}`}
                  type="text"
                  placeholder="Digite o nome do Paciente"
                />
              </div>
              
              {/* Horário */}
              <div>
                <span className="text-base sm:text-lg font-semibold block mb-2">Horário</span>
                <div>
                  <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                    <div className="flex-1">
                      <label className="text-sm font-bold mb-1 block p-2">Data</label>
                      <input
                        name="data"
                        className={`p-2 w-3/4 ${inputBorder}`}
                        type="date"
                        
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-bold mb-1 block p-2">Início</label>
                      <input
                        name="inicio"
                        className={`p-2 w-full ${inputBorder}`}
                        type="time"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-bold mb-1 block p-2">Fim</label>
                      <input
                        name="fim"
                        className={`p-2 w-full ${inputBorder}`}
                        type="time"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 flex justify-between">
                  <div className="">
                    <select
                      className={`p-2 flex flex-row ${inputBorder} cursor-pointer`}
                      onChange={(e) => setRepete(e.target.value)}
                    >
                      <option value="no" className={`py-2 ${drop}`}>Não se repete</option>
                      <option value="Semanalmente" className={`py-2 ${drop}`}>Semanalmente</option>
                      <option value="Mensalmente" className={`py-2 ${drop}`}>Mensalmente</option>
                    </select>
                  </div>
                  {renderAte()}
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

          {/* Botão */}
          <div className="mt-12 flex justify-center">
            <button type="submit" className="sm:w-auto bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
              Agendar Consulta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

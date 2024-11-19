import React, { useContext, useState, useEffect } from 'react';
import { TemaContexto } from '../WhiteMode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const SobrePaciente = ({dadosPopup, closePopup }) => {
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
              <span className="text-sm block">{dadosPopup.nomeCompleto}</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold">Email</label>
                <span className="text-sm block">{dadosPopup.email}</span>
              </div>
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold">Telefone</label>
                <span className="text-sm block">{dadosPopup.phonenumber}</span>
              </div>
            </div>

            {/* Dados */}
            <div>
              <span className="text-md sm:text-lg font-bold">Dados Adicionais</span>
              <div className="flex flex-row justify-between gap-3">
                <div className="flex-1">
                  <label className="text-md font-bold">CPF</label>
                  <span className="text-sm block">{dadosPopup.CPF}0</span>
                </div>
                <div className="flex-1">
                  <label className="text-md font-bold">Grupo</label>
                  <span className="text-sm block">{dadosPopup.group}</span>
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div>
              <span className="text-md sm:text-lg font-bold">Local</span>
              <div>
                <label className="text-md font-bold">Endereço</label>
                <span className="text-sm block">{dadosPopup.endereco}</span>
              </div>
              <div>
                <label className="text-md font-bold">Complemento</label>
                <span className="text-sm block">{dadosPopup.complemento}</span>
              </div>
            </div>
          </div>

          {/* barra */}
          <div className="hidden lg:block border-l-2 border-preto-whitemode h-auto"></div>

          <div className="w-full lg:w-1/2">
            {/* Endereço */}
            <div>
              <span className="text-md sm:text-lg font-bold">Menor de idade</span>
              <div>
                <label className="text-md font-bold">Nome do Responsável</label>
                <span className="text-sm block">{dadosPopup.nomeCompletoResponsavel}</span>
              </div>
              <div>
                <label className="text-md font-bold">Telefone do Responsável</label>
                <span className="text-sm block">{dadosPopup.telefoneResponsavel}</span>
              </div>
              <div>
                <label className="text-md font-bold">CPF do responsável</label>
                <span className="text-sm block">{dadosPopup.cpfResponsavel}</span>
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

export const SobreAdmin = ({dadosPopup ,closePopup }) => {
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
            <span className="text-sm block p-1">{dadosPopup[0].email}</span>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold block">CPF</label>
            <span className="text-sm block p-1">{dadosPopup[0].CPF}</span>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold block">Telefone</label>
            <span className="text-sm block p-1">{dadosPopup[0].phonenumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SobrePsicologo = ({dadosPopup ,closePopup }) => {
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
            <span className="text-sm block p-1">{dadosPopup[0].username}</span>
          </div>
          <div>
            <label className="text-md sm:text-lg font-bold block">Email</label>
            <span className="text-sm block p-1">{dadosPopup[0].email}</span>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold block">CPF</label>
            <span className="text-sm block p-1">{dadosPopup[0].CPF}</span>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold block">CRP</label>
            <span className="text-sm block p-1">{dadosPopup[0].CRP}</span>
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
  const navigate = useNavigate()

  const [dados, setDados] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [crp, setCrp] = useState("");
  const [cpf, setCpf] = useState("");

  const username = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://127.0.0.1:8000/recuperar-email/${token}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const usernameData = await username();
        const response = await axios.get(`http://127.0.0.1:8001/buscar-usuario/${usernameData}`);
        console.log(response.data);
        setDados(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    
    buscarUsuario(); 
  }, []);

  // Atualiza os campos quando os dados são carregados
  useEffect(() => {
    if (dados) {
      setNome(dados[0].username);
      setEmail(dados[0].email);
      setCrp(dados[0].CRP);
      setCpf(dados[0].CPF);
    }
  }, [dados]);

  const handleEditar = async (e) => {
    e.preventDefault();
    try {
      const usernameData = await username();
      const response = await axios.patch(`http://127.0.0.1:8001/atualizar-usuario/${usernameData}`, {
        username: nome
      });
      if (response.status === 200) {
        console.log("editou");
        
        navigate(0)
        closePopup()
      } else {
        console.error('Error authenticating user');
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
    }
  };

  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[40rem] lg:h-[35rem] md:w-[90%] sm:w-full sm:rounded-none lg:rounded-2xl`}>
      <form onSubmit={handleEditar}>
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
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">E-mail</label>
              <input
                name="email"
                className={`p-2 w-full ${inputBorder} bg-gray-300`}
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                disabled
              />
            </div>
            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">CRP</label>
              <input
                name="crp"
                className={`p-2 w-full ${inputBorder} bg-gray-300`}
                type="text"
                placeholder="Digite seu CRP"
                disabled
                value={crp}
              />
            </div>
            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">CPF</label>
              <input
                name="cpf"
                className={`p-2 w-full ${inputBorder} bg-gray-300`}
                type="text"
                placeholder="Digite seu CPF"
                disabled
                value={cpf}
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>SALVAR</button>
          </div>
        </div>
      </form>
    </div>
  );
};


export const EditarPerfilAdmin = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar'; 
  const navigate = useNavigate()

  const [dados, setDados] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCpf] = useState("");
  const [phonenumber, setPhone] = useState("");

  const token = localStorage.getItem('token')

  const username = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://127.0.0.1:8000/recuperar-email/${token}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const usernameData = await username();
        const response = await axios.get(`http://127.0.0.1:8001/buscar-usuario/${usernameData}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data);
        setDados(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    
    buscarUsuario(); 
  }, []);

  // Atualiza os campos quando os dados são carregados
  useEffect(() => {
    if (dados) {
      setNome(dados .username);
      setEmail(dados[0].email);
      setPhone(dados[0].phonenumber);
      setCpf(dados[0].CPF)
    }
  }, [dados]);

  const handleEditar = async (e) => {
    e.preventDefault();
    try {
      const usernameData = await username();
      const response = await axios.patch(`http://127.0.0.1:8001/atualizar-usuario/${usernameData}`, {
        username: email,
        phonenumber
      });
      if (response.status === 200) {
        console.log("editou");
        
        navigate(0)
        closePopup()
      } else {
        console.error('Error authenticating user');
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
    }
  };
  return (
    <>
      <div className={`${bgTxt} relative w-full h-auto lg:w-[40rem] lg:h-[28rem] md:w-[90%] sm:w-full sm:rounded-none lg:rounded-2xl`}>
      <form onSubmit={handleEditar}>
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
                name="email"
                className={`p-2 w-full ${inputBorder} bg-gray-300`}
                type="email"
                placeholder="Digite seu nome"
                disabled
                value={email}
              />
            </div>

            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">CPF</label>
              <input
                name="cpf"
                className={`p-2 w-full ${inputBorder} bg-gray-300`}
                type="cpf"
                placeholder="Digite seu CPF"
                disabled
                value={CPF}
              />
            </div>

            <div>
            <label className="text-md sm:text-lg font-bold mb-2 p-2">Telefone</label>
              <input
                name="phone"
                className={`p-2 w-full ${inputBorder}`}
                type="phone"
                placeholder="Digite seu Telefone"
                value={phonenumber}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            

            </div>
            
            <div className="flex justify-center mt-4">
                    <button className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>SALVAR</button>
                  </div>
          </div>
          </form>
    </div>
    </>
    
  );
        

};

export const SobreRequisicao = ({ dadosPopup, closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  const navigate = useNavigate()

  const [cpf, setCpf] = useState("");

  // Use useEffect para definir o CPF apenas quando `psicologo` mudar
  useEffect(() => {
    if (dadosPopup && dadosPopup.length > 0 && dadosPopup[0].CPF !== cpf) {
      setCpf(dadosPopup[0].CPF);
    }
  }, [dadosPopup, cpf]);

  const handleAceitar = async () => {
    try {
      const response = await axios.patch(`http://127.0.0.1:8001/aprovar-psicologo/${cpf}`);
      if (response.status === 200) {
        console.log("aprovado");
        navigate(0)
      } else {
        console.log("erro na aprovação");
      }
    } catch (error) {
      console.error("Erro ao aprovar:", error);
    }
  };

  const handleNegar = async () => {
    try {
      const response = await axios.patch(`http://127.0.0.1:8001/desaprovar-psicologo/${cpf}`);
      if (response.status === 200) {
        
        console.log("negado");
        navigate(0)
      } else {
        console.log("erro ao negar");
      }
    } catch (error) {
      console.error("Erro ao negar:", error);
    }
  };

  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[30rem] lg:h-[30rem] md:w-[90%] sm:w-full sm:rounded-none lg:rounded-2xl`}>
      <form className="p-4">
        <div className="flex justify-between font-bold mb-4">
          <div className="text-2xl sm:text-2xl md:text-3xl">Dados do psicólogo</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <label className="text-md sm:text-lg font-bold block">Email</label>
            <span className="text-sm block p-1">{dadosPopup[0].email}</span>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold block">CPF</label>
            <span className="text-sm block p-1">{dadosPopup[0].CPF}</span>
          </div>

          <div>
            <label className="text-md sm:text-lg font-bold block">CRP</label>
            <span className="text-sm block p-1">{dadosPopup[0].CRP}</span>
          </div>
        </div>

        <div className='flex justify-between'>
          <button type="button" onClick={handleAceitar} className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>
            <span>Aceitar</span>
          </button>
          <button type="button" onClick={handleNegar} className='bg-red-600 text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>
            <span>Negar</span>
          </button>
        </div>
      </form>
    </div>
  );
};
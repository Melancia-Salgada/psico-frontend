import { Quill } from "../TextEditor/Quill";
import React, { useContext, useState } from 'react';
import { TemaContexto } from '../WhiteMode';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Paciente = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const navigate =useNavigate()

  // States para cada input
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [grupo, setGrupo] = useState(''); 
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [responsavelNome, setResponsavelNome] = useState('');
  const [responsavelTelefone, setResponsavelTelefone] = useState('');
  const [responsavelCpf, setResponsavelCpf] = useState('');
  const [emailPsi, setEmailPsi] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const emailPsi = payload.email;
      setEmailPsi(emailPsi);
      console.log(emailPsi);
    }


    try {
      const response = await axios.post('http://127.0.0.1:8002/novo-paciente', {
        nomeCompleto: nome,
        nascimento,
        telefone,
        email,
        cpf,
        grupo,
        endereco,
        complemento,
        cep,
        nomeCompletoResponsavel: responsavelNome,
        telefoneResponsavel: responsavelTelefone,
        cpfResponsavel: responsavelCpf,
        emailPsi,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        console.log(response.data)
        console.log("salvo com sucesso");
        
        navigate(0)
        closePopup()
      } else {
          console.error('Error authenticating user');
      }
      
    } catch (error) {
      if (error) {
        console.log("deu erro", error);
      }
    }
  };

  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar'; 
  const drop = tema ? '' : 'bg-neutral-900 text-white';
  const bgTxt= tema ? 'bg-branco-whitemode' : 'bg-neutral-900';

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={`${bgTxt} relative w-full h-full xs:h-screen xs:overflow-y-auto lg:w-[90%] lg:h-[50rem] md:w-[90%] sm:rounded-none lg:rounded-2xl`}>
        <div className="p-2 xs:p-4 md:p-6 lg:p-8">
          <div className="flex justify-between font-bold mb-4 xs:mb-6">
            <div className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl">Novo Paciente</div>
            <div>
              <div className="hover:text-red-500 transition-colors text-2xl xs:text-3xl cursor-pointer" onClick={closePopup}>X</div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="w-full lg:w-1/2 space-y-3">
                {/* Informações Pessoais */}
                <div>
                  <div className="flex flex-col">
                    <label className="text-md xs:text-lg font-bold pl-2">Nome</label>
                    <input
                      name="nome"
                      className={`p-2 w-full ${inputBorder}`}
                      type="text"
                      placeholder="Digite o nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>
                </div>
  
                <div className="flex flex-col xs:flex-row justify-between gap-3">
                  <div className="flex-1">
                    <label className="text-md xs:text-lg font-bold mb-1 p-2">Nascimento</label>
                    <input
                      name="nascimento"
                      className={`p-2 w-full ${inputBorder}`}
                      type="date"
                      placeholder="Digite a data de nascimento"
                      value={nascimento}
                      onChange={(e) => setNascimento(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-md xs:text-lg font-bold mb-1 p-2">Telefone</label>
                    <input
                      name="telefone"
                      className={`p-2 w-full ${inputBorder}`}
                      type="text"
                      placeholder="Digite o Telefone"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      required
                    />
                  </div>
                </div>
  
                {/* Dados */}
                <div>
                  <span className="text-xl font-bold">Dados Adicionais</span>
                  <div>
                    <label className="text-md xs:text-lg font-bold mb-1 p-2">Email</label>
                    <input
                      name="email"
                      className={`p-2 w-full ${inputBorder}`}
                      type="text"
                      placeholder="Digite o email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col xs:flex-row justify-between gap-3">
                    <div className="flex-1">
                      <label className="text-md xs:text-lg font-bold mb-1 p-2">CPF</label>
                      <input
                        name="cpf"
                        className={`p-2 w-full ${inputBorder}`}
                        type="text"
                        placeholder="Digite o CPF"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                      />
                    </div>
                  <div className="flex flex-col xs:flex-row justify-between gap-3">
                    <div className="flex-1">
                      <label className="text-md xs:text-lg font-bold mb-1 p-2">Grupo</label>
                      <select
                        className={`p-2 flex flex-row ${inputBorder} cursor-pointer`}
                        value={grupo}
                        onChange={(e) => setGrupo(e.target.value)}
                      >
                        <option value="" className={`py-2 ${drop}`}>Grupo do paciente</option>
                        <option value="Criança" className={`py-2 ${drop}`}>Criança</option>
                        <option value="Adolescente" className={`py-2 ${drop}`}>Adolescente</option>
                        <option value="Adulto" className={`py-2 ${drop}`}>Adulto</option>
                        <option value="Idoso" className={`py-2 ${drop}`}>Idoso</option>
                      </select>
                    </div>
                    
                  </div>
                
                  </div>
                </div>
  
                {/* Endereço */}
                <div>
                  <span className="text-xl font-bold">Local</span>
                  <div>
                    <label className="text-md xs:text-lg font-bold mb-1 p-2">Endereço</label>
                    <input
                      name="endereco"
                      className={`p-2 w-full ${inputBorder}`}
                      type="text"
                      placeholder="Digite o endereço"
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col xs:flex-row justify-between gap-3">
                    <div className="flex-1">
                      <label className="text-md xs:text-lg font-bold mb-1 p-2">Complemento</label>
                      <input
                        name="complemento"
                        className={`p-2 w-full ${inputBorder}`}
                        type="text"
                        placeholder="Digite o complemento"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-md xs:text-lg font-bold mb-1 p-2">CEP</label>
                      <input
                        name="cep"
                        className={`p-2 w-full ${inputBorder}`}
                        type="text"
                        placeholder="Digite o CEP"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
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
                <span className="text-xl font-bold">Menor de Idade</span>
                <div>
                  <label className="text-md xs:text-lg font-bold mb-1 p-2">Nome do Responsável</label>
                  <input
                    name="responsavelNome"
                    className={`p-2 w-full ${inputBorder}`}
                    type="text"
                    placeholder="Digite o nome do responsável"
                    value={responsavelNome}
                    onChange={(e) => setResponsavelNome(e.target.value)}
                  />
                  <div className="flex flex-col xs:flex-row justify-between gap-3">
                    <div className="flex-1">
                      <label className="text-md xs:text-lg font-bold mb-1 p-2">Telefone</label>
                      <input
                        name="responsavelTelefone"
                        className={`p-2 w-full ${inputBorder}`}
                        type="text"
                        placeholder="Digite o telefone"
                        value={responsavelTelefone}
                        onChange={(e) => setResponsavelTelefone(e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-md xs:text-lg font-bold mb-1 p-2">CPF</label>
                      <input
                        name="responsavelCpf"
                        className={`p-2 w-full ${inputBorder}`}
                        type="text"
                        placeholder="Digite o CPF"
                        value={responsavelCpf}
                        onChange={(e) => setResponsavelCpf(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
  
                {/* Anotações */}
                <div>
                  <span className="text-xl font-bold">Anotações</span>
                  <Quill />
                </div>
              </div>
            </div>
  
            {/* Botão */}
            <div className="mt-12 flex justify-center">
              <div className='justify-center flex items-center '>
                <button type="submit" className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>
                  <span>Criar paciente</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};



export const Consulta = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const inputBorder = tema ? "pesquisar whitemode" : "pesquisar";
  const drop = tema ? "" : "bg-neutral-900 text-white";
  const bgTxt = tema ? "bg-branco-whitemode" : "bg-neutral-900";

  // Estados para o formulário
  const [nome, setNome] = useState("");
  const [emailPaciente, setEmailPaciente] = useState("");
  const [data, setData] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [repete, setRepete] = useState("no");
  const [ate, setAte] = useState("");
  const [emailPsi, setEmailPsi] = useState("");
  const [dadosPaciente, setDadosPaciente] = useState(null); // Dados do paciente
  
  // Função para renderizar o campo "Até" quando a consulta se repete
  const renderAte = () => {
    if (repete !== "no") {
      return (
        <>
          <span>Até</span>
          <div>
            <input
              name="ate"
              className={`p-2 w-full ${inputBorder}`}
              type="date"
              value={ate}
              onChange={(e) => setAte(e.target.value)}
            />
          </div>
        </>
      );
    }
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    // Obter e-mail do psicólogo
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const emailPsi = payload.email;
      setEmailPsi(emailPsi);
      console.log(emailPsi);
    }

    // Buscar paciente
    try {
      const response = await axios.get(
        `http://127.0.0.1:8002/buscar-paciente/${emailPaciente}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const dados = response.data;
      console.log("Dados do paciente:", dados);
      setDadosPaciente(dados); // Armazena os dados do paciente no estado
    } catch (error) {
      console.error("Erro ao buscar dados do paciente:", error);
      return; // Para impedir a continuação caso a busca falhe
    }

    // Criar agendamento
    try {
      const response = await axios.post(
        "http://127.0.0.1:8003/novo-agendamento",
        {
          nome: nome, // Usa o nome do paciente
          data,
          hora_inicio: inicio,
          hora_fim: fim,
          email_cliente: emailPaciente,
          descricao: ""
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Agendamento salvo com sucesso:", response.data);
        closePopup();
      } else {
        console.log(nome, " ",inicio," ",fim," ", data," ",emailPaciente)
        console.error("Erro ao salvar agendamento.");
      }
    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
    }
  };

  return (
    <div
      className={`${bgTxt} relative w-full h-auto lg:w-[60rem] lg:h-[35rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}
    >
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-between font-bold mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Nova Consulta
          </div>
          <div>
            <div
              className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer"
              onClick={closePopup}
            >
              X
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
            <div className="w-full lg:w-1/2 space-y-4">
              {/* Paciente */}
              <div>
                <label className="text-lg sm:text-xl font-bold mb-1 block p-2">
                  Email do paciente
                </label>
                <input
                  name="paciente"
                  className={`p-2 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Digite o email do Paciente"
                  value={emailPaciente}
                  onChange={(e) => setEmailPaciente(e.target.value)}
                />
              </div>
              {/* Horário */}
              <div>
                <span className="text-base sm:text-lg font-semibold block mb-2">
                  Horário
                </span>
                <div>
                  <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                    <div className="flex-1">
                      <label className="text-sm font-bold mb-1 block p-2">
                        Data
                      </label>
                      <input
                        name="data"
                        className={`p-2 w-full ${inputBorder}`}
                        type="date"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-bold mb-1 block p-2">
                        Início
                      </label>
                      <input
                        name="inicio"
                        className={`p-2 w-full ${inputBorder}`}
                        type="time"
                        value={inicio}
                        onChange={(e) => setInicio(e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-bold mb-1 block p-2">
                        Fim
                      </label>
                      <input
                        name="fim"
                        className={`p-2 w-full ${inputBorder}`}
                        type="time"
                        value={fim}
                        onChange={(e) => setFim(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex justify-between">
                  <div className="">
                    <select
                      className={`p-2 flex flex-row ${inputBorder} cursor-pointer`}
                      value={repete}
                      onChange={(e) => setRepete(e.target.value)}
                    >
                      <option value="no" className={`py-2 ${drop}`}>
                        Não se repete
                      </option>
                      <option value="Semanalmente" className={`py-2 ${drop}`}>
                        Semanalmente
                      </option>
                      <option value="Mensalmente" className={`py-2 ${drop}`}>
                        Mensalmente
                      </option>
                    </select>
                  </div>
                  {renderAte()}
                </div>
              </div>
            </div>
          </div>
          {/* Botão */}
          <div className="justify-center flex items-center">
            <button
              type="submit"
              className="bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all"
            >
              <span>Agendar consulta</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export const Adm = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar'; 

  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("")

  const navigate = useNavigate()

  const token = localStorage.getItem('token');
  const togglePassword = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const checkPassword = () => {
    return password === confirmPassword
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!checkPassword()) {
      return console.log("senhas diferentes")
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:8001/novo-usuario-admin', {
        username,
        email,
        password,
        phonenumber : telefone,
        CPF: cpf        
      }/*, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }*/);
  
      if (response.status === 200) {
        console.log('Administrador salvo com sucesso:', response.data);
        closePopup()
        navigate(0)
      } else {
        console.error('Erro ao salvar o administrador');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };
  
  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[40rem] lg:h-[40rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-between font-bold mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Novo Administrador</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-6">
            
          <div className="flex flex-col sm:flex-row justify-between gap-3">
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold mb-2 p-2">Nome</label>
                <input
                  name="nome"
                  className={`p-2 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Digite o Nome"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold mb-2 p-2">Email</label>
                <input
                  name="email"
                  className={`p-2 w-full ${inputBorder}`}
                  type="email"
                  placeholder="Digite o email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold mb-2 p-2">CPF</label>
                <input
                  name="cpf"
                  className={`p-2 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Digite o CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="text-md sm:text-lg font-bold mb-2 p-2">Telefone</label>
                <input
                  name="telefone"
                  className={`p-2 w-full ${inputBorder}`}
                  type="text"
                  placeholder="Digite o telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">Senha</label>
              <div className="relative">
                <input
                  name="password"
                  className={`p-2 w-full ${inputBorder}`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite a senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  className={`p-2 w-full ${inputBorder}`}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirme a senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
            <div className='justify-center flex items-center '>
              
                <button type="submit" className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between pl-9 pr-9 font-bold hover:bg-purple-950 transition-all'>
                  <span>Criar administrador</span>
                </button>
              
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export const Financeiro = ({ closePopup }) => {
  const { tema } = useContext(TemaContexto);
  const bgTxt = tema ? 'bg-branco-whitemode' : 'bg-neutral-900';
  const inputBorder = tema ? 'pesquisar whitemode' : 'pesquisar'; 
  const drop = tema ? '' : 'bg-neutral-900 text-white';
  
  return (
    <div className={`${bgTxt} relative w-full h-auto lg:w-[35rem] lg:h-[35rem] md:w-[90%] sm:w-full sm:h-screen sm:rounded-none lg:rounded-2xl`}>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-between font-bold mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Novo Financeiro</div>
          <div>
            <div className="hover:text-red-500 transition-colors text-2xl sm:text-3xl cursor-pointer" onClick={closePopup}>X</div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="space-y-6">
            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">Nome do paciente</label>
              <input
                name="sobre"
                className={`p-2 w-full ${inputBorder}`}
                type="text"
                placeholder="Digite a descrição"
              />
            </div>

            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">Valor</label>
              <input
                name="valor"
                className={`p-2 w-full ${inputBorder}`}
                type="number"
                placeholder="Digite o valor"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                  e.target.value = (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                }}
              />
            </div>

            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">Data de Vencimento</label>
              <input
                name="vencimento"
                className={`p-2 w-full ${inputBorder}`}
                type="date"
              />
            </div>

            <div>
              <label className="text-md sm:text-lg font-bold mb-2 p-2">Estado</label>
              <select className={`p-2 flex w-full flex-row ${inputBorder} cursor-pointer`}>
                <option value="Pendente" className={`py-2 ${drop}`}>Pendente</option>
                <option value="Pago" className={`py-2 ${drop}`}>Pago</option>
                <option value="Atrasado" className={`py-2 ${drop}`}>Atrasado</option>
              </select>
            </div>
          </div>

          {/* Botões */}
          <div className="mt-12 flex justify-center">
            <button type="submit" className='bg-roxo text-branco-whitemode text-2xl rounded-full flex items-center h-[53px] justify-between px-9 font-bold hover:bg-purple-950 transition-all'>
              <span>Salvar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};







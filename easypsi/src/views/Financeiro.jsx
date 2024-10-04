import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';
import TextEditor from '../components/TextEditor/Tiptap'

const Financeiro = () => {
  const headers = ['Paciente', 'Valor', 'Vencimento', 'Status'];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_BACKEND'); 
        const jsonData = await response.json();
        
        setData(jsonData.financeiro); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Financeiro</Titulo>
        <div>
          
          <div className='h-[50rem] w-[95rem] bg-roxo rounded-[50px]'>
            <div className='pt-10 pl-16 pr-16'>

              <div className='text-[80px] mb-[30px]'>
                Novo Paciente
              </div>

              <div className='flex justify-between'>

                <div>

                  <div>  
                    <div>
                      <label className='mb-2'>Nome</label>
                      <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                    </div>

                    <div className='flex justify-between'>
                      <div>
                        <label className='mb-2'>CPF</label>
                        <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                      </div>
                      <div>
                        <label className='mb-2'>RG</label>
                        <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <span className='underline'>Dados adicionais</span>
                    </div>

                    <div>  
                      <div>
                        <label className='mb-2'>Email</label>
                        <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                      </div>

                      <div className='flex justify-between'>
                        <div>
                          <label className='mb-2'>CPF</label>
                          <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                        </div>
                        <div>
                          <label className='mb-2'>RG</label>
                          <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div>
                    <div>
                      <span className='underline'>Local</span>
                    </div>

                    <div>
                      <div>
                        <label className='mb-2'>Endereço</label>
                        <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <label className='mb-2'>Complemento</label>
                          <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                        </div>
                        <div>
                          <label className='mb-2'>CEP</label>
                          <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                        </div>
                      </div>


                    </div>

                  </div>
                </div>

                <div>
                  <div className='border-preto-whitemode border-[3px] h-full'>
                    
                  </div>
                </div>

                <div>
                  <div>
                    <div>
                      <span className='underline'>Menor de idade</span>
                    </div>
                    <div>
                      <div>
                        <label className='mb-2'>Nome do responsável</label>
                        <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                      </div>

                      <div className='flex justify-between'>
                        <div>
                          <label className='mb-2'>Telefone</label>
                          <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                        </div>
                        <div>
                          <label className='mb-2'>CPF</label>
                          <input className='p-2 w-full' type='text' placeholder='Pesquisar'></input>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <div>
                    <div>
                      <span className='underline'>Anotações</span>
                    </div>
                    <div>
                      <TextEditor></TextEditor>
                    </div>
                  </div>

                  <div>
                    <a>
                      <button>
                        a
                      </button>
                    </a>
                  </div>
                </div>

              </div>
                 
            </div>
          </div>



          {/*
          <div className='flex justify-between'>
            <div className='h-[250px] w-auto bg-roxo'>
              dados
            </div>
            <div className='h-[250px] w-auto bg-roxo'>
              Financeiro
            </div>
          </div> 
          */}

          <div>
            <Pesquisa showButton={true} />
            <List headers={headers} data={data} />
          </div>
          
          
        </div>

        
      </div>
      <WhiteMode />
    </div>
  );
};

export default Financeiro;

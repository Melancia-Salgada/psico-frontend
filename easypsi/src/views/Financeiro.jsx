import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';
import { Quill } from '../components/TextEditor/Quill';

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
          
          <div className='flex justify-between mt-[3rem]'>
            <div className='h-[300px] w-auto flex justify-between gap-96'>
              <div>
                <span>Valores recebidos no mês (Janeiro/2025)</span>
              </div>
              <div>
                <span>Valores há receber</span>
              </div>
            </div>
            <div className='h-[300px] w-auto '>
              Gráfico
            </div>
          </div> 
          

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

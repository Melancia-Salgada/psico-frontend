import React, { useEffect, useState, useContext } from 'react'; // Adicionado useContext
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import Pesquisa from '../components/Lista/Pesquisa';
import WhiteMode from '../components/WhiteMode';
import List from '../components/Lista/List';
import Grafico from '../components/Graphic/financeiroGrafico';
import NoData from '../components/NoData';
import { TemaContexto } from '../components/WhiteMode';


const Financeiro = () => {
  const headers = ['Paciente', 'Valor', 'Vencimento', 'Status'];
  const [data, setData] = useState([]);

  const { tema } = useContext(TemaContexto); // Corrigido o uso do useContext
  const estilos = tema ? " rounded-3xl" : "";
  

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

  const isEmpty = data.length === 0; // Verifica se os dados estão vazios
  

  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Financeiro</Titulo>
        <div className='mr-10'>
          <div className='flex justify-between mt-[3rem]'>
            <div className='h-[100px] w-auto flex justify-between gap-36'>
              <div>
                <span className='text-2xl font-bold'>Valores recebidos no mês (Janeiro/2025)</span>
                {isEmpty ? (
                  <NoData></NoData>
                ) : (
                  <div>
                    {/* Conteúdo quando há dados */}
                  </div>
                )}
              </div>
              <div>
                <span className='text-2xl font-bold'>Valores a receber</span>
                {isEmpty ? (
                  <NoData></NoData>
                ) : (
                  <div>
                    {/* Conteúdo quando há dados */}
                  </div>
                )}
              </div>
            </div>
            <div className={`h-auto w-auto ${estilos}`}>
              <span className='text-2xl font-bold'>Gráfico</span>
              <Grafico />
            </div>
          </div>
          <div>
            <Pesquisa showButton={false} margin={false} />
            <List headers={headers} data={data} />
          </div>
        </div>
      </div>
      <WhiteMode />
    </div>
  );
};

export default Financeiro;

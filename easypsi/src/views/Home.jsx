import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Titulo from '../components/Titulo';
import WhiteMode from '../components/WhiteMode';

const Home = () => {


  return (
    <div>
      <Sidebar />
      <div className='container-dash'>
        <Titulo showButton={false}>Olá, <span className='text-roxo'>Nome</span>!</Titulo>
      </div>

          <div className="flex-1 ml-24 p-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

{/* Tabela de Paciente*/}
          <div className="bg-cinza shadow-md rounded-lg p-4 w-full md:w-auto flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-4">Póximas Consultas</h2>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full md:min-w-[600px]">
                <thead>
                  <tr className="bg-roxo">
                    <th className="px-4 py-2 text-left font-c"><span className='text-white'>Paciente</span></th>
                    <th className="px-4 py-2 text-left"><span className='text-white'>Data</span></th>
                  </tr>
                </thead>
                <tbody className='bg-branco-whitemode'>
                  <tr>
                    <td className="border px-4 py-2">Natália Lee</td>
                    <td className="border px-4 py-2">23/10/2024</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Emmily Bertollo Campos </td>
                    <td className="border px-4 py-2">22/10/2024</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Gabriel Mendes da Portinha</td>
                    <td className="border px-4 py-2">21/10/2024</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Kauan Almeida da Silva </td>
                    <td className="border px-4 py-2">22/10/2024</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Gabriel Almeida Fereira </td>
                    <td className="border px-4 py-2">21/10/2024</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2"> Renata Morales</td>
                    <td className="border px-4 py-2">24/10/2024</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <a href='/agenda'className='flex justify-center mt-auto'><button className="mt-6 bg-roxo text-white px-2 py-1 rounded hover:bg-purple-400">Ver mais consultas</button></a>
          </div>

{/* Segunda Tabela */}
<div className="bg-cinza shadow-md rounded-lg p-4 w-full md:w-auto flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-4">Financeiro - Pagamento Pendente</h2>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full md:min-w-[600px]">
                <thead>
                  <tr className="bg-roxo">
                    <th className="px-4 py-2 text-left font-c"><span className='text-white'>Paciente</span></th>
                    <th className="px-4 py-2 text-left"><span className='text-white'>Valor</span></th>
                    <th className="px-4 py-2 text-left"><span className='text-white'>Status</span></th>
                    
                  </tr>
                </thead>
                <tbody className='bg-branco-whitemode'>
                  <tr>
                  <td className="border px-4 py-2">João Silva</td>
                  <td className="border px-4 py-2">R$180,00</td>
                  <td className="border px-4 py-2 text-center"><input type="checkbox" className="accent-green-500" /></td>
                  </tr>
                  <tr>
                  <td className="border px-4 py-2">Laura Menezes</td>
                  <td className="border px-4 py-2">R$360,00</td>
                  <td className="border px-4 py-2 text-center"><input type="checkbox" className="accent-green-500" /></td>
                  </tr>
                  <tr>
                  <td className="border px-4 py-2">Leonardo Queiroz</td>
                  <td className="border px-4 py-2">R$160,00</td>
                  <td className="border px-4 py-2 text-center"><input type="checkbox" className="accent-green-500" /></td>
                  </tr>
                  <tr>
                  <td className="border px-4 py-2">Rita Von Hunty</td>
                  <td className="border px-4 py-2">R$180,00</td>
                  <td className="border px-4 py-2 text-center"><input type="checkbox" className="accent-green-500" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href='/financeiro'className='flex justify-center mt-auto'><button className="mt-6 bg-roxo text-white px-2 py-1 rounded hover:bg-purple-400">Ver mais pagamentos</button></a>
          </div>
        </div>
      </div>
      <WhiteMode />
    </div>
  );
};

export default Home;

import React, { useContext, useState } from 'react';
import { TemaContexto } from '../WhiteMode';
import NoData from '../NoData';
import { SobreAdmin, SobreConsulta, SobreFinanceiro, SobrePaciente, SobrePsicologo, SobreRequisicao } from '../Cards/Sobre';
import axios from 'axios';

const List = ({ headers, data, onViewMore, appName, margin = true, limite }) => {
  const [popupAberto, setpopupAberto] = useState(false);
  const [dadosPopup, setDadosPopup] = useState(null); // Estado para armazenar dados específicos do popup
  const { tema } = useContext(TemaContexto);

  const bar = tema ? "border-preto-whitemode" : "border-branco-darkmode";
  const isEmpty = !data || (Array.isArray(data) && data.length === 0);

  const ma = margin ? "mt-[5.3rem] ml-[6.3rem] mr-[6.3rem]" : "";
  const token = localStorage.getItem('token')

  const closePopup = () => {
    setpopupAberto(false);
    setDadosPopup(null); // Limpa os dados do popup ao fechar
  };

  // Função que retorna o handleClick específico para cada appName
  const getHandleClick = (appName) => {
    switch (appName) {
      case "Paciente":
        return async (row) => {
          const patientEmail = row[1]; // Exemplo de uso: assumindo que o ID do paciente está na primeira coluna
          try {
            const response = await axios.get(`http://127.0.0.1:8002/buscar-paciente/${patientEmail}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            
            const dados = response.data;
            console.log(response.data)
            setDadosPopup(dados);
            setpopupAberto(true);
          } catch (error) {
            console.error("Erro ao buscar dados do paciente:", error);
          }
        };
      case "Consulta":
        return async (row) => {
          const consultaId = row[0];
          try {
            const response = await axios.get(`http://127.0.0.1:8001/buscar-consulta/${consultaId}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            const dados = response.data;
            setDadosPopup(dados);
            setpopupAberto(true);
          } catch (error) {
            console.error("Erro ao buscar dados da consulta:", error);
          }
        };
      case "Financeiro":
        return async (row) => {
          const financeId = row[0];
          try {
            const response = await axios.get(`http://127.0.0.1:8001/buscar-financeiro/${financeId}`);
            const dados = response.data;
            setDadosPopup(dados);
            setpopupAberto(true);
          } catch (error) {
            console.error("Erro ao buscar dados financeiros:", error);
          }
        };
      case "Admin":
        return async (row) => {
          const username = row[0];
          try {
            const response = await axios.get(`http://127.0.0.1:8001/buscar-usuario/${username}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            const dados = response.data;
            setDadosPopup(dados);
            setpopupAberto(true);
          } catch (error) {
            console.error("Erro ao buscar dados do administrador:", error);
          }
        };
      case "Psicologo":
        return async (row) => {
          const username = row[0];
          try {
            const response = await axios.get(`http://127.0.0.1:8001/buscar-usuario/${username}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            const dados = response.data;
            setDadosPopup(dados);
            setpopupAberto(true);
          } catch (error) {
            console.error("Erro ao buscar dados do psicólogo:", error);
          }
        };
      case "Requisicao":
        return async (row) => {
          const requisicaoId = row[0];
          try {
            const response = await axios.get(`http://127.0.0.1:8001/buscar-requisicao/${requisicaoId}`);
            const dados = response.data;
            setDadosPopup(dados);
            setpopupAberto(true);
          } catch (error) {
            console.error("Erro ao buscar dados da requisição:", error);
          }
        };
      default:
        return () => {};
    }
  };

  // Obtém o handleClick baseado no appName
  const handleClick = getHandleClick(appName);

  const renderPopup = () => {
    if (!dadosPopup) return null;

    switch (appName) {
      case "Paciente":
        return <SobrePaciente dadosPopup={dadosPopup} closePopup={closePopup} />;
      case "Consulta":
        return <SobreConsulta dadosPopup={dadosPopup} closePopup={closePopup} />;
      case "Financeiro":
        return <SobreFinanceiro dadosPopup={dadosPopup} closePopup={closePopup} />;
      case "Admin":
        return <SobreAdmin dadosPopup={dadosPopup} closePopup={closePopup} />;
      case "Psicologo":
        return <SobrePsicologo dadosPopup={dadosPopup} closePopup={closePopup} />;
      case "Requisicao":
        return <SobreRequisicao dadosPopup={dadosPopup} closePopup={closePopup} />;
      default:
        return null;
    }
  };

  const renderAcao = (row) => {
    if (headers.includes('Ações')) {
      return (
        <div className='flex-1 text-center text-[18px] p-2'>
          <button
            className='bg-roxo text-white p-2 rounded-full hover:bg-purple-950 transition-all'
            onClick={() => handleClick(row)}
          >
            <div className='flex gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-clipboard2" viewBox="0 0 16 16">
                <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1z"/>
                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
              </svg>
            </div>
          </button>
        </div>
      );
    }
  };

  return (
    <div className={ma}>
      <div>
        <div>
          {isEmpty ? (
            <NoData />
          ) : (
            <>
              <div className="flex justify-between mr-4">
                {headers.map((header, index) => (
                  <div key={index} className='flex-1 text-center'>
                    <span className='text-[20px] font-extrabold'>{header}</span>
                  </div>
                ))}
              </div>
              <div className={limite ? 'overflow-y-auto' : ''}>
                {data.map((row, index) => (
                  <div className={`flex justify-between border-b-[1px] p-2 ${bar}`} key={index}>
                    {row.map((item, itemIndex) => (
                      <div className='flex-1 text-center text-[18px] p-2' key={itemIndex}>
                        {item}
                      </div>
                    ))}
                    {renderAcao(row)}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {popupAberto && dadosPopup && (
        <div className='popup popup-background' onClick={closePopup}>
          <div onClick={(e) => e.stopPropagation()} className='m-20 moveis:m-0'>
            {renderPopup()}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;

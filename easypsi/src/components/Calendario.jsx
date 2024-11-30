import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null); // Estado para armazenar o dado
  const [error, setError] = useState(null); // Estado para armazenar erros
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8003/retornar-agenda-usuario',  {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }); // Substitua pela URL correta
        console.log('Resposta da API:', response.data); // Verifique os dados recebidos
        setData(response.data); // Atualiza o estado com os dados recebidos
      } catch (err) {
        console.error('Erro na requisição:', err);
        setError('Erro ao carregar os dados.');
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData();
  }, []); // Executa apenas uma vez, na inicialização do componente

  // Renderização condicional com base nos estados
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;


  return (
    <div>
      {data ? (
        <iframe
          src={`https://calendar.google.com/calendar/embed?src=${data}`}
          style={{ border: "0" }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      ) : (
        <p>Não foi possível carregar os dados.</p>
      )}
    </div>
  );
};

export default MyComponent;

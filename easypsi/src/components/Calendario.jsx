import React, { useEffect, useState, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import axios from 'axios';
import ptlocale from '@fullcalendar/core/locales/pt-br';
import { TemaContexto } from './WhiteMode' // Adjust the path accordingly

const Calendario = () => {
  const { tema } = useContext(TemaContexto);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://seu-backend-url/listar-agendamentos', {
        headers: {
          'Authorization': 'Bearer seu_token', // Adicione o token de autenticação aqui
        },
      });
      const data = response.data;
      const formattedEvents = data.map(event => ({
        title: capitalizeFirstLetter(event.nome),
        start: event.inicio,
        end: event.fim,
        description: event.descricao,
        extendedProps: {
          linkMeet: event['link meet'],
        },
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className={`h-[75vh] w-[80%] transition-all p-5 rounded-md ${tema ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale={ptlocale}
        headerToolbar={{
          left: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: 'title',
          right: 'prev,next today'
        }}
        eventClick={(info) => {
          alert(`Título: ${info.event.title}\nDescrição: ${info.event.extendedProps.description}\nLink: ${info.event.extendedProps.linkMeet}`);
        }}
        height="100%"
         // Apply different backgrounds based on the theme
      />
    </div>
  );
};

export default Calendario;

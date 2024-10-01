import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Pacientes from './views/Pacientes';
import Home from './views/Home';
import Agenda from './views/Agenda';
import Perfil from './views/Perfil';
import { Financeiro } from './views/Financeiro';
import Login from './views/Login';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/pacientes" element={<Pacientes />} />   
          <Route path="/home" element={<Home />} /> 
          <Route path="/agenda" element={<Agenda />} />  
          <Route path="/perfil" element={<Perfil />} />  
          <Route path="/financeiro" element={<Financeiro />} />  
          <Route path="/login" element={<Login />} />    
            <Route path="/" element={<Home />} />     
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

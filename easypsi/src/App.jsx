import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Pacientes from './views/Pacientes';
import Login from './views/Login';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Pacientes />} />    
          <Route path="/login" element={<Login />} />    
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

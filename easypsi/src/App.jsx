import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Pacientes from './views/Pacientes';
import Home from './views/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/pacientes" element={<Pacientes />} />   
          <Route path="/" element={<Home />} />    
        
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pacientes from './views/Pacientes';
import Home from './views/Home';
import Agenda from './views/Agenda';
import Perfil from './views/Perfil';
import Login from './views/Login';
import Consultas from './views/Consultas';
import Financeiro from './views/Financeiro';
import Cadastro from './views/Cadastro';
import LandingPage from './views/LandingPage';
import { TemaProvider } from './components/WhiteMode'; // Ajuste para TemaProvider

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
          <Route path="/consultas" element={<Consultas />} /> 
          <Route path="/login" element={<Login />} />    
          <Route path="/" element={<LandingPage />} />     
          <Route path="/cadastro" element={<Cadastro />} />     
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

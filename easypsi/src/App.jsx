import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import AdminHome from "./views/adm/AdminHome";
import Gerenciamento from "./views/adm/Gerenciamento";
import AdminPerfil from "./views/adm/AdminPerfil";
import AdminPsicologo from "./views/adm/AdminPsicologo";
import Confirmacao from "./views/Confirmacao"
import Accordion from "./components/Accordion";
import { UserProvider } from "./components/Context/UserContext";

function App() {
  return (
    <UserProvider>
    <TemaProvider>
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/pacientes" element={<Pacientes />} />   
          <Route path="/home" element={<Home />} /> 
          <Route path="/agenda" element={<Agenda />} />  
          <Route path="/ajustes" element={<Perfil />} />  
          <Route path="/financeiro" element={<Financeiro />} />  
          <Route path="/consultas" element={<Consultas />} /> 
           
          <Route path="/" element={<LandingPage />} />     
          <Route path="/cadastro" element={<Cadastro />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/confirmacao" element={<Confirmacao />} />     

          <Route path="/home-adm" element={<AdminHome />} /> 
          <Route path="/gerenciamento-adm" element={<Gerenciamento />} /> 
          <Route path="/perfil-adm" element={<AdminPerfil />} /> 
          <Route path="/psicologo-adm" element={<AdminPsicologo/>}/>
          <Route path="/dropdown" element={<Accordion/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
    </TemaProvider>
    </UserProvider>
    
  )
}

export default App;

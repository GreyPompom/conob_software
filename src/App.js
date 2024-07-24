import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Politica from './components/Politica/Politica';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className='App'>
     <React.StrictMode>
      <Routes>
         <Route path="/" element={<Home />} />
       {/* <Route path="/sistemas" element={<Sistemas />} />
        <Route path="/about" element={<About />} />*/}
        <Route path="/politica" element={<Politica />} /> 
        {/* Adicione outras rotas aqui se necessário */}
      </Routes>
   
    </React.StrictMode>
    </div>
  );
}

export default App;

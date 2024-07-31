import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Politica from './components/Politica/Politica';
import Page404 from './components/404/404';
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
        <Route path="*" element={<Page404 />} />
      </Routes>
   
    </React.StrictMode>
    </div>
  );
}

export default App;

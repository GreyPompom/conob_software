import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
function App() {
  return (
    <div className='App'>
    <React.StrictMode>
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
       {/* <Route path="/sistemas" element={<Sistemas />} />
        <Route path="/about" element={<About />} />
        <Route path="/politica" element={<Politica />} /> */}
        {/* Adicione outras rotas aqui se necessário */}
      </Routes>
    </Router>
    </React.StrictMode>
    </div>
  );
}

export default App;

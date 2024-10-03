import React, { useState, useEffect } from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/page-contact';
import PageFrequentlyQuestions from './components/FrequentlyQuestions/page-frequently-questions';
import About from './components/AboutUs/page-aboutUs';
import Softwares from './components/NossosSoftwares/page-nossosSoftwares';
import Politica from './components/Politica/Politica';
import Page404 from './components/404/404';
import NavBar from './components/NavBar/NavBar';
import Loading from './components/Loading/Loading';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule o carregamento da página
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ajuste o tempo de carregamento conforme necessário

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='App'>
     <React.StrictMode>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/entre-contato" element={<ContactUs />} />
         <Route path="/perguntas-frequentes" element={<PageFrequentlyQuestions />} />
        <Route path="/sistemas" element={<Softwares />} />
        <Route path="/sobre-nos" element={<About />}/>
        <Route path="/politica" element={<Politica />} /> 
        <Route path="*" element={<Page404 />} />
      </Routes>
    </React.StrictMode>
    <scrollToTop/>
    </div>
  );
}

export default App;

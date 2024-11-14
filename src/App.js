import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Loading from './components/Loading/Loading';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/footer';

// Lazy loading dos componentes
const Home = lazy(() => import('./components/Home/Home'));
const ContactUs = lazy(() => import('./components/ContactUs/page-contact'));
const PageFrequentlyQuestions = lazy(() => import('./components/FrequentlyQuestions/page-frequently-questions'));
const About = lazy(() => import('./components/AboutUs/page-aboutUs'));
const Softwares = lazy(() => import('./components/Softwares/page-nossosSoftwares'));
const Politica = lazy(() => import('./components/Politica/Politica'));
const Page404 = lazy(() => import('./components/404/404'));


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule o carregamento da página inicial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ajuste o tempo de carregamento conforme necessário

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; 
  }

  return (
    <div className='App'>
     
      
      <Suspense fallback={<Loading />}>
        <NavBar/> 
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entre-contato" element={<ContactUs />} />
          <Route path="/perguntas-frequentes" element={<PageFrequentlyQuestions />} />
          <Route path="/sistemas" element={<Softwares />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      <Footer />  
      </Suspense>
      
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <NavBar />
    <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

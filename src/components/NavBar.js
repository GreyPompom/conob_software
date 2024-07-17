import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/logo/logo_conob_zoom.png';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary backdrop-blur-sm bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="logo-navbar" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link custom-active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-active" href="#">Pagina</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-active" href="#">Sistemas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-active" href="#">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-active" href="#">Politica</a>
              </li>
            </ul>
            <a className="btn btn-primary rounded-pill ms-2" href="#" role="button">
              Entre em contato <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

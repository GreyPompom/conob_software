import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/logo/logo_conob_zoom.png';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg backdrop-blur-sm bg-white fixed-top  shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo-navbar" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className={`nav-link custom-active ${location.pathname === '/' ? 'active' : ''}`}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pagina"
                className={`nav-link custom-active ${location.pathname === '/pagina' ? 'active' : ''}`}
                aria-current={location.pathname === '/pagina' ? 'page' : undefined}
              >
                Pagina
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/sistemas"
                className={`nav-link custom-active ${location.pathname === '/sistemas' ? 'active' : ''}`}
                aria-current={location.pathname === '/sistemas' ? 'page' : undefined}
              >
                Sistemas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/sobre-nos"
                className={`nav-link custom-active ${location.pathname === '/sobre' ? 'active' : ''}`}
                aria-current={location.pathname === '/sobre' ? 'page' : undefined}
              >
                Sobre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/politica"
                className={`nav-link custom-active ${location.pathname === '/politica' ? 'active' : ''}`}
                aria-current={location.pathname === '/politica' ? 'page' : undefined}
              >
                Politica
              </NavLink>
            </li>
            </ul>
            <a className="btn btn-primary rounded-pill ms-2" href="/entre-contato" role="button">
              Entre em contato <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

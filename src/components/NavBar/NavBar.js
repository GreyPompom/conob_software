import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/logo/logo_conob_zoom.png';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  const navRef = useRef(null); // Usar referência para o menu

  useEffect(() => {
    // Função para fechar a navbar quando clicar fora dela
    const handleBodyClick = (e) => {
      if (navRef.current && navRef.current.classList.contains('show') && !navRef.current.contains(e.target)) {
        navRef.current.classList.remove('show');
      }
    };

    // Adiciona um evento de clique ao corpo do documento
    document.addEventListener('click', handleBodyClick);

    return () => {
      // Remove o evento ao desmontar o componente
      document.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg backdrop-blur-sm bg-white fixed-top shadow-sm text-sm-start">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo-navbar" loading='lazy' width={120}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navRef}>
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
                  to="/perguntas-frequentes"
                  className={`nav-link custom-active ${location.pathname === '/perguntas-frequentes' ? 'active' : ''}`}
                  aria-current={location.pathname === '/perguntas-frequentes' ? 'page' : undefined}
                >
                  FAQ
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle custom-active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Página
                </a>
                <ul className="dropdown-menu shadow-sm" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="/pagina1">Página 1</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/pagina2">Página 2</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/pagina3">Página 3</NavLink></li>
                </ul>
              </li> */}
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

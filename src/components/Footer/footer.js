import logo from '../../assets/logo/logo_conob_zoom.png';
import './footer.css';
function footer() {
  return (
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top bg-dark text-white text-start">
        <div class="col mb-3">
        <a className="navbar-brand " href="#">
            <img src={logo} alt="Logo" className="logo-navbar" />
          </a>
          <p class="text-body-secondary">&copy; 2024</p>
        </div>

        <div class="col mb-3">

        </div>

        <div class="col mb-3 ">
          <h5>Empresa</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Estrutura</a></li>
            <li class="nav-item mb-2"><a href="/sobre-nos" class="nav-link p-0 text-white">Sobre nós</a></li>
            <li class="nav-item mb-2"><a href="/sistemas" class="nav-link p-0 text-white">Nossos sistemas</a></li>
            <li class="nav-item mb-2"><a href="/entre-contato" class="nav-link p-0 text-white">Entre em contato</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Trabalhe conosco</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Suporte</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="/perguntas-frequentes" class="nav-link p-0 text-white">Perguntas frequentes</a></li>
            <li class="nav-item mb-2"><a href="/politica#termos-servico" class="nav-link p-0 text-white">Termos de Serviço</a></li>
            <li class="nav-item mb-2"><a href="/politica#politica-privacidade" class="nav-link p-0 text-white">Politica de privacidade</a></li>
          </ul>
        </div>
      </footer>
  );
}

export default footer;
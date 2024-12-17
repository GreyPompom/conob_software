import logo from '../../assets/logo/LOGO - CONOB_Prancheta_zoom-800.png';
import './footer.css';
function footer() {
  return (
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top bg-dark text-white text-start">
        <div class="col mb-3">
        <a className="navbar-brand " href="#">
            <img src={logo} alt="Logo" className="logo-navbar" loading='lazy' width={200}/>
          </a>
          <p class="text-white">&copy; 2015</p>
          <p class="text-white"><a href="https://github.com/GreyPompom">
          <i class="bi bi-code-slash "></i> Made by Hemelink</a></p>
        </div>

        <div class="col mb-3">

        </div>

        <div class="col mb-3 ">
          <h5>Empresa</h5>
          <ul class="nav flex-column">
           <li class="nav-item mb-2"><a href="/home" class="nav-link p-0 text-white">Home</a></li>
            <li class="nav-item mb-2"><a href="/sobre-nos" class="nav-link p-0 text-white">Sobre nós</a></li>
            <li class="nav-item mb-2"><a href="/sistemas" class="nav-link p-0 text-white">Nossos sistemas</a></li>
            <li class="nav-item mb-2"><a href="/entre-contato" class="nav-link p-0 text-white">Entre em contato</a></li>
           
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Suporte</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="/perguntas-frequentes" class="nav-link p-0 text-white">Perguntas frequentes</a></li>
            <li class="nav-item mb-2"><a href="/politica#termos-servico" class="nav-link p-0 text-white">Termos de serviço</a></li>
            <li class="nav-item mb-2"><a href="/politica#politica-privacidade" class="nav-link p-0 text-white">Politica de privacidade</a></li>
          </ul>
        </div>
      </footer>
  );
}

export default footer;

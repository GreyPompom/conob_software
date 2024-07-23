import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import manHero from '../../assets/Hero/hero_img_15_1.png';
import pontinhos from '../../assets/abstratos/pontilhados.png';
import circulo from '../../assets/abstratos/circulo-azul.png';
import manchaazul from '../../assets/abstratos/mancha-azul-abstrata.png';
import triangulo from '../../assets/abstratos/triangulos-branco-azul-pequenos.png';
import setaTorta from '../../assets/abstratos/seta-torta.png';
import './Hero.css';

function Hero() {
    return (

        <div id="myCarousel" class="carousel slide mb-6 position-relative" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="transparent" /></svg>
                    <div class="container ">
                        <div class="carousel-caption text-start">
                            <div class="row flex-lg-row-reverse align-items-center g-5 py-4 ">
                                <div class="position-absolute top-0 end-0 p-3">
                                    <img src={circulo} class="position-absolute circulo" alt="circulo azul" width="300" height="300" loading="lazy"></img>
                                    
                                </div>
                                <div class="position-absolute end-0 p-3 ">
                                    <img src={manchaazul} class="position-absolute mancha" alt="mancha azul" width="320" height="320" loading="lazy"></img>
                                </div>
                                <div class="position-absolute end-0 p-3 ">
                                    <img src={triangulo} class="position-absolute triangulo spin" alt="triangulos 1 azul e 1 branco" width="50" height="50" loading="lazy"></img>
                                </div>
                                <div class="position-absolute end-0 p-3 ">
                                    <img src={triangulo} class="position-absolute triangulo-2 spin" alt="triangulos 1 azul e 1 branco" width="50" height="50" loading="lazy"></img>
                                </div>
                                <div class="position-absolute end-0 p-3 ">
                                    <img src={triangulo} class="position-absolute triangulo-3 spin" alt="triangulos 1 azul e 1 branco" width="50" height="50" loading="lazy"></img>
                                </div>
                                <div class="position-absolute end-0 p-3 ">
                                    <img src={triangulo} class="position-absolute triangulo-4 spin" alt="triangulos 1 azul e 1 branco" width="50" height="50" loading="lazy"></img>
                                </div>
                                <div class="col-10 col-sm-8 col-lg-4 mx-sm-auto">
                                    <img src={pontinhos} class="pontinhos d-block position-absolute" alt="Bootstrap Themes" width="300" height="500" loading="lazy"></img>
                                    <img src={manHero} class="manHero d-block mx-lg-auto img-fluid ml-lg-8 movingX" alt="Bootstrap Themes" width="250" height="500" loading="lazy"></img>
                                </div>
                                <div className="col-lg-8 z-index-2">
                                    <h1 className="title-hero fw-bold text-secondary-bg lh-1 mb-3" fill='var(--bs-tertiary-bg)'>Planos comerciais flexíveis para <span className='text-blue'>impulsionar o seu negócio</span> </h1>
                                    {/* <img src={setaTorta} class="d-block ml-lg-8 mx-lg-auto seta-torta " alt="Bootstrap Themes" width="60" height="60" loading="lazy"></img>
                                    <div className="box-flutuante d-block">Inovação em cada algoritmo, excelência em cada linha.</div> */}
                                    <div className="botao-contact d-grid gap-2 d-md-flex justify-content-md-start ">
                                        <a className="btn btn-primary rounded-pill mt-md-5" href="#" role="button">
                                            Entre em contato <i className="bi bi-arrow-right-short"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="carousel-item">
              <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div class="container">
                <div class="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                  <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div class="container">
                <div class="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
              </div>
            </div> */}
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> */}
        </div>

    )
}
export default Hero;
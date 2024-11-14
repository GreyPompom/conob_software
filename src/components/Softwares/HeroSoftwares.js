import './NossosSoftware.css';
import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { System } from '@testing-library/user-event/dist/cjs/system/index.js';
import { Sistemas } from '../../Dados/SofwaresDescription';


function HeroSoftwares() {
  return (
    <div className="hero-software container ">
      <h1 className="fw-bold text-primary">Conob Software</h1>
      <p className="mb-5">
        Conheça nossos softwares e utilize o nossos <code>produtos</code> para impulsionar a operação e a gestão do seu negócio
      </p>
      <section className='d-md-flex justify-content-md-evenly'>
        {Sistemas.map((sistema, index) => (
          <div class="col-md-3 mb-4 zoom-05">
            <div class="card shadow border-0 h-100 py-4" data-aos="flip-left">
              <div class="card-body">
                <div class="icon-container mb-3">
                  <div class="icon-background">
                    <i class={sistema.logo}></i>
                  </div>
                </div>
                <h5 class="card-title">{ sistema.name}</h5>
                <p class="card-text">{sistema.description}</p>
              </div>
            </div>
          </div>

        ))}
      </section >

      {/* Botão Saiba Mais */}
      < div className="botao-contact d-grid gap-2 d-md-flex justify-content-md-center margin-auto" >
        <a className="btn btn-primary rounded-pill mt-md-5" href="/entre-contato" role="button">
          Entre em contato
          <i className="bi bi-arrow-right-short"></i>
        </a>
      </div >


    </div >
  );
}

export default HeroSoftwares;
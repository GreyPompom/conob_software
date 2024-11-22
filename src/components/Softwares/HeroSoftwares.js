import './NossosSoftware.css';
import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { System } from '@testing-library/user-event/dist/cjs/system/index.js';
import { Sistemas } from '../../Dados/SofwaresDescription';


function HeroSoftwares() {
  return (
    <div className="hero-software container p-5">
      <h1 className="fw-bold text-primary">Conob Software</h1>
      <p className="mb-5">
        Conheça nossos softwares e utilize o nossos <code>produtos</code> para impulsionar a operação e a gestão do seu negócio
      </p>
      <section className='d-md-flex justify-content-md-evenly '>
        {Sistemas.map((sistema, index) => (
          <div class="col-md-3 mb-4 zoom-05">
            <div class="card shadow border-0 h-100 py-4" data-aos="flip-left">
              <div class="card-body">
                <h5 class="card-title text-primary">{ sistema.name}</h5>
                <p class="card-text">{sistema.description}</p>
                <a href={`#${sistema.idclass}`} class=" text-secondary mt-3">Ver detalhes</a>
              </div>
            </div>
          </div>

        ))}
      </section >
    </div >
  );
}

export default HeroSoftwares;
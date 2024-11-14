import "./NossosSoftwares";
import SistemModule from "./Softwares";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSoftwares from "./HeroSoftwares";

import { Sistemas } from '../../Dados/SofwaresDescription';

function PageSoftwares() {
  return (
    <section className="page text-center p-5" data-aos="fade-up">
      <HeroSoftwares />
      {Sistemas.map((sistema, index) => (
        <SistemModule 
          key={index} 
          systems={sistema.systems} 
          name={sistema.name} 
          description={sistema.description} 
        />
      ))}
    </section>
  );
}

export default PageSoftwares;

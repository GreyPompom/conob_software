import "./NossosSoftwares";
import SistemModule from "./Softwares";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSoftwares from "./HeroSoftwares";
import BoxContactUs from "../Boxes/Box-ContatUs";
import { Sistemas } from '../../Dados/SofwaresDescription';

function PageSoftwares() {
  return (
    <section className="page text-center " data-aos="fade-up">
      <div className="p-md-5">
        <HeroSoftwares />
      
      {Sistemas.map((sistema, index) => (
        <><SistemModule
          key={index}
          systems={sistema.systems}
          name={sistema.name}
          description={sistema.description}
          id={sistema.idclass} /></>
      ))}
      </div>
      
      <BoxContactUs />
    </section>
  );
}

export default PageSoftwares;

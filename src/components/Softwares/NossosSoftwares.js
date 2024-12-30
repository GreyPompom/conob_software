import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './NossosSoftware.css'

// Dados dos sistemas recebidos como parâmetro
const NossosSoftwares = ({ sistemas }) => {
  // Filtrando apenas os sistemas com 'home: true'
  const [activeSystem, setActiveSystem] = useState(
    sistemas[0].systems.filter(system => system.home)[0] || null
  );

  return (
    <div className="nossos-softwares gradient-blue py-5 " data-aos="fade-up" >
      <div class="container text-center py-5 d-grid  rounded-pill" >
        <h1 class="">Nossos <span class="gradient-highlight">Softwares</span></h1>
        <div class="software-section row bg-white rounded shadow overflow-hidden mt-4 mx-1 mx-lg-5">
          <div class="menu col-lg-3 bg-light p-3 border-end">
            {sistemas.map((sistema) =>
              sistema.systems
                .filter((system) => system.home) // Filtra sistemas com home: true
                .map((system) => (
                  <button
                    key={system.idclass}
                    className={`menu-item btn btn-outline-primary btn-primary mb-2 w-100  ${activeSystem && activeSystem.idclass === system.idclass
                      ? "active"
                      : ""
                      }`}
                    onClick={() => setActiveSystem(system)}
                  >
                    {system.title}
                  </button>
                ))
            )}
            <a href="/sistemas" className=" btn btn-lithg mb-2 w-100  rounded-pill text-primary">
              Ver todos os softwares
            </a>
          </div>
          {activeSystem && (

            <div class="content col-lg-12 d-flex flex-wrap-reverse p-4 text-start">
              <div className="">
                <h2 className="">{activeSystem.title}</h2>
                <p>
                  {activeSystem.definitions.map((definition, idx) => (
                    <li key={idx} className="d-flex align-items-start mb-2 text-start">
                      <span className="text-primary me-2">&#10003;</span>
                      <p className="mb-0">{definition}</p>
                    </li>
                  ))}
                </p>
                <a href="entre-contato" className="btn btn-primary mt-3" target="_blank" >Solicite uma demonstração</a>
              </div>
              <div  className=" w-150 my-2">
                <img className="rounded" src={activeSystem.image} width={200} />
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NossosSoftwares;

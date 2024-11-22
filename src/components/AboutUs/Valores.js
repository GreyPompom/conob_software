import manchaazul from '../../assets/abstratos/mancha-azul-abstrata.png';
import image_faq from '../../assets/FAQs-rafiki.png';
import triangulo from '../../assets/abstratos/triangulos-branco-azul-pequenos.png';
import React from "react";

const MissionVisionValues = () => {
  return (
    <div className='sobre-nos gradient-blue my-5' data-aos="fade-righ">
       <div className=" container py-5 ">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">Nossa Empresa</h2>
        <p className="">
          Conheça nossa missão, visão e valores que guiam nossas ações.
        </p>
      </div>

      <div className="row g-4 my-5">
        {/* Missão */}
        <div className="col-md-4 zoom-05">
          <div className="card border-0 shadow h-100 text-center " data-aos="flip-left">
            <div className="card-body">
              <div className="mb-3">
                <i className="bi bi-flag text-primary fs-1"></i>
              </div>
              <h5 className="card-title fw-bold">Missão</h5>
              <p className="card-text text-muted">
                Fornecer soluções inovadoras que impactem positivamente a vida
                das pessoas e promovam um futuro sustentável.
              </p>
            </div>
          </div>
        </div>

        {/* Visão */}
        <div className="col-md-4 zoom-05">
          <div className="card border-0 shadow h-100 text-center "data-aos="flip-left">
            <div className="card-body">
              <div className="mb-3">
                <i className="bi bi-eye text-primary fs-1"></i>
              </div>
              <h5 className="card-title fw-bold">Visão</h5>
              <p className="card-text text-muted">
                Ser referência no mercado global, reconhecida por nossa
                excelência e impacto positivo no mundo.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="col-md-4 zoom-05">
          <div className="card border-0 shadow h-100 text-center " data-aos="flip-left">
            <div className="card-body">
              <div className="mb-3">
                <i className="bi bi-heart text-primary fs-1"></i>
              </div>
              <h5 className="card-title fw-bold">Valores</h5>
              <p className="card-text text-muted">
                Ética, transparência, inovação e compromisso com a sociedade e o
                meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default MissionVisionValues;

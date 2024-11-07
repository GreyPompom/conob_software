import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SistemModule = ({ systems }) => {
  return (
    <div className="container py-5">
      {systems.map((system, index) => (
        <div key={index}  className={`software-details-box row align-items-start  ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
          <div className="col-md-6">
            <img
              src={system.image}
              alt="Imagem do sistema"
              className="img-fluid rounded-circle"
              style={{ width: '100%', maxWidth: '300px' }}
            />
          </div>
          <div className="col-md-6 text-start">
            <h6 className="text-uppercase text-secondary">Módulo</h6>
            <h2 className="text-primary">{system.title}</h2>
            <ul className="list-unstyled">
              {system.definitions.map((definition, idx) => (
                <li key={idx} className="d-flex align-items-start mb-2 text-start">
                  <span className="text-warning me-2">&#10003;</span>
                  <p className="mb-0">{definition}</p>
                </li>
              ))}
            </ul>
            <button className="btn btn-primary mt-3">Solicite uma demonstração</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SistemModule;

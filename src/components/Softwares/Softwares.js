import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { System } from '@testing-library/user-event/dist/cjs/system/index.js';

const SistemModule = ({ name, systems, description, id}) => {

  const [itemsToShow, setItemsToShow] = useState(1); // Estado para controlar quantos itens mostrar

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 768 ? 3 : 1); // Define 3 itens para desktop e 1 para mobile
    };

    handleResize(); // Configura o número de itens ao montar
    window.addEventListener('resize', handleResize); // Adiciona o event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Remove o event listener ao desmontar
    };
  }, []);

  const chunkArray = (array, size) => {
    return array.reduce((acc, _, index) => {
      if (index % size === 0) acc.push(array.slice(index, index + size));
      return acc;
    }, []);
  };

  const chunkedModules = chunkArray(systems, itemsToShow);
  return (
    <div className="softwares-box container py-5" id={id}>
       <h1 className="fw-bold text-primary">{name}</h1>
      <p className="mb-5">
      {description}
      </p>
      <Carousel indicators={true} interval={4000} controls={true} className="mb-4" data-bs-pause="hover" data-bs-wrap="true">
      {chunkedModules.map((chunk, idx) => (
        <Carousel.Item key={idx}>
          <div className="d-flex justify-content-center flex-wrap text-secondary">
            {chunk.map((module, index) => (
              <div key={index} className="card h-100 border-0 shadow m-3" style={{ borderRadius: '15px', width: '300px' }}>
                <img
                  src={module.image}
                  alt={module.title}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-secondary">{module.title}</h5>
                  <small>{module.system}</small>
                  <br/>
                  <a href={`#${module.idclass}`} className="btn btn-primary mt-3">Ver detalhes</a>
                  </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    <div className='px-sm-5'>
      {systems.map((system, index) => (
        <div key={index}  className={`software-details-box row align-items-start py-5 p-3 px-sm-0 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} id={system.idclass}>
          <div className="col-md-6" >
            <img
              src={system.image}
              alt="Imagem do sistema"
              className="img-fluid rounded-circle"
              style={{ width: '100%', maxWidth: '300px' }}
              loading='lazy'
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
            <a href="/entre-contato" role="button" target="_blank" ><button className="btn btn-primary mt-3">Solicite uma demonstração</button></a>
          </div>
        </div>
      ))}
       </div>
    </div>
  );
};

export default SistemModule;

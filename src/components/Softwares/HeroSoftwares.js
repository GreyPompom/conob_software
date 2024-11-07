import './NossosSoftware.css';
import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { System } from '@testing-library/user-event/dist/cjs/system/index.js';


function HeroSoftwares() {
  const modules = [
    {
      title: 'Produção - Área Técnica',
      image: require('../../assets/Systems/image-default-card.png'),
      system: 'MTR',
    },
    {
      title: 'Laboratórios de Apoio',
      image: require('../../assets/Systems/image-default-card.png'),
      system: 'Conob',
    },
    {
      title: 'Faturamento',
      image: require('../../assets/Systems/image-default-card.png'),
      system: 'MTR',
    },
    {
      title: 'Logística',
      image: require('../../assets/Systems/image-default-card.png'),
      system: 'MTR',
    },
    {
      title: 'Suporte Técnico',
      image: require('../../assets/Systems/image-default-card.png'),
      system: 'MTR',
    },
    {
      title: 'Gestão de Qualidade',
      image: require('../../assets/Systems/image-default-card.png'),
      system: 'MTR',
    },
  ];

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

  const chunkedModules = chunkArray(modules, itemsToShow);
  return (

    
    <div className="hero-software container ">
      <h1 className="fw-bold text-primary">Conob Software</h1>
      <p className="mb-5">
        Utilize o nossos produtos para impulsionar a operação e a gestão do seu negócio.
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
                  style={{ borderRadius: '15px 15px 0 0', height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-secondary">{module.title}</h5>
                  <small>{module.system}</small>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>

      {/* Botão Saiba Mais */}
      <div className="botao-contact d-grid gap-2 d-md-flex justify-content-md-center margin-auto">
        <a className="btn btn-primary rounded-pill mt-md-5" href="/entre-contato" role="button">
          Entre em contato 
          <i className="bi bi-arrow-right-short"></i>
        </a>
      </div>


    </div>
  );
}

export default HeroSoftwares;
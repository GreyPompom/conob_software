import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TimeLine.css';
import defaultImage from '../../assets/default-image.png'; // Substitua pelo caminho real da imagem
import logo from '../../assets/logo/LOGO - CONOB_Prancheta_zoom-800.png';

import { timelineData } from '../../Dados/SobreNos';


const Timeline = () => {
  const [lineHeight, setLineHeight] = useState(0);

  

  // Função para controlar a animação da linha conforme o scroll
  const handleScroll = () => {
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const percentageScrolled = (scrollTop / maxHeight) * 100;
    setLineHeight(Math.min(percentageScrolled+20, 100));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container my-5 p-5 " data-aos="zoom-in-up">
      <h1 className="text-center text-primary d-grid justify-content-center mb-5">
        Conheça a história 
      </h1>
      <div className="row justify-content-center position-relative">
        {/* Linha vertical animada */}
        <div className="timeline-line" style={{ height: `${lineHeight}%` }} ></div>

        <div className="col-md-8">
          <div className="timeline">
            {/* Itera sobre os dados da timeline e gera os itens dinamicamente */}
            {timelineData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="row" >
                  {/* Alterna a ordem das colunas dependendo da posição para criar o efeito de zig-zag */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="col-md-6 order-md-1 order-2">
                        <div className="content d-grid text-end">
                          <h3 className=' '>{item.year}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className="col-md-6 order-md-2 order-1">
                        <div className="image-container" >
                          <img src={item.imgSrc} alt={item.year} className="img-fluid rounded" loading='lazy'/>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-md-6">
                        <div className="image-container">
                          <img src={item.imgSrc} alt={item.year} className="img-fluid rounded" loading='lazy'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="content d-grid text-start">
                          <h3 className=''>{item.year}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

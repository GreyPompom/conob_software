import React, { useState, useEffect } from 'react';
import './ThreePoints.css';
import { Carousel } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import imagem_lampada from '../../assets/abstratos/lampada_engrenagem.png';
import imagem_ondinha from '../../assets/abstratos/ondinha.png';
import imagem_conob_web from '../../assets/abstratos/conob_web.png';
import 'aos/dist/aos.css';
import points, { title, subtitle } from '../../Dados/ThereePoints';

const PointCard = ({ number, title, description }) => (
    <div className="col-lg-3 position-relative py-3 py-md-5 "data-aos="zoom-in-up">
        <h1 className="numero">{number}</h1>
        <div className="box-blue" >
            <h2 className="fw-semibold mt-3">{title}</h2>
            <p className='text-light'>{description}</p>
           
        </div>
    </div>
);

function ThreePoints() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSelect(index === 2 ? 0 : index + 1),
        onSwipedRight: () => handleSelect(index === 0 ? 2 : index - 1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

   
    return (
        <div className="container marketing">
             <div class="position-absolute start-0 p-3 ">
                <img src={imagem_ondinha} class="position-absolute ondinha spin" alt="triangulos 1 azul e 1 branco" width="70" height="70" loading="lazy"></img>
            </div>
            <div className="text-center text-secondary">
                <div className="container py-3">
                    <h1 className="sis text-primary">{title}</h1>
                    <p className="col-lg-12 mx-auto p-2 p-lg-0 lead ">
                       {subtitle}
                    </p>
                </div>
            </div>
            <div class="position-absolute end-0 p-3 ">
                <img src={imagem_lampada} class="position-absolute lampada " alt="triangulos 1 azul e 1 branco" width="70" height="70" loading="lazy"></img>
            </div>
            <div class="position-absolute start-0 p-3 ">
                <img src={imagem_conob_web} class="position-absolute ondinha spin" alt="triangulos 1 azul e 1 branco" width="70" height="70" loading="lazy"></img>
            </div>

            {/* Desktop View */}
            <div className="row justify-content-center gap-5 d-none d-lg-flex">
                {points.map(point => (
                    <PointCard key={point.number} {...point} />
                ))}
            </div>

            {/* Mobile View */}
            <div class="carousel-mobile" {...handlers}>
                <Carousel activeIndex={index} onSelect={handleSelect} controls={true} indicators={true} className="d-lg-none">
                    {points.map(point => (
                        <Carousel.Item key={point.number}>
                            <div className="col-md-12 position-relative py-3">
                                <PointCard {...point} />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default ThreePoints;

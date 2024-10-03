import React, { useState, useEffect } from 'react';
import './ThreePoints.css';
import { Carousel } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function ThreePoints() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
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
            <div className="text-center text-secondary ">
                <div className="container py-3">
                    <h1 className="sis text-primary">Por que a trabalhar com a Conob</h1>
                    <p className="col-lg-12 mx-auto">
                    Na Conob, cada projeto é desenvolvido com foco no cliente. Oferecemos um atendimento especializado que respeita as necessidades únicas de cada parceiro, criando soluções sob medida para garantir resultados eficientes.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center gap-5 d-none d-lg-flex">
                <div className="col-lg-3 position-relative py-3">
                    <h1 className="numero">01</h1>
                    <div className="box-blue " data-aos="fade-up">
                        <h2 className="fw-normal mt-3"> Atendimento</h2>
                        <p>Na Conob, cada cliente é único. Valorizamos suas necessidades e oferecemos soluções sob medida para alcançar os melhores resultados.</p>
                        <p><a className="btn btn-secondary" href="#">View details</a></p>
                    </div>
                </div>
                <div className="col-lg-3 position-relative py-3">
                    <h1 className="numero">02</h1>
                    <div className="box-blue" data-aos="fade-up">
                        <h2 className="fw-normal mt-3">Customização</h2>
                        <p>Nossos softwares são adaptados para atender às necessidades específicas de cada cliente, garantindo que cada projeto seja único.</p>
                        <p><a className="btn btn-secondary" href="#">View details</a></p>
                    </div>
                </div>
                <div className="col-lg-3 position-relative py-3">
                    <h1 className="numero">03</h1>
                    <div className="box-blue" data-aos="fade-up">
                        <h2 className="fw-normal mt-3">Inovação</h2>
                        <p>Estamos sempre evoluindo nossas ferramentas e tecnologias para oferecer soluções cada vez mais modernas e eficientes.</p>
                        <p><a className="btn btn-secondary" href="#">View details</a></p>
                    </div>
                </div>
            </div>

            <div {...handlers}>
                <Carousel activeIndex={index} onSelect={handleSelect} className="d-lg-none">
                    <Carousel.Item>
                        <div className="col-md-12 position-relative py-3">
                            <h1 className="numero">01</h1>
                            <div className="box-blue">
                                <h2 className="fw-normal mt-3">Atendimento</h2>
                                <p>Na Conob, cada cliente é único. Valorizamos suas necessidades e oferecemos soluções sob medida para alcançar os melhores resultados.</p>
                                <p><a className="btn btn-secondary" href="#">View details</a></p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="col-md-12 position-relative py-3">
                            <h1 className="numero">02</h1>
                            <div className="box-blue">
                                <h2 className="fw-normal mt-3">Customização</h2>
                                <p>Nossos softwares são adaptados para atender às necessidades específicas de cada cliente, garantindo que cada projeto seja único.</p>
                                <p><a className="btn btn-secondary" href="#">View details</a></p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="col-md-12 position-relative py-3">
                            <h1 className="numero">03</h1>
                            <div className="box-blue">
                                <h2 className="fw-normal mt-3">Inovação</h2>
                                <p>Estamos sempre evoluindo nossas ferramentas e tecnologias para oferecer soluções cada vez mais modernas e eficientes.</p>
                                <p><a className="btn btn-secondary" href="#">View details</a></p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default ThreePoints;

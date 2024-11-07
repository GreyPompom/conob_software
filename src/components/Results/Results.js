import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import serverImage from '../../assets/Server-amico.png';
import './Results.css'; 

// Função para animar a contagem
const animateValue = (start, end, duration, setValue) => {
    const startTime = performance.now();
    const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setValue(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };
    requestAnimationFrame(step);
};

// Componente para exibir cada estatística
const StatCard = ({ value, unit, label, sinal }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            animateValue(0, value, 2000, setDisplayValue);
        }
    }, [inView, value]);

    return (
        <div className="card-body flex-grow-1 " ref={ref}>
            <h1 className='text-primary '> <span className="small fs-5">{sinal}</span>{displayValue} <span className="small fs-5">{unit}</span></h1>
            <p className='f'>{label}</p>
        </div>
    );
};

// Componente principal da seção de resultados
const ResultsSection = () => {
    return (
        <div className="results-section text-white py-5 gradient-blue text-start"  >
            <div className="container py-5">
                <div className="row " data-aos="zoom-in">
                    {/* Imagem */}
                    <div className="col-md-4 mb-4 mb-md-0 image-animation">
                        <img src={serverImage} alt="Technology Illustration" className="img-fluid" />
                    </div>

                    {/* Texto e Estatísticas */}
                    <div className="col-md-8 text-start">
                        <h1 className="title mb-4 ">Resultados que Geram Confiança</h1>
                        <p className="pos-title mb-5 ">
                        Desenvolvemos soluções robustas e seguras que fortaleceram a confiança de nossos clientes, impulsionando a eficiência operacional e a satisfação com resultados consistentes e de alta qualidade.
                        </p>
                        <div className="row  row-cards text-primary">
                            <div class="card-result col-sm-9">
                                <div className="card shadow border-0 h-100 d-flex flex-column p-2 col-sm-12 ">
                                    <StatCard value={1000} unit="k" label="Documentos Eletronicamente Emitidos" sinal="+" />
                                </div>
                            </div>
                            <div class="card-result col-sm-9">
                                <div className="card shadow border-0 h-100 d-flex flex-column p-2 col-sm-12 ">
                                    <StatCard value={500} unit="k " label="Usuários Impactados" sinal="+" />
                                </div>
                            </div>
                            <div class="card-result col-sm-9">
                                <div className="card shadow border-0 h-100 d-flex flex-column p-2 col-sm-12 ">
                                    <StatCard value={500} unit="" label="Usuários Diretos" sinal="+" />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsSection;

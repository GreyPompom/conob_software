import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Results.css'; // Assuma que você personalizou os estilos aqui

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
const StatCard = ({ value, unit, label }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            animateValue(0, value, 2000, setDisplayValue);
        }
    }, [inView, value]);

    return (
        <div className="card-body flex-grow-1" ref={ref}>
            <h1 className='text-primary '>{displayValue} <span className="small fs-5">{unit}</span></h1>
            <p className='f'>{label}</p>
        </div>
    );
};

// Componente principal da seção de resultados
const ResultsSection = () => {
    return (
        <div className="results-section text-white py-5 gradient-blue text-start">
            <div className="container py-5">
                <div className="row ">
                    {/* Imagem */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <img src="your-image-url.png" alt="Technology Illustration" className="img-fluid" />
                    </div>

                    {/* Texto e Estatísticas */}
                    <div className="col-md-8 text-start">
                    <h1 className="title mb-4 ">Resultados que Geram Confiança</h1>
                    <p className="pos-title mb-5 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis efficitur nisi.
                        </p>
                        <div className="row  row-cards text-primary">
                            <div class="card-result col-sm-9">
                                <div className="card shadow border-0 h-100 d-flex flex-column p-2 col-sm-12">
                                    <StatCard value={70} unit="%" label="Projetos de sucesso" />
                                </div>
                            </div>
                            <div class="card-result col-sm-9">
                                <div className="card shadow border-0 h-100 d-flex flex-column p-2 col-sm-12">
                                    <StatCard value={50} unit="k" label="Clientes atendidos" />
                                </div>
                            </div>
                            <div class="card-result col-sm-9">
                                <div className="card shadow border-0 h-100 d-flex flex-column p-2 col-sm-12">
                                    <StatCard value={63} unit="k" label="Usuários ativos" />
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

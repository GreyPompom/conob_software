import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import imageSobre from '../../assets/logo/logo_conob_zoom.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


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

function SobreNos() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='sobre-nos gradient-blue p-5 ' data-aos="fade-righ" >
            <section className='container'>
                <div className="row align-items-center mb-5 0">
                    <div className="col-md-6">
                        <h1 className="partner-title text-primary">
                            Seu parceiro confiável para todos serviços
                        </h1>
                        <p className="partner-subtitle mt-3">
                            Conob está no mercado desde 2010, entregando serviço de qualidade e confiança para nossos clientes. Nossa equipe é formada por profissionais altamente qualificados e comprometidos com a excelência.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <div className="image-wrapper">
                            <img
                                src={imageSobre}
                                className="img-fluid office-img"
                            />
                        </div>
                    </div>
                </div>

                <div className="row  row-cards text-primary">
                    <div class="col-md-3 col-sm-12 py-3" data-aos="flip-left">
                        <div className="card shadow border-0 h-100 d-flex flex-column p-2 col-sm-12 ">
                            <StatCard value={1000} unit="k" label="Documentos Eletronicamente Emitidos" sinal="+" />
                        </div>
                    </div>
                    <div class=" col-md-3 col-sm-12 py-3" data-aos="flip-left">
                        <div className="card shadow border-0 h-100 d-flex flex-column p-2 col-sm-12 ">
                            <StatCard value={500} unit="k " label="Usuários Impactados" sinal="+" />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 py-3" data-aos="flip-left">
                        <div className="card shadow border-0 h-100 d-flex flex-column p-2 col-sm-12 ">
                            <StatCard value={500} unit="" label="Usuários Diretos" sinal="+" />

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default SobreNos;
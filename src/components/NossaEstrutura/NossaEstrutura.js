import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NossaEstrutura.css';
import logo from '../../assets/logo/logo_conob_zoom.png';
import manchaazul from '../../assets/abstratos/mancha-azul-abstrata.png';
import  cardsData, {title ,subtitle } from '../../Dados/Estrutura';


const Card = ({ icon, title, text, isImage, imgSrc, link }) => (
    <div className="col-md-3 mb-4 zoom-05">
        <div className="card shadow border-0 h-100 py-4" data-aos="flip-left">
            <div className="card-body">
                <div className="icon-container mb-3">
                    <div className="icon-background">
                        {isImage ? (
                            <img src={imgSrc} alt={title} className="img-fluid icon-struct" width={200} height={200} loading="lazy" />
                        ) : (
                            <i className={`bi ${icon} icon-struct`}></i>
                        )}
                    </div>
                </div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                {link && (
                    <a href={link} className="btn btn-primary mt-3">
                        Sobre a Conob
                    </a>
                )}
            </div>
        </div>
    </div>
);

function NossaEstrutura() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="we-struct text-center ">
             <div class="position-absolute p-3 ">
                <img src={manchaazul} class="position-absolute mancha" alt="mancha azul" width="320" height="320" loading="lazy"></img>
            </div>
            <div className='container py-5'>
                <h1 className="text-primary" id="estrutura">
                   {title}
                </h1>
                <p className="lead">
                   {subtitle}
                </p>

                <div className="row justify-content-center mt-5">
                    {cardsData.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default NossaEstrutura;

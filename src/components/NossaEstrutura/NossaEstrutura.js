import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NossaEstrutura.css';
import logo from '../../assets/logo/logo_conob_zoom.png';
import manchaazul from '../../assets/abstratos/mancha-azul-abstrata.png';

function NossaEstrutura() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div class="we-struct container text-center py-5">
            <h1 class=" text-primary" >Nossa estrutura</h1>
            <p class="lead" >Conheça nossa estrutura dedicada a oferecer o melhor atendimento e suporte para nossos clientes.</p>
            <div class="position-absolute p-3 ">
                <img src={manchaazul} class="position-absolute mancha" alt="mancha azul" width="320" height="320" loading="lazy"></img>
            </div>
            <div class="row-cards row justify-content-center mt-5">
                <div class="col-md-3 mb-4 zoom-05">
                    <div class="card shadow border-0 h-100 py-4 " data-aos="flip-left">
                        <div class="card-body" >
                            <div class="icon-container mb-3">
                                <div class="icon-background">
                                    <i class="bi bi-mortarboard icon-struct"></i>
                                </div>
                            </div>
                            <h5 class="card-title">Equipe de Desenvolvimento</h5>
                            <p class="card-text">Contamos com uma equipe de programadores experientes e qualificados, prontos para enfrentar qualquer desafio que apareça.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4 zoom-05">
                    <div class="card shadow border-0 h-100 py-4" data-aos="flip-left">
                        <div class="card-body">
                            <div class="icon-container mb-3">
                                <div class="icon-background">
                                    <i class="bi  bi-headset icon-struct"></i>
                                </div>
                            </div>
                            <h5 class="card-title">Suporte</h5>
                            <p class="card-text">Contamos com uma equipe de suporte dedicada e comprometida em oferecer assistência excepcional aos nossos clientes.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4 zoom-05">
                    <div class="card shadow border-0 h-100 py-4" data-aos="flip-left">
                        <div class="card-body">
                            <div class="icon-container mb-3">
                                <div class="icon-background">
                                    <i class="bi bi-hdd-stack icon-struct"></i>
                                </div>
                            </div>
                            <h5 class="card-title">BLA BLA BLA BLA BALALA</h5>
                            <p class="card-text">Our membership management software provides full automation of membership renewals and payments.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4 zoom-05">
                    <div class="card shadow border-0 h-100 py-4" data-aos="flip-left">
                        <div class="card-body">
                            <div class="icon-container mb-3">
                                <div class="icon-background">
                                    <img src={logo} alt="" class="img-fluid icon-struct" width={200} height={200} loading='lazy'/>
                                </div>
                            </div>
                            <h5 class="card-title">Sobre nós</h5>
                            <p class="card-text">Saiba mais sobre nossa empresa e nossa missão.</p>
                            <a href="/sobre-nos" class="btn btn-primary mt-3">Clique aqui</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
{/* // <div class="container px-4 py-5" id="featured-3">
        //     <h2 class="pb-2 border-bottom">Columns with icons</h2>
        //     <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
        //         <div class="feature col">
        //             <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        //                 <svg class="bi" width="1em" height="1em"></svg>
        //             </div>
        //             <h3 class="fs-2 text-body-emphasis">Featured title</h3>
        //             <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        //             <a href="#" class="icon-link">
        //                 Call to action
        //                 <svg class="bi"></svg>
        //             </a>
        //         </div>
        //         <div class="feature col">
        //             <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        //                 <svg class="bi" width="1em" height="1em"></svg>
        //             </div>
        //             <h3 class="fs-2 text-body-emphasis">Featured title</h3>
        //             <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        //             <a href="#" class="icon-link">
        //                 Call to action
        //                 <svg class="bi"></svg>
        //             </a>
        //         </div>
        //         <div class="feature col">
        //             <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        //                 <svg class="bi" width="1em" height="1em"></svg>
        //             </div>
        //             <h3 class="fs-2 text-body-emphasis">Featured title</h3>
        //             <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        //             <a href="#" class="icon-link">
        //                 Call to action
        //                 <svg class="bi"></svg>
        //             </a>
        //         </div>
        //         <div class="feature col">
        //             <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        //                 <svg class="bi" width="1em" height="1em"></svg>
        //             </div>
        //             <h3 class="fs-2 text-body-emphasis">Featured title</h3>
        //             <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        //             <a href="#" class="icon-link">
        //                 Call to action
        //                 <svg class="bi"></svg>
        //             </a>
        //         </div>
        //     </div>
        // </div> */}



export default NossaEstrutura;
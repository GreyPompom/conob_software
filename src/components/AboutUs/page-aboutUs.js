import ContructionImage from '../../assets/Contruction-amico.png';
import './AboutUs.css'; // External CSS for custom styles
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SobreNos from './SobreNos';
import Timeline from '../TimeLine/TimeLine'; 
import Valores from './Valores';
import BoxContactUs from '../Boxes/Box-ContatUs';

function PageAbouUs() {
    // Componente para exibir cada estatística

    return (


        <section className="page sobre-nos-section py-5"  data-aos="fade-up">
            <div className="container">
                <div className="text-center mb-5 ">
                    <h1 className=" sis text-primary ">Sobre nós</h1>
                    <p className="">
                    A Conob nasceu da transição de CLF para PJ, incentivada por um grande parceiro para expandir e aprimorar a gestão do departamento de TI. Em parceria com uma associação, desenvolvemos o projeto MTR, uma aplicação de controle de transporte de resíduos que opera em várias unidades da federação e no governo federal. Essa parceria nos permitiu explorar o setor de resíduos e impulsionar a criação de um ERP especializado na destinação de resíduos.
                    </p>
                </div>
                
            </div>
            <SobreNos/>
            <Timeline/>
            <Valores/>
            <BoxContactUs/>

        </section>


    )
}

export default PageAbouUs;
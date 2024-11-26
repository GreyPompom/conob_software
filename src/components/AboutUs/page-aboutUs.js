import ContructionImage from '../../assets/Contruction-amico.png';
import './AboutUs.css'; // External CSS for custom styles
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SobreNos from './SobreNos';
import Timeline from '../TimeLine/TimeLine'; 
import Valores from './Valores';
import BoxContactUs from '../Boxes/Box-ContatUs';

import { title, subtitle } from '../../Dados/SobreNos';

function PageAbouUs() {
    // Componente para exibir cada estatística

    return (


        <section className="page sobre-nos-section py-5"  data-aos="fade-up">
            <div className="container">
                <div className="text-center mb-5 ">
                    <h1 className=" sis text-primary ">{title}</h1>
                    <p className="">
                   {subtitle}
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
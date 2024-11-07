import manchaazul from '../../assets/abstratos/mancha-azul-abstrata.png';
import image_faq from '../../assets/FAQs-rafiki.png';
import triangulo from '../../assets/abstratos/triangulos-branco-azul-pequenos.png';
import './Box.css';

function BoxAboutUs() {
    const values = [
        {
            title: "Missão",
            text: "Desenvolver soluções tecnológicas inovadoras e eficientes, que atendam às necessidades de nossos clientes e contribuam para o crescimento de seus negócios."
        },
        {
            title: "Visão",
            text: "Ser reconhecida como uma empresa referência em tecnologia da informação, oferecendo soluções inovadoras e eficientes que contribuam para o crescimento e sucesso de nossos clientes."
        },
        {
            title: "Valores",
            text: "Comprometimento, ética, transparência, inovação, qualidade, respeito e responsabilidade social."
        }
    ];

    return (
        <div className="box-about-us blue-opaco py-5">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-lg-12">
                        <h1 className="title text-primary text-start">
                            Seguimos princípios. <br />
                            Nossa missão e visão
                        </h1>

                        {values.map((value, index) => (
                            <div key={index} className="mb-4">
                                <div id='circulo'>
                                    <h2>{value.title}</h2>
                                </div>
                                <p>{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="position-absolute end-0 p-3">
                    <img src={triangulo} className="position-absolute triangulo spin" alt="triangulos azul e branco" width="50" height="50" loading="lazy" />
                </div>
                <div className="position-absolute end-0 p-3">
                    <img src={triangulo} className="position-absolute triangulo-2 spin" alt="triangulos azul e branco" width="50" height="50" loading="lazy" />
                </div>
            </div>
        </div>
    );
}

export default BoxAboutUs;

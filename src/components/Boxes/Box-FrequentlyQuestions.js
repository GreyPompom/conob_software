import manchaazul from '../../assets/abstratos/mancha-azul-abstrata.png';
import image_faq from '../../assets/FAQs-rafiki.png';
import triangulo from '../../assets/abstratos/triangulos-branco-azul-pequenos.png';
import './Box.css';
function BoxFrequentlyQuestions() {
    return (
        <div class="box-frequently-questions gradient-blue py-5 ps-sm-5 pe-sm-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 ">
                        <h1 class="title text-primary text-start">Acesse nosso portal de perguntas frequentes!</h1>
                        <div className="botao-contact d-grid gap-2 d-md-flex justify-content-md-start ">
                            <a className="btn btn-primary rounded-pill mt-md-5" href="/perguntas-frequentes" role="button">
                                Acesse nosso FAQ<i className="bi bi-arrow-right-short"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 ">
                        <img src={image_faq} width={300} height={300} loading='lazy'/>
                    </div>
                    <div class="position-absolute center p-3 ">
                        <img src={manchaazul} class="position-absolute mancha" alt="mancha azul" width="320" height="320" loading="lazy"></img>
                    </div>
                    <div class="position-absolute end-0 p-3 ">
                        <img src={triangulo} class="position-absolute triangulo spin" alt="triangulos 1 azul e 1 branco" width="50" height="50" loading="lazy"></img>
                    </div>
                    <div class="position-absolute end-0 p-3 ">
                        <img src={triangulo} class="position-absolute triangulo-2 spin" alt="triangulos 1 azul e 1 branco" width="50" height="50" loading="lazy"></img>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BoxFrequentlyQuestions;
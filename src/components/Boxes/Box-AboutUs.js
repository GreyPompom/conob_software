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
            <div className="container py-5" >
      <div className="text-center mb-5">
        <h2 className="text-primary">Seguimos princípios.<br />Nossa missão e visão</h2>
      </div>

      <div className="row justify-content-center">
        {values.map((value, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 text-center mb-4">
            <div className="circle bg-primary text-white mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', borderRadius: '50%' }}>
              <strong>{value.title}</strong>
            </div>
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
}

export default BoxAboutUs;

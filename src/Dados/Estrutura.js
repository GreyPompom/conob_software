import logo from '../assets/logo/LOGO - CONOB_Prancheta_zoom-800.png';

const title = 'Nossa estrutura';
const subtitle = 'Conheça nossa estrutura dedicada a oferecer o melhor atendimento e suporte para nossos clientes.';

const cardsData = [
    {
        icon: 'bi-mortarboard',
        title: 'Equipe de Desenvolvimento',
        text: 'Contamos com uma equipe de programadores experientes e qualificados, prontos para criar soluções que atendam nossos clientes.',
    },
    {
        icon: 'bi-headset',
        title: 'Suporte',
        text: 'Nossa equipe de suporte é ágil e eficiente, garantindo que os problemas e dúvidas dos clientes sejam resolvidos com profissionalismo e agilidade.',
    },
    {
        icon: 'bi-hdd-stack',
        title: 'Contato',
        text: 'de segunda a sexta das 08:00 ao 12:00 e das 13:30 as 18:00.',
    },
    {
        isImage: true,
        imgSrc: logo,
        title: 'Sobre nós',
        text: 'Saiba mais sobre nossa empresa e nossa missão.',
        link: '/sobre-nos',
    },
];

export default cardsData;

export {title, subtitle };

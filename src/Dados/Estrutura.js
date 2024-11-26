import logo from '../assets/logo/LOGO - CONOB_Prancheta_zoom-800.png';

const title = 'Nossa estrutura';
const subtitle = 'Conheça nossa estrutura dedicada a oferecer o melhor atendimento e suporte para nossos clientes.';

const cardsData = [
    {
        icon: 'bi-mortarboard',
        title: 'Equipe de Desenvolvimento',
        text: 'Contamos com uma equipe de programadores experientes e qualificados, prontos para enfrentar qualquer desafio que apareça.',
    },
    {
        icon: 'bi-headset',
        title: 'Suporte',
        text: 'Contamos com uma equipe de suporte dedicada e comprometida em oferecer assistência excepcional aos nossos clientes.',
    },
    {
        icon: 'bi-hdd-stack',
        title: 'BLA BLA BLA BLA BALALA',
        text: 'Our membership management software provides full automation of membership renewals and payments.',
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
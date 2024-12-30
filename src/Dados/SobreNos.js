const title = 'Sobre nós';
const subtitle = ' A Conob nasceu da transição de CLT para PJ, incentivada partiu por um grande parceiro para expandir e aprimorar a gestão do departamento de TI. Em parceria com uma associação, desenvolvemos o projeto MTR, para o estado de SC, uma aplicação de controle de transporte de resíduos que opera em várias unidades da federação e no governo federal. Essa parceria nos permitiu explorar o setor de resíduos e impulsionar a criação de um ERP especializado na destinação de resíduos.'


const titleBox = 'Seu parceiro confiável para todos serviços';
const subtitleBox = 'Conob está no mercado desde 2015, entregando serviço de qualidade e confiança para nossos clientes. Nossa equipe é formada por profissionais altamente qualificados e comprometidos com a excelência.';

/*Missao visao e valores*/
const titleMVV = 'Conheça nossa missão, visão e valores que guiam nossas ações.';
const visao = ' Ser referência no mercado, reconhecida por nossa excelência e impacto positivo no ambiente coorporativo.';
const missao = 'Fornecer soluções customizadas à nossos clientes, com total transparência nas tratativas e sigilo das informações.';
const valores = 'Ética, transparência, inovação e compromisso com a sociedade e o meio ambiente.';

// Dados da timeline, substitua os caminhos das imagens conforme necessário
const timelineData = [
    {
      year: "2015",
      description:
        "Formalização do CNPJ, parceria com Pauta Distribuição na adminstração e gestão do departamento de TI",
      imgSrc: require('../assets/clt_pj.png'), // substitua pelos caminhos reais
    },
    {
      year: "2016",
      description:
        "Primeiro contrato de software ná área de destinação de resíduos",
      imgSrc: require('../assets/momento.png'),
    },
    {
        year: "2017",
        description:
            "Lançamento do software ERP-web para construtoras",
        imgSrc: require('../assets/construtora.png'),
    },
    {
        year: "2018",
        description:
            "Lançamento do software ERP-web para imobiliárias",
        imgSrc: require('../assets/default-image.png'),
    },
    {
        year: "2019",
        description:
            "Formalização do contrato de desenvolvimento e manutenção do MTR, parceria ABETRE",
        imgSrc: require('../assets/abetre.png'),
    },
    {
        year: "2021",
        description:
            "Adesão do MMA ao sistema Mtr, através do sistema Sinir",
        imgSrc: require('../assets/sinir.png'),
    },
    {
        year: "2022",
        description:
            "Integração do funil de vendas ao ERP",
        imgSrc: require('../assets/funil.png'),
    },
    {
        year: "2023",
        description:
            "Renovação de desenvolvimento e manutenção do MTR, parceria ABREMA",
        imgSrc: require('../assets/abrema.png'),
    },
    {
      year: "2024",
      description:
        "Aplicativo para atendimento Loja, Aplicativo para separação e coleta de estoque, primeiras iterações de IA generativa",
      imgSrc: require('../assets/ia.png'),
    },
  ];


export { title, subtitle, titleBox, subtitleBox, titleMVV, visao, missao, valores, timelineData };

// Dados de cada sistema
var NameConob = 'Conob';
var NameMtr = 'MTR';

// Descrição de cada sistema
const DescriptionConob = 'Gestão de compras, faturamento, expedição, ingressos de resíduos, GED, Mailling e protocolo eletrônico.';
const DescriptionMtr = 'Solução para estados controlar a emissão e demais controles do MTR - Parceria ABREMA.';

// Logo de cada sistema
const LogoConob = require('../assets/Systems/image-default-card.png');
const LogoMtr = require('../assets/Systems/image-default-card.png');

// Dados de sistemas específicos para Conob
const conob = [
    {
        title: 'BI',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'DashBoard',
            'Ferramentas OLAP.',
            'Painel de monitoramento'
        ],
        system: 'Conob',
        idclass: 'conob-bi',
        home: true
    },

    {
        title: 'Compras',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Requisições, cotações e ordens de compra.',
            'Autorizações de compras por nível e valor.',
            'Integração com receita federal para antecipação de compras.',
            'Check-list de recebimento'
        ],
        system: 'Conob',
        idclass: 'conob-compras',
        home: false
    },
    {
        title: 'Contratos',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Controle de contrato com fornecedores.',
            'Controle de contratos de prestação de serviço.',
            'Emissão de contratos personalizados baseados em modelos Word.',
            'Controle de contratos para destinação, transporte e remoção de resíduos.'
        ],
        system: 'Conob',
        idclass: 'conob-contrato',
        home: true
    },
    {
        title: 'Estoque',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Controle de estoque.',
            'Controle de estoque físico e localização.',
            'Coleta e conferência por dispositivos mobile.'
        ],
        system: 'Conob',
        idclass: 'conob-estoque',
        home: true
    },
    {
        title: 'Faturamento',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Emissão de pedidos, check-list e faturamento.',
            'Integração com estoque, financeiro e contabilidade.',
            'Emissão de Nf-e e Nfs-e.'
        ],
        system: 'Conob',
        idclass: 'conob-faturamento',
        home: true
    },
    {
        title: 'Financeiro',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Controle de duplicatas a pagar e receber.',
            'Controle de contas corrente e conciliação bancária.',
            'Conciliação OFX.',
            'Controle de fluxo de caixa.'
        ],
        system: 'Conob',
        idclass: 'conob-financeiro',
        home: true
    },
    {
        title: 'Fullcommerce',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Controle de produtos e integração com market-place.',
            'Integração pedidos de site da empresa e market-place.'
        ],
        system: 'Conob',
        idclass: 'conob-fullcommerce',
        home: true
    },
    {
        title: 'Funil de Vendas',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Registro de leads.',
            'Agendamento de alerts e notificações.',
            'Multiplos funis de venda e etapas customizáveis.',
            'Integração com módulo projetos e faturamento.',
            'Visualização por time e liderados.'
        ],
        system: 'Conob',
        idclass: 'conob-funil',
        home: true
    },
    {
        title: 'GDH',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Regristro de funcionário.',
            'Controle de faltas / férias / ....'
        ],
        system: 'Conob',
        idclass: 'conob-gdh',
        home: true
    },
    {
        title: 'GED',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Integração em todos módulos do sistema.',
            'Controle de documentos para apoio ao SGI.',
            'Controle de vencimentos e versionamento.'
        ],
        system: 'Conob',
        idclass: 'conob-ged',
        home: true
    },
    {
        title: 'Ingresso',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Controle de ingressos e saídas de caminhões no aterro / ETE.',
            'Integração com dispositivos de balança e câmeras.',
            'Emissão de guias de acompanhamento.',
            'Regras de ingresso e faturamento baseadas e validadas em contrato.',
            'Integração com MTR / CDF.'
        ],
        system: 'Conob',
        idclass: 'conob-ingresso',
        home: true
    },
    {
        title: 'Laboratório',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Integração com Contratos e Ingressos.',
            'Guias de amostragem configuraveis e parametrizadas.'
        ],
        system: 'Conob',
        idclass: 'conob-laboratorio',
        home: true
    },
    {
        title: 'Mailling',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Integração com demais módulos.',
            'Controle de emissão e leitura de e-mail.'
        ],
        system: 'Conob',
        idclass: 'conob-mailling',
        home: true
    },
    {
        title: 'SGI',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Controle de documentos.',
            'Controle de atas e reunições.',
            'Controle de registros de ocorrência conformes e não conformes.'
        ],
        system: 'Conob',
        idclass: 'conob-sgi',
        home: true
    },
    {
        title: 'Projetos',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Registro e monitoramento de projetos.',
            'Time line de projetos.',
            'Controle de previsão e investimento.'
        ],
        system: 'Conob',
        idclass: 'conob-projeto',
        home: true
    },
    {
        title: 'Protocolo Eletrônico',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Integração aos módulos do sistema.',
            'Controle de envio e leitura dos anexos ao protocolo.'
        ],
        system: 'Conob',
        idclass: 'conob-protocolo',
        home: true
    },
    {
        title: 'Transporte',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Programação de coleta.',
            'Geração de Mtr na coleta.',
            'Controle de jornada do Motorista.'
        ],
        system: 'Conob',
        idclass: 'conob-transporte',
        home: true
    }
];

// Dados de sistemas específicos para MTR
const mtr = [
    {
        title: 'Mtr - Estadual',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Registro de Geradores / Transportadore / Arm. Temporário e Destinadores.',
            'Emissão de MTR.',
            'Recebimento de MTR.',
            'Controle de limpa fossa, lixo extraordinário.',
            'Controle e emissão de CDF',
            'Api diversas',
            'Plataforma WEB JSP'
        ],
        system: 'Sinir',
        idclass: 'mtr-mtr',
        home: true
    },
    {
        title: 'Sinir / Cetesb',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Registro de Geradores / Transportadore / Arm. Temporário e Destinadores.',
            'Emissão de MTR.',
            'Recebimento de MTR.',
            'Controle de limpa fossa, lixo extraordinário.',
            'Controle e emissão de CDF',
            'Api diversas',
            'Plataforma WEB JSF e Angular'
        ],
        system: 'MTR',
        idclass: 'mtr-sinir',
        home: false
    }
];

// Estrutura final de Sistemas
const Sistemas = [
    {
        name: NameConob,
        description: DescriptionConob,
        systems: conob,
        image: LogoConob,
        idclass: 'conob'
    },
    {
        name: NameMtr,
        description: DescriptionMtr,
        systems: mtr,
        image: LogoMtr,
        idclass: 'mtr'
    }
];

// Exportar dados
export { Sistemas };

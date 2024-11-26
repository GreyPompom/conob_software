// Dados de cada sistema
var NameConob = 'Conob';
var NameMtr = 'MTR';

// Descrição de cada sistema
const DescriptionConob = 'Gestão de compras, requisoções, cotações e ordens de compras, assim com as devidas autorizações.';
const DescriptionMtr = 'Solução completa para controle de estoque e processos logísticos.';

// Logo de cada sistema
const LogoConob = require('../assets/Systems/image-default-card.png');
const LogoMtr = require('../assets/Systems/image-default-card.png');

// Dados de sistemas específicos para Conob
const conob = [
    {
        title: 'Contabilidade',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Automatize lançamentos contábeis com integração de dados financeiros.',
            'Facilite a emissão de balancetes e demonstrativos contábeis personalizados.',
            'Cadastre e gerencie lançamentos contábeis recorrentes de forma prática.',
            'Controle o fluxo de caixa com relatórios detalhados e em tempo real.',
            'Automatize a apuração de impostos com base nas movimentações financeiras.'
        ],
        system: 'Conob',
        idclass: 'conob-contabilidade',
        home: true
    },
    {
        title: 'Compras',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Gerencie requisições, cotações e ordens de compra com facilidade.',
            'Aprimore processos de aprovação para reduzir atrasos.',
            'Centralize informações de fornecedores para melhor rastreabilidade.',
            'Automatize integrações com contas a pagar e controle financeiro.'
        ],
        system: 'Conob',
        idclass: 'conob-compras',
        home: false
    }
];

// Dados de sistemas específicos para MTR
const mtr = [
    {
        title: 'Estoque',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Controle de entradas e saídas com rastreamento em tempo real.',
            'Automatize a gestão de inventário com notificações de níveis críticos.',
            'Geração de relatórios detalhados para controle de custo e consumo.',
            'Integração com processos de logística e vendas.'
        ],
        system: 'MTR',
        idclass: 'mtr-estoque',
        home: true
    },
    {
        title: 'Logística',
        image: require('../assets/Systems/image-default-card.png'),
        definitions: [
            'Planeje rotas e entregas com base em dados otimizados.',
            'Monitore a movimentação de cargas com painéis em tempo real.',
            'Automatize a gestão de fretes com controle de despesas.',
            'Integração com estoque e vendas para processos unificados.'
        ],
        system: 'MTR',
        idclass: 'mtr-logistica',
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

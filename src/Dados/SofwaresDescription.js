// Dados de cada sistema
var NameConob = 'Conob';
var NameMtr = 'MTR';

// Descrição de cada sistema
const DescriptionConob = 'Gestão de compras, requisoções, cotações e ordens de compras, assim com as devidas autorizações.';
const DescriptionMtr = 'Gestão de compras, requisoções, cotações e ordens de compras, assim com as devidas autorizações.';

//Logo de cada sistema
const LogoConob = require('../assets/Systems/image-default-card.png');
const LogoMtr = require('../assets/Systems/image-default-card.png');

// Dados de cada sistema específico
const conob = [
    {
      title: 'Contabilidade',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
        'Mantenha um cadastro de fornecedores e clientes atualizado',
        'Automatize a alimentação do Contas a Receber integrando dados...',
        'Automatize a alimentação do Contas a Pagar através da integração...',
        'Cadastre e gere contas a pagar e a receber recorrentes...',
        'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
        'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
        'Automatize o contas a receber das operadoras de cartão...',
        'Concilie as contas bancárias para manter os saldos sempre atualizados.'],
      system: 'Conob',
      idclass: 'contabilidade', 
      home: true
    },
    {
      title: 'Produção - Área Técnica',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
        'Mantenha um cadastro de fornecedores e clientes atualizado',
        'Automatize a alimentação do Contas a Receber integrando dados...',
        'Automatize a alimentação do Contas a Pagar através da integração...',
        'Cadastre e gere contas a pagar e a receber recorrentes...',
        'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
        'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
        'Automatize o contas a receber das operadoras de cartão...',
        'Concilie as contas bancárias para manter os saldos sempre atualizados.'],
      system: 'Conob',
      idclass: 'producao-area-tecnica',
      home: false
    },
    {
      title: 'Produção - Área Técnica',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
        'Mantenha um cadastro de fornecedores e clientes atualizado',
        'Automatize a alimentação do Contas a Receber integrando dados...',
        'Automatize a alimentação do Contas a Pagar através da integração...',
        'Cadastre e gere contas a pagar e a receber recorrentes...',
        'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
        'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
        'Automatize o contas a receber das operadoras de cartão...',
        'Concilie as contas bancárias para manter os saldos sempre atualizados.'],
      system: 'MTR',
      idclass: 'producao-area-tecnica',
      home: false
    },
    {
      title: 'Produção - Área Técnica',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
        'Mantenha um cadastro de fornecedores e clientes atualizado',
        'Automatize a alimentação do Contas a Receber integrando dados...',
        'Automatize a alimentação do Contas a Pagar através da integração...',
        'Cadastre e gere contas a pagar e a receber recorrentes...',
        'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
        'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
        'Automatize o contas a receber das operadoras de cartão...',
        'Concilie as contas bancárias para manter os saldos sempre atualizados.'],
      system: 'Conob',
      idclass: 'producao-area-tecnica',
      home: false
    },
    {
      title: 'Estoque',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
'Automatize lançamentos contábeis com integração de dados financeiros.',
'Facilite a emissão de balancetes e demonstrativos contábeis personalizados.',
'Cadastre e gerencie lançamentos contábeis recorrentes de forma prática.',
'Controle o fluxo de caixa com relatórios detalhados e em tempo real.',
'Automatize a apuração de impostos com base nas movimentações financeiras.',
'Simplifique a conciliação bancária com ferramentas integradas e inteligentes.',
'Mantenha um histórico detalhado de movimentações contábeis e financeiras.',
'Utilize dashboards visuais para acompanhar os indicadores financeiros chave.',
'Reduza erros e inconsistências com validações automáticas e relatórios inteligentes.'],
      system: 'MTR',
      idclass: 'estoque',
      home: true
    },
    // Outros objetos dentro de `conob` omitidos por brevidade
];

const Mtr = [
    {
      title: 'Financeiro - Contas a Pagar',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
        'Mantenha um cadastro de fornecedores e clientes atualizado',
        'Automatize a alimentação do Contas a Receber integrando dados...',
        'Automatize a alimentação do Contas a Pagar através da integração...',
        'Cadastre e gere contas a pagar e a receber recorrentes...',
        'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
        'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
        'Automatize o contas a receber das operadoras de cartão...',
        'Concilie as contas bancárias para manter os saldos sempre atualizados.'],
      system: 'MTR',
      idclass: 'financeiro-contas-a-pagar',
      home: true
    },
    {
      title: 'Produção - Área Técnica',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
        'Mantenha um cadastro de fornecedores e clientes atualizado',
        'Automatize a alimentação do Contas a Receber integrando dados...',
        'Automatize a alimentação do Contas a Pagar através da integração...',
        'Cadastre e gere contas a pagar e a receber recorrentes...',
        'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
        'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
        'Automatize o contas a receber das operadoras de cartão...',
        'Concilie as contas bancárias para manter os saldos sempre atualizados.'],
      system: 'MTR',
      idclass: 'producao-area-tecnica',
      home: false
    },
    {
      title: 'Produção - Área Técnica',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
        'Mantenha um cadastro de fornecedores e clientes atualizado',
        'Automatize a alimentação do Contas a Receber integrando dados...',
        'Automatize a alimentação do Contas a Pagar através da integração...',
        'Cadastre e gere contas a pagar e a receber recorrentes...',
        'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
        'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
        'Automatize o contas a receber das operadoras de cartão...',
        'Concilie as contas bancárias para manter os saldos sempre atualizados.'],
      system: 'Conob',
      idclass: 'producao-area-tecnica',
      home: false
    },
    {
      title: 'Produção - Área Técnica',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
        'Mantenha um cadastro de fornecedores e clientes atualizado',
        'Automatize a alimentação do Contas a Receber integrando dados...',
        'Automatize a alimentação do Contas a Pagar através da integração...',
        'Cadastre e gere contas a pagar e a receber recorrentes...',
        'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
        'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
        'Automatize o contas a receber das operadoras de cartão...',
        'Concilie as contas bancárias para manter os saldos sempre atualizados.'],
      system: 'MTR',
      idclass: 'producao-area-tecnica',
      home: false
    },
    {
      title: 'Produção - Área Técnica',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
        'Mantenha um cadastro de fornecedores e clientes atualizado',
        'Automatize a alimentação do Contas a Receber integrando dados...',
        'Automatize a alimentação do Contas a Pagar através da integração...',
        'Cadastre e gere contas a pagar e a receber recorrentes...',
        'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
        'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
        'Automatize o contas a receber das operadoras de cartão...',
        'Concilie as contas bancárias para manter os saldos sempre atualizados.'],
      system: 'Conob',
      idclass: 'producao-area-tecnica',
      home: false
    },
    {
      title: 'Produção - Área Técnica',
      image: require('../assets/Systems/image-default-card.png'),
      definitions: [ 
        'Mantenha um cadastro de fornecedores e clientes atualizado',
        'Automatize a alimentação do Contas a Receber integrando dados...',
        'Automatize a alimentação do Contas a Pagar através da integração...',
        'Cadastre e gere contas a pagar e a receber recorrentes...',
        'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
        'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
        'Automatize o contas a receber das operadoras de cartão...',
        'Concilie as contas bancárias para manter os saldos sempre atualizados.'],
      system: 'MTR',
      idclass: 'producao-area-tecnica',
      home: false
    },
    // Outros objetos dentro de `Mtr` omitidos por brevidade
];

// Estrutura de dados final
const Sistemas = [
    {
        name: NameConob,
        description: DescriptionConob,
        systems: conob,
        image: require('../assets/Systems/image-default-card.png'),
        idclass:'conob'
    },
    {
        name: NameMtr,
        description: DescriptionMtr,
        systems: Mtr,
        image: require('../assets/Systems/image-default-card.png'),
        idclass:'mtr'
    }
];

// Exportar dados
export { Sistemas };

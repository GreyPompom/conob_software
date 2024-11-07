import "./NossosSoftwares";
import SistemModule from "./Softwares";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSoftwares from "./HeroSoftwares";
function PageSoftwares () {
   
    
    const systemsData = [
        {
          image: 'link-para-imagem.jpg',
          title: 'FINANCEIRO',
          definitions: [
            'Mantenha um cadastro de fornecedores e clientes atualizado',
            'Automatize a alimentação do Contas a Receber integrando dados...',
            'Automatize a alimentação do Contas a Pagar através da integração...',
            'Cadastre e gere contas a pagar e a receber recorrentes...',
            'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
            'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
            'Automatize o contas a receber das operadoras de cartão...',
            'Concilie as contas bancárias para manter os saldos sempre atualizados.'
          ]
        },
        {
            image: 'link-para-imagem.jpg',
            title: 'FINANCEIRO',
            definitions: [
              'Mantenha um cadastro de fornecedores e clientes atualizado',
              'Automatize a alimentação do Contas a Receber integrando dados...',
              'Automatize a alimentação do Contas a Pagar através da integração...',
              'Cadastre e gere contas a pagar e a receber recorrentes...',
              'Utilize o Painel de Contas para aperfeiçoar o controle das Contas a Pagar...',
              'Utilize o Painel de Contas para aperfeiçoar o controle de Contas a Receber...',
              'Automatize o contas a receber das operadoras de cartão...',
              'Concilie as contas bancárias para manter os saldos sempre atualizados.'
            ]
          },
        // Adicione mais sistemas aqui, se necessário
      ];


    // Agrupa os itens em pares de 3 para o desktop


  return (
    <section className="page text-center p-5 " data-aos="fade-up">
       <HeroSoftwares/>
        <SistemModule systems={systemsData} />
    </section>
   
    )
}

export default PageSoftwares;
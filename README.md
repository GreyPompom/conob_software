
# **Conob Software - Landing Page**
<img src="https://conob-software.vercel.app/static/media/LOGO%20-%20CONOB_Prancheta_zoom-800.abea4fcf0a3a1228eeff.png" width="150" alt="logo_conob">

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/) [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple.svg)](https://getbootstrap.com/)

> **Descrição**  
> Este projeto é uma landing page desenvolvida em **React.js** com **Bootstrap** para estilização. A landing page da Conob tem como objetivo apresentar e destacar os principais recursos e sistemas da plataforma, proporcionando uma visão geral clara e acessível aos usuários. Ela é organizada de forma a guiar o visitante por uma experiência intuitiva, com informações detalhadas sobre as funcionalidades e benefícios dos sistemas oferecidos.
<p align="center">
    <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVyMjU3cWI5N2o5YWhmYmk0azR4dXp1ajM4bWthNGltbjJyaDNldSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zOvBKUUEERdNm/giphy.gif" width="400" alt="GIF 3">
</p>

---

## **Índice**

- [⚙️Pré-requisitos](#pré-requisitos)
- [📦Instalação e Configuração](#instalação-e-configuração)
- [📂Estrutura do Projeto](#estrutura-do-projeto)
- [🌱Guia de Estilo](#guia-de-estilo)
- [💾Configurar textos](#configurar-textos)
- [🔌Publicação na HostGator](#publicação-na-hostgator)
- [🤝Contribuição](#contribuição)
- [👾Licença](#licença)

---

## **⚙️Pré-requisitos**
<img src="https://media.giphy.com/media/10zxDv7Hv5RF9C/giphy.gif?cid=790b761154kwaxexov225vpelh88ntwqxnez95os7cdykinf&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="400" alt="GIF 3">

Antes de começar, você precisará ter os seguintes programas instalados em sua máquina:

- [Node.js](https://nodejs.org/) (16.17.0,)
- [npm](https://www.npmjs.com/) (13.11.0.)

---

## **📦Instalação e Configuração**

<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZ3OWt6NG5za3Jpb2Y2eXd0Z3Y0ZXZycm91bXQ1cndmaWp6emRoeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eCqFYAVjjDksg/giphy.gif" width="400" alt="GIF 3">

1. 🔧 Clone este repositório:
   ```bash
   git clone https://github.com//GreyPompom/conob_software.git
   cd conob_software
2. 🔧 Instale as dependências do projeto:
   ```bash
      npm install
3. 🔧 Instale as dependências do projeto:
   ```bash
     npm start

4. Abra no navegador:
Acesse http://localhost:3000 para visualizar o projeto.

---

## **📂Estrutura do Projeto**

A estrutura principal do projeto é organizada como segue:

  ````
    src/
      ├── components/         # Componentes reutilizáveis
      ├── pages/              # Páginas principais do aplicativo
      ├── assets/             # Imagens, fontes e outros recursos
      ├── App.js              # Componente raiz do aplicativo
      ├── index.js            # Ponto de entrada
  ````

> **Configuração do BootStrap**  
> O Bootstrap foi integrado via NPM. Certifique-se de importar os estilos no arquivo src/index.js:
 
            import 'bootstrap/dist/css/bootstrap.min.css';
---

## **🌱Guia de Estilo**

- Componentes:
  - Utilize Componentes Funcionais com Hooks.
  - Nomeie os componentes com PascalCase (e.g., MyComponent).
- Estilização:
  
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXFpc3p4NThiNWJ0bWJieWpmemw5Znd1dzJreHFtdnVkd3lqaXR1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yYSSBtDgbbRzq/giphy.gif" width="200" alt="GIF 2">

  - Priorize as classes do Bootstrap para layout e design.
  - Utilize CSS adicional somente quando necessário, em arquivos dentro de src/assets/css.


---

## **💾Configurar textos**

 <img src="https://media.giphy.com/media/QdX8FM4rppAkM/giphy.gif?cid=790b761180g3wuufk9p26js5zaqvmnjj2lrfpkzltpw0kl0p&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="300" alt="GIF 3">
 
### Ajustar Conteudos de texto(sistemas, cards, politicas, titulos) antes de subir a aplicação.
 1. Acessar pasta com arquivos de texto.
 ````
    src/
      ├── Dados/         # Conteudos de texto
````
>2. Encontrar Local respectivo do texto desejado para alteração.

> :warning: Não alterar a estrutura dos arquivos. 

---

## **🔌Publicação na HostGator**
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZwZWhuZTlubGYwOTUxbDF2emN4dnA1eDllNTd5MHRsaHc3MjJjOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KAG54qcias64jAW1mb/giphy.gif" width="200" alt="GIF 3">

  1. Preparar os Arquivos para Produção:
- Execute o comando para gerar os arquivos estáticos:
    ````
        npm run build
    ````
2. Acessar o cPanel
  - Faça login no cPanel.
 - Acesse o Gerenciador de Arquivos.

3. Fazer Upload dos Arquivos
  - No diretório public_html/ (ou a pasta correspondente), faça o upload dos arquivos da pasta build/.
  - Certifique-se de que o arquivo index.html está na raiz do diretório.

4.  Configurar Rotas (Se necessário)
  - Para projetos com múltiplas rotas, adicione um arquivo .htaccess com o seguinte conteúdo:
  ````
  Options -MultiViews
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
  ````

5.Testar o Projeto
- Acesse o domínio do seu site (e.g., https://conob.com.br) para verificar se está funcionando.

---

## **🤝Contribuição**
Contribuições são bem-vindas! Siga as etapas abaixo para contribuir:
1. Faça um fork deste repositório.

2. Crie uma branch com sua feature:
```
git checkout -b feature/nome-da-feature

````
3. Faça o commit de suas alterações:
```` git commit -m "Descrição da alteração"````

4. Envie para sua branch:
   ```bash
    git push origin feature/nome-da-feature

5. Abra um Pull Request.

---


## **👾Licença**

Este projeto está sob a licença MIT.

:woman_technologist: By EmelyLink - GreyPompom



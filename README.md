# Employees App

Um simples aplicativo de lista de funcionários feito em React <3

## Introdução

Este projeto foi realizado como um teste técnico para a seleção de vaga front-end na empresa [Nutcache](https://www.nutcache.com/).
Todo o processo de desenvolvimento demorou certa de 4 dias, com início oficial no dia 17/08/2021 e finalização no dia 20/08/2021.

A aplicação consiste em uma lista de funcionários, sendo necessária a implementação de uma interface front-end e de um serviço back-end associado.

## Funcionalidades

A lista das principais features da aplicação está descrita abaixo:

- Tela com lista de funcionários, onde o usuário pode adicionar, editar e apagar um ou mais funcionários;
- Responsividade e layout flexivo;
- Configurações de PWA, com possibilidade de instalação em smartphones tal qual um aplicativo nativo.

## Ambiente de desenvolvimento

As ferramentas utilizadas para o desenvolvimento da aplicação são listadas abaixo:

- [VSCode](https://code.visualstudio.com/) como IDE;
- [ESLint](https://eslint.org/) como linter de código;
- [Prettier](https://prettier.io/) para uma melhor identação de código.

## Setup

Para o front-end, foi escolhida a biblioteca [React](https://pt-br.reactjs.org/) como base principal, sendo utilizados também outros frameworks para o desenvolvimento das soluções, os quais são listados abaixo:

- [Redux](https://redux.js.org/) para gerenciamento de estados da aplicação segundo a arquitetura Flux;
- [Sass](https://sass-lang.com/) para um melhor uso das folhas de estilo;
- [Workbox](https://developers.google.com/web/tools/workbox) para geração adequada dos service workers para a funcionalidade de PWA.

## Rodando o projeto localmente

Antes de tudo, tenha certeza que o [Node](https://nodejs.org/en/) e o [NPM](https://www.npmjs.com/) estejam instalados em sua máquina.

Para rodar o projeto em seu ambiente de desenvolvimento, primeiro, clone este repositório na branch `main`.

Em seguida, já no diretório baixado, rode o comando `npm install` para a instalação dos pacotes.

Por fim, rode o comando `npm start` para iniciar o projeto localmente em seu navegador principal.

Caso deseje buildar a aplicação, rode o comando `npm run build`.

## Roteiro de desenvolvimento

Foi seguido, para fins de organização de versão do Git, o fluxo de trabalho do GitFlow. Para mais informações sobre o mesmo, acesse [este link](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow).

Primeiramente, tendo a API do back-end já definida, foi feita a estrutura da aplicação React.

<img src="https://drive.google.com/uc?export=view&id=1zhk4OLxrkF04mkAGl4s2ksIUzWYPsJHO">

- `assets`: Contém todos os assets da aplicação, como imagens e ícones;
- `components`: Contém todos os componentes principais da aplicação;
- `facades`: Contém os arquivos JS de configuração de facades de conexão dos componentes com os serviços da API. Para mais informações sobre este Padrão de Projeto, acesse [este link](https://refactoring.guru/pt-br/design-patterns/facade);
- `api`: Contém as funções de conexão com a API do back-end;
- `reducers`: Engloba os Reducers da aplicação;
- `actions`: Engloba as Actions da aplicação;
- `effects`: Engloba os Effects/Middlewares da aplicação;
- `store`: Contém o arquivo de configuração da Store da aplicação ;
- `utils`: Contém arquivos JS auxiliares para a aplicação;
- `envs`: Contém os apontamentos para as API's (dev e produção).

O fluxo de negócio é bem simples: um componente que deseja realizar uma ação chama a função associada no facade, que chama uma outra função que se conecta com a API, realizando a ação solicitada.

Seguindo o roteiro das features designadas, a primeira versão do projeto apresentava apenas tais funcionalidades.

Por último, a segunda, última e mais recente versão conta com a funcionalidade extra de PWA da aplicação.

## Deploy

A aplicação está rodando em produção neste link: [http://nutcache-challenge-frontend.herokuapp.com/](http://nutcache-challenge-frontend.herokuapp.com/).
O container Heroku está configurado para build e deploy automático a cada novo commit na branch `main`.

Caso acesse este link, tenha em vista que, por ser um container gratuito, o primeiro carregamento pode demorar um pouco, pois o Heroku "adormece" um container que passou certo tempo sem ser utilizado. Tal demora não tem conexão direta com o desempenho do aplicativo.

## Rodando os testes

Foram construídos testes unitários para cada componente. Para rodar os testes e conseguir ver a cobertura de código, rode o seguinte comando: `npm run test`.

## Desempenho no Google Lighthouse

Para teste de desempenho da aplicação, foi utilizada a extensão [Google Lighthouse](https://developers.google.com/web/tools/lighthouse?hl=pt-br) no DevTools do Google Chrome.

Segue abaixo o resultado para Desktop:

<img src="https://drive.google.com/uc?export=view&id=1S62cdqp_iIy1OgqbtwmnOgVQx2hHG3OZ">

Segue abaixo o resultado para Mobile:

<img src="https://drive.google.com/uc?export=view&id=1ZhAcwBiZ5svJL5kHy2UA_8n50SpXS1PV">

## PWA

Como citado anteriormente, o aplicativo está com a funcionalidade de PWA operante. Para testá-la, acesse [este link](https://to-do-app-guava.herokuapp.com) através de um dispositivo móvel e adicione a aplicação em sua tela inicial.

O service worker configurado guarda em cache os arquivos JS e imagens necessários para o funcionamento do aplicativo. Caso o dispositivo móvel perca conexão com a internet, ainda assim a página principal será mostrada com o loading rodando normalmente.

## Testes de responsividade, em dispositivos mobile e em browsers antigos

Para testes de responsividade, foi utilizado o DevTools do Google Chrome. A responsividade fica excelente até nas menores resoluções de tela registradas (IPhone 5/SE), independente de ser em modo retrato ou paisagem.
Os testes em dispositivos mobile foram um sucesso, com a responsividade funcionando da mesma forma que no DevTools.

Para testes em browsers antigos (de até três anos atrás), foi utilizada a ferramenta online [CrossBrowserTesting](https://app.crossbrowsertesting.com/).

Alguns ajustes foram realizados após tais testes, especialmente nas folhas de estilo, mas nada muito grande. No geral, as funcionalidades permaneceram as mesmas, independente do navegador. A única excessão foi ao IE11 (lançado em 2013), que não apresentou a página. Através de algumas pesquisas foi percebido que, de fato, tal navegador tem certos problemas com aplicações React.

## Considerações gerais do desenvolvedor

Embora o prazo para este projeto tenha sido um pouco apertado, no geral o desenvolvimento do mesmo foi tranquilo. Consegui aprender ainda mais funcionalidades do React nesta minha jornada de aprendizado desta biblioteca, e me senti realizado com o resultado final. Espero que vocês gostem! :D

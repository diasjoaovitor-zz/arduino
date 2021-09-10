## Projetos

* [Projeto 1: Acender e desligar um led](https://github.com/diasjoaovitor/arduino/tree/main/ex01-led) 
* [Projeto 2: Receber dados de um potenciômetro](https://github.com/diasjoaovitor/arduino/tree/main/ex02-potenciometro) 

## Ferramentas

Além de possuir uma placa [Arduino](https://www.arduino.cc/en/Main/Software_) e alguns componentes eletrônicos, é necessário instalar as seguintes ferramentas:

* [Git](https://git-scm.com/)

* [Node.js](https://nodejs.org/en/)

* [Arduino IDE](https://www.arduino.cc/en/Main/Software_)

Geralmente ao instalar o Node, o npm também é instalado. Você pode conferir com o seguinte comando:

```bash
  $ npm --version
```

Caso não esteja instalado, você deve fazer o [download](https://www.npmjs.com/) do mesmo, ou se preferir usar outro gerenciador de pacotes, você pode baixar o [yarn](https://yarnpkg.com/).

## Passo a Passo

* Conecte o Arduino no seu computador

* Abra a IDE do Arduino e confira se seu modelo foi reconhecido corretamente. Leia a [documentação](https://www.arduino.cc/en/Guide) para mais detalhes.

* Dentro da IDE, vá em _Aquivo_ > _Exemplos_ > _Firmata_ > StandartFirmata, carregue o programa para a placa e então já pode fechar a IDE.

Os projetos desse repositório, utlizam a biblioteca [Johnny Five](http://johnny-five.io/), que possue dependências próprias. Você pode conferir os requisitos nesta [wiki](https://github.com/rwaldron/johnny-five/wiki/Getting-Started).

* Faça o clone do repositório

```bash
  $ git clone https://github.com/diasjoaovitor/arduino.git
```

 O circuito está especificado no _Readme_ presente em cada pasta de um projeto. Após fazer a montagem do circuito, basta seguir o seguintes passos:
 
* Entre na pasta do projeto escolhido:

```bash
  $ cd arduino
  $ cd nome-projeto 
```
  
* Digite os seguintes comandos:
  
```bash
  $ yarn ou npm i
  $ yarn start ou npm start
```
  
Acesse [http://localhost:3001](http://localhost:3001) no seu navegador e confira o resultado.
   
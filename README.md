![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=%20CONCLUÍDO&color=GREEN&style=for-the-badge)

# API de Consulta ao Coincap com Ingestão e Análise de Dados ₿

Projeto de CRUD feito em Node.js usando Express e MySQL. A aplicação coleta os dados referentes ao Bitcoin através da plataforma Coincap e carrega as informações diretamente em um banco RDS na AWS para análise. Quando o valor atinge um valor abaixo de R$130.000,00, um e-mail de alerta é enviado.

## Tecnologias

### Framework
O Node.js é uma plataforma para desenvolvimento de aplicações server-side baseadas em rede utilizando JavaScript e o V8 JavaScript Engnne, usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente.
Ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos.<br>

### Tecnologias e requisitos básicos para poder utilizá-lo
* [Node.js](https://nodejs.org)
* [Xampp](https://www.apachefriends.org)
* [Postman](https://www.getpostman.com)
* [MySQL](https://database-client.com/#/home) - Extension
* [Banco de Dados AWS RDS](mba-es25.cwudjjjzg4mm.sa-east-1.rds.amazonaws.com)
* [Email_Remetente](alertabitcoincap@outlook.com)
  
## Desvantagens
O Express cria por padrão o projeto com view em `.jade`, sendo que mudaram para `.pug`.

## Principais vantagens
* V8 JavaScript Engine: é o interpretador de JavaScript open source implementado pelo Google em C++ e utilizado pelo Chrome.<br>
* Single threaded: Embora isso possa parecer uma desvantagem, o que se percebe ao desenvolver com Node.js é que isso simplifica extremamente a construção da aplicação. <br>
* IO(In/Out) não-bloqueante: Com isto nenhuma tarefa pesadas de entrada e saída vai travar a aplicação,
pois elas serão executadas em background sem bloquear a aplicação e o retorno de sucesso
ou falha dessas tarefas ocorrem através de uma função de callback.<br>
* Ready for real-time: Frameworks que interagem em real-time entre cliente e servidor, que são compatíveis com o novo protocolo WebSockets 
e permitem trafegar dados através de uma única conexão bi-direcional,
tratando as mensagens via eventos no JavaScript. <br>
* Comunidade Ativa
  
## Como utilizar

### Principais passos para instalação e configuração deste projeto
Após clonar o projeto para executá-lo, é necessário abrir o terminal ou cmd e ir para a pasta do projeto e executar: `npm install`. <br>
No terminal, executar o comando `npm start` para executar o projeto. <br>
Obs.:
    1 - Caso queira debuggar o código ao invés do comando `npm start`, execute o comando `npm run dev`, que habilita o nodemon.<br>
      1.1 - A instrução para debug está no arquivo `package.json` como ` "dev": "nodemon --inspect ./routes/cotacao.js" `.<br>
    2 - Após essa ação, clique `Run and Debug` e selecione `nodejs` na barra superior.<br>
Para verificar o funcionamento, basta acessar `http://localhost:3000`.<br>
E para utilizar no Postman, acessar a rota: `http://localhost:3000/cotacao`.<br>
Todos os outros comandos podem ser executados pelo Postman alterando a rota.

## Viabilidade da Solução

De acordo com a visão que tivemos ao construir esse projeto, podemos destacar os seguintes pontos:

* Tecnologias Utilizadas: A escolha de tecnologias como Node.js, Express e MySQL torna o projeto viável, uma vez que essas tecnologias são amplamente utilizadas e nos fornecem uma boa documentação.
* Coleta e Armazenamento de Dados: A solução demonstra capacidade para coletar dados do Coincap e armazená-los em um banco de dados RDS MySQL na AWS, o que é fundamental para a análise de dados do Bitcoin.
* Alertas por E-mail: A capacidade de enviar alertas por e-mail quando o valor do Bitcoin cai abaixo de um limite específico é uma característica importante para o monitoramento das flutuações do Bitcoin.

## Potenciais Adicionais
* Testes Unitários/Integrados:
Inclusão de testes unitários e de integração para cada parte da solução, incluindo a coleta de dados, análise e envio de e-mails de alerta. Os testes garantem que sejam realizadas melhorias contínuas em termos de confiabilidade e qualidade do código.
* Escalabilidade:
Considerar a escalabilidade indica que nosso projeto apresenta capacidade para expansão e tratamento de volumes maiores de dados, portanto, pode crescer com a demanda.
* Monitoramento:
Podem ser implementadas ferramentas de monitoramento no futuro, garantindo compromisso com a manutenção da aplicação.
* Aprimoramentos:
Podem ser implementadas funcionalidades adicionais, como notificações por SMS e análises mais avançadas, por exemplo.

## Material de Apoio

### Documentação
* Node.js em inglês [Node.js Docs](https://nodejs.org/en/docs/)  <br>
* Express em português [Express](http://expressjs.com/pt-br/)

### Criar novo projeto (caso queira fazer do zero).
Após instalar o Node.js, abrir o cmd ou terminal e executar o comando `npm install express-generator -g` para instalar o Express. <br>
Para criar um novo projeto, basta executar `express nome_do_projeto`. <br>

Uma dica é executar antes o comando `express -h` para criar um projeto com as opções que desejar. 
Por exemplo `express --git --ejs nome_do_projeto` que cria um .gitignore e a os arquivos da view em formato ejs(o padrão é .jade). <br>
Após a criação, entre pelo terminal ou cmd na pasta do projeto criado e execute `npm install`. <br>
Com o projeto criado e os módulos instalados, basta executar `npm start` e acessar `http://localhost:3000` para verificar o funcionamento do seu projeto.

## Integrantes do Projeto

Nome | RM
----  | --------
Amanda Carolini | RA 2300540 
Bianca Pereira | RA 2301749
Marcos Duarte | RA 2301819
Raul Lobo | RA 2302261

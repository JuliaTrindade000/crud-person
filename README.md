# Documentação do CRUD de Pessoas

Esta é a documentação da aplicações de Pessoas, que fornece operações CRUD (Criar, Ler, Atualizar e Excluir) para manipulação de informações de pessoas.

# Descrição da Aplicação

Esta aplicação consiste em um sistema de gerenciamento de informações de pessoas. Ela é composta por dois componentes principais: um frontend e um backend.

O frontend da aplicação é desenvolvido usando tecnologias web padrão, incluindo HTML, CSS e JavaScript. A interface do usuário permite que os usuários visualizem, adicionem, editem e excluam informações de pessoas por meio de um navegador web.

O backend é construído em Spring Boot, um framework Java amplamente utilizado para desenvolvimento de aplicativos web. Ele fornece uma API RESTful que recebe e processa solicitações HTTP do frontend. Essas solicitações são tratadas para executar operações CRUD (Criar, Ler, Atualizar e Excluir) no banco de dados MySQL.

A aplicação armazena as informações de pessoas, incluindo nome e endereço de e-mail, no banco de dados MySQL, garantindo que os dados estejam seguros e persistentes.

Em resumo, essa aplicação integra um frontend acessado por um navegador da web com um backend baseado em Spring Boot, que está conectado a um banco de dados MySQL. Isso permite que os usuários gerenciem informações de pessoas de forma eficiente e segura.


## Instruções para Executar a Aplicação

Siga estas instruções para executar a aplicação:

### 1. Buildar a Aplicação com o Maven

Antes de executar a aplicação, certifique-se de que o Maven esteja instalado no seu ambiente. Em seguida, siga as etapas abaixo:

1. Navegue até o diretório raiz da aplicação onde o arquivo `pom.xml` está localizado.

2. Abra um terminal de comando no diretório raiz.

3. Execute o comando Maven para construir a aplicação:

   ```bash
   ./mvnw clean install
   ```
   
Isso compilará o código-fonte, executará testes e criará um pacote da aplicação.

### 2. Executar o Docker Compose
   A aplicação utiliza o Docker Compose para orquestrar os contêineres necessários(como o do banco de dados MySQL). Certifique-se de que o Docker e o Docker Compose estejam instalados no seu ambiente. Em seguida, siga as etapas abaixo:

1. Navegue até o diretório raiz da aplicação, onde o arquivo docker-compose.yml está localizado.

2. Abra um terminal de comando no diretório raiz.

3. Execute o comando Docker Compose para iniciar a aplicação (para isso, tenha o docker instalado em sua máquina local):

   ```bash
   docker-compose up
   ```
   Isso iniciará os contêineres necessários, incluindo o banco de dados e a aplicação (pode demorar um pouco).



4. Após a execução bem-sucedida, a API estará disponível em `http://localhost:8080`.

## Endpoints

### Listar todas as Pessoas

**Método:** GET
**URL:** /api/people

Retorna uma lista de todas as pessoas cadastradas.

### Obter uma Pessoa por ID

**Método:** GET
**URL:** /api/people/{id}

Retorna os detalhes de uma pessoa com base no ID fornecido.

### Adicionar uma Nova Pessoa

**Método:** POST
**URL:** /api/people

Cria uma nova pessoa com os dados fornecidos no corpo da solicitação. Os dados da pessoa devem ser fornecidos em formato JSON.

### Atualizar uma Pessoa por ID

**Método:** PUT
**URL:** /api/people/{id}

Atualiza os detalhes de uma pessoa existente com base no ID fornecido. Os dados atualizados da pessoa devem ser fornecidos no corpo da solicitação em formato JSON.

### Excluir uma Pessoa por ID

**Método:** DELETE
**URL:** /api/people/{id}

Remove uma pessoa com base no ID fornecido.

## Exemplo de Dados da Pessoa (JSON)

Aqui está um exemplo de como os dados de uma pessoa devem ser fornecidos no corpo da solicitação em formato JSON:

```json
{
    "id": 1,
    "name": "Nome da Pessoa",
    "email": "email@exemplo.com"
}


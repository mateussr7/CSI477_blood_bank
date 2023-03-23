# CRUD em Node.js com Prisma ORM

Este projeto implementa uma API RestFull em Node para um trabalho da disciplina de Sistemas Web 1, do curso de Sistemas de Informação. 
Utiliza como base as tabelas modeladas disponibilizadas aqui: <https://github.com/fboliveira/CSI477-Sistemas-Web/blob/master/Assignments/Practices/2022-02-atividades-praticas.md>

Conforme solicitado, esta API fornece um CRUD para as entidades `pessoa`, `tipo_sanguineo`, `locais_coleta` e `doacoes`

## Instalação e Inicialização

Clone o projeto disponibilizado no github

```Typescript
  $ git clone https://github.com/mateussr7/CSI477_blood_bank.git
```

Após isso, você deve rodar o comando que irá instalar todas as dependências do projeto

```Typescript
  $ cd blood_bank
  $ npm install
```

O banco de dados do projeto será do tipo SQLite, que ja foi instalado anteriormente junto com as dependências. Para que possa utilizar a API, é necessário criar uma migration e um Prisma Client:

```Typescript
  $ npx prisma migrate dev --name init
```


```Typescript
  $ npx prisma generate
```

Após ter instalado todas as dependências e gerado as migrations e o prisma client, você está pronto para fazer deploy do servidor localmente.
A porta escolhida foi a `9000`, portanto todas as requests deverão ser feitas na URL base `http://localhost:9000`

Use esse comando para ativar o servidor, que iniciará um listener definido no arquivo src/index.ts do nosso servidor.

```Typescript
  $ npx ts-node-dev src/index.ts
```

Se estiver tudo certo, você deverá ver a seguinte mensagem no terminal:

```Typescript
  [SERVER] Servidor rodando na porta 9000
```


## Rotas

### Pessoas

* `POST /people/insert`
* `POST /people/update`
* `POST /people/delete`
* `GET /people/find-all`
* `POST /people/find-by-id`
* `POST /people/find-by-name`

### Tipos Sanguíneos

* `POST /blood-type/insert`
* `POST /blood-type/update`
* `POST /blood-type/delete`
* `GET /blood-type/find-all`
* `POST /blood-type/find-by-id`

### Locais de Coleta
* `POST /collection-point/insert`
* `POST /collection-point/update`
* `POST /collection-point/delete`
* `GET /collection-point/find-all`
* `POST /collection-point/find-by-id`

### Doações

* `POST /donations/insert`
* `POST /donations/update`
* `POST /donations/delete`
* `GET /donations/find-all`
* `POST /donations/find-by-id`


## Retornos

Todas as rotas possuem um retorno do tipo `JSON`, com as informações manipuladas pela API, no seguinte formato:

```JSON
  {
    "data": [
      {
        "id": 1
      }
    ]
  }
```

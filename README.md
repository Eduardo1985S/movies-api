# Movies API

## Descrição

Esta é uma API com MVC para gerenciamento de filmes, permitindo listar, buscar, criar, atualizar e deletar filmes.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Nodemon
- JSON para armazenamento de dados

## Estrutura de Pastas

```
src/
├── controllers/      # Controladores da lógica de negócio
│   └── movies-controller.js
├── models/          # Gerenciamento de dados e regras de negócio
│   └── movies-model.js
├── routes/          # Definição das rotas da API
│   └── movies-routes.js
├── data/            # Armazena o arquivo JSON dos filmes
│   └── movies.json
└── app.js           # Arquivo principal da aplicação
```

## Instalação

1. Clone este repositório:
    
    ```
    git clone https://github.com/Eduardo1985S/movies-api.git
    ```
    
2. Instale as dependências:
    
    ```
    npm install
    ```
    
3. Inicie o servidor em ambiente de desenvolvimento:
    
    ```
    npm run dev
    ```
    

## Como Usar a API

### Para buscar todos os filmes:

```
GET http://localhost:3000/api/movies
```

### Para buscar um filme específico:

```
GET http://localhost:3000/api/movies/1
```

### Para criar um novo filme:

```
POST http://localhost:3000/api/movies
Content-Type: application/json

{
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "genre": "Sci-Fi"
}
```

### Para atualizar um filme:

```
PUT http://localhost:3000/api/movies/1
Content-Type: application/json

{
    "year": 2000
}
```

### Para deletar um filme:

```
DELETE http://localhost:3000/api/movies/1
```

## Configuração

Crie um arquivo `.env` na raiz do projeto e defina a porta do servidor:

```
PORT=3000
```

## Licença

Este projeto está licenciado sob a MIT License.

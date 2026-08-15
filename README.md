# Users API

API REST desenvolvida como estudo e prática dos fundamentos de desenvolvimento backend com Node.js.

O objetivo deste projeto foi revisar o funcionamento de uma API e colocar em prática a construção de um CRUD completo de usuários, desde o recebimento da requisição até a comunicação com o banco de dados.

## 🛠️ Tecnologias

* Node.js
* Express
* MySQL
* JavaScript
* mysql2
* dotenv

## 📚 Conceitos praticados

Durante o desenvolvimento, foram revisados e praticados:

* API REST
* CRUD
* Rotas
* Controllers
* Services
* Repositories
* Models
* Middlewares
* Tratamento de erros
* Variáveis de ambiente
* Integração com MySQL
* Queries parametrizadas
* Status HTTP
* Organização em camadas

## 📁 Estrutura

```text
src/
├── config/
│   └── env.js
├── controllers/
│   └── userController.js
├── database/
│   └── connection.js
├── models/
│   └── User.js
├── repositories/
│   └── userRepository.js
├── routes/
│   └── user.routes.js
├── services/
│   └── userServices.js
├── app.js
└── server.js
```

## 🔄 Endpoints

| Método | Rota         | Descrição                |
| ------ | ------------ | ------------------------ |
| GET    | `/users`     | Lista todos os usuários  |
| GET    | `/users/:id` | Busca um usuário pelo ID |
| POST   | `/users`     | Cria um novo usuário     |
| PUT    | `/users/:id` | Atualiza um usuário      |
| DELETE | `/users/:id` | Remove um usuário        |

## 🗄️ Banco de dados

O projeto utiliza MySQL e uma tabela `users` com os seguintes campos:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## ⚙️ Configuração

Clone o repositório e instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3010

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=users_management
DB_PORT=3306
```

Depois, inicie a aplicação:

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3010
```

## 🎯 Objetivo do estudo

Este projeto faz parte dos meus estudos de backend e foi desenvolvido com o objetivo de relembrar e consolidar os fundamentos de uma API REST, principalmente a comunicação entre as diferentes camadas da aplicação e o banco de dados.

Não se trata de um sistema pronto para produção, mas de uma prática voltada ao aprendizado e à evolução dos meus conhecimentos em backend.

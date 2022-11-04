# Library Manager

Este repositório guarda os materiais utilizados na monitoria estruturada que abordou operações de **CRUD** criando uma API com Node.JS.

### Executando a aplicação

Para realizar essa atividade, inicie fazendo o clone deste repositório usando o comando abaixo.

    git clone git@github.com:larissaperinoto/library-manager.git

Instale as dependências do projeto.

    npm install

Inicie a aplicação com o nodemon.

    npm start

**Obs.:** Caso queira salvar sua resolução no seu GitHub faça o `Fork` deste repositório antes de realizar o clone e substitua no primeiro comando a chave SSH que agora deve ser a do seu repositório.

## 📚 Exercitando

### 1 - Crie um endpoint para acessar todos os livros.

- O endpoint deve ser acessíve através da rota `/books`.

A requisição deve retornar o status `200` e um array com todos os livros da biblioteca. Caso não haja nenhum livro, deve retornar um array vazio.

### 2 - Crie um endpoint para cadastrar um novo livro.

- O endpoint deve ser acessíve através da rota `/books`.
<details>
  <summary>O body da requisição deve ser da seguinte forma</summary>

      {
        "title": "Capitães da Areia",
        "author": "Jorge Amado",
        "release": "1937"
     }


</details>

A requisição deve retornar o status `201` e os dados do novo livro que foi inserido.

<details>
  <summary>O retorno esperado</summary>

      {
        "id": "7"
        "title": "Capitães da Areia",
        "author": "Jorge Amado",
        "release": "1937"
      }


</details>

### 3 - Crie um endpoint para atualizar um livro.

- O endpoint deve ser acessíve através da rota `/books/:id`.

O livro `1984 de George Orwell` está com o ano de lançamento errado e precisamos atualiza-lo. O ano de lançamento é **1949**, os outros dados do cadastro estão corretos.

<details>
  <summary>O body da requisição deve ser da seguinte forma</summary>

       {
          "title": "1984",
          "author": "George Orwell",
          "release": "1949"
       }

</details>

- A resposta da requisição deve retornar o status `200` e as informações do livro que foram editadas.

<details>
  <summary>O retorno esperado</summary>

        {
          "id": 2
          "title": "1984",
          "author": "George Orwell",
          "release": "1949"
        }


</details>

### 4 - Crie um enpoint para deletar um livro.

- O endpoint deve ser acessíve através da rota `/books/:id`.
- O livro `O Conto da Aia` saiu de estoque e precisamos remove-lo da nossa base de dados.
- O retorno da requisição deve ser um status `204` sem mensagem de resposta.

### 5 - Crie um endpoint que permita pesquisar um livro pelo autor.

- O endpoint deve ser acessíve através da rota `/books/search?q=searchTerm`.

Ao pesquisar pela rota `/books/search?author=ge` deve retornar o status `200` e um array com todos os autores que satisfaçam a pesquisa.

<details>
  <summary>O retorno esperado para a pesquisa por "ge"</summary>

     [
        {
          "id": "2",
          "title": "1984",
          "author": "George Orwell",
          "release": "1945"
        },
        {
          "id": "6",
          "title": "A Revolução dos Bichos",
          "author": "George Orwell",
          "release": "1945"
        }
      ]


</details>

## Bônus

### 6 - Crie os middlewares de validação para as rotas dos exercícios anteriores.

  Para as operações de `PUT`e `POST`, onde o usuário fornece dados no body da requisição, faça a validação destes dados utilizando middlewares.

  Caso algum campo esteja faltando retorne o status `400` com o seguinte modelo de mensagem.

        {
          message: "O campo \"nome-do-campo-aqui\" é obrigatório"
        }


## Resolução

Para verificar uma proposta de solução aos exercícios acima entre na branch `solved-exercises` utilizando o comando abaixo.

        git checkout solved-exercises


  ---


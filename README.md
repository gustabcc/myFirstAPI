# API de Gerenciamento de Tarefas

Esta é uma API simples de gerenciamento de tarefas, criada com Express. Ela permite a criação, leitura, atualização e exclusão de tarefas. A API utiliza UUIDs para gerar IDs dinâmicos para as tarefas e Nodemon para reiniciar automaticamente o servidor durante o desenvolvimento.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **UUID** para IDs dinâmicos
- **Nodemon** para reinício automático durante o desenvolvimento
- **Repository Pattern** para gerenciar a lógica de acesso aos dados
- **Controllers** para separar as responsabilidades de cada rota

## Endpoints

A API possui 4 rotas principais para gerenciar as tarefas.

### 1. **GET /tasks**

- **Descrição:** Retorna todas as tarefas armazenadas.
- **Resposta:** Lista de todas as tarefas.

### 2. **POST /tasks**

- **Descrição:** Cria uma nova tarefa.
- **Requisição:**
  - Corpo da requisição deve incluir `title` (título da tarefa) e `description` (descrição da tarefa).
- **Resposta:** Tarefa criada com sucesso, incluindo um UUID único.

### 3. **PUT /tasks/:id**

- **Descrição:** Atualiza uma tarefa existente com base no ID.
- **Requisição:**
  - Corpo da requisição pode incluir `title` e/ou `description`.
- **Resposta:** Tarefa atualizada com sucesso.

### 4. **DELETE /tasks/:id**

- **Descrição:** Deleta uma tarefa com base no ID.
- **Resposta:** Confirmação de que a tarefa foi deletada.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:

   ```bash
   cd nome-do-repositorio
   yarn install
   ```

3. Inicie o servidor com Nodemon:

   ```bash
   yarn dev
   ```

   O servidor estará disponível em `http://localhost:3000`.

## Estrutura de Pastas

- **controllers/**: Contém os controladores para gerenciar as rotas.
- **repositories/**: Contém a lógica para manipular os dados (no caso, as tarefas).
- **models/**: (Opcional, caso tenha alguma definição de esquema ou modelo).

## Como Funciona

1. **Repository Pattern:** A lógica de acesso e manipulação dos dados (tarefas) está separada no repositório. Isso facilita a manutenção e teste da aplicação.
2. **Controllers:** Cada rota é gerenciada por um controller, que chama os métodos do repositório e retorna as respostas para o cliente.

## Contribuindo

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b feature-nova`).
3. Faça suas alterações e adicione testes se necessário.
4. Envie as alterações com um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

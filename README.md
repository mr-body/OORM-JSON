# OORM-JSON

Esta documentação descreve as principais funções e métodos disponíveis na OORM implementada em JavaScript.

## Funções Principais

### 1. `db(filename)`

- **Descrição**: Cria uma nova instância do banco de dados usando um arquivo JSON especificado.
- **Parâmetros**: 
  - `filename` (string): O nome do arquivo JSON que armazena os dados.

### 2. `ref(path)`

- **Descrição**: Cria uma referência para uma ramificação específica do banco de dados.
- **Parâmetros**: 
  - `path` (string): O caminho da ramificação (ex: `'users'`, `'users/info'`).

### Métodos da Referência (`TreeRef`)

#### 3. `insert(item)`

- **Descrição**: Adiciona um novo item à ramificação.
- **Parâmetros**: 
  - `item` (object): Um objeto representando os dados a serem inseridos.

#### 4. `getById(id)`

- **Descrição**: Recupera um item específico pelo ID.
- **Parâmetros**: 
  - `id` (string): O ID do item a ser recuperado.
- **Retorno**: O objeto correspondente ao ID, ou `undefined` se não encontrado.

#### 5. `getAll()`

- **Descrição**: Retorna todos os itens da ramificação.
- **Retorno**: Um array contendo todos os itens.

#### 6. `delete(id)`

- **Descrição**: Remove um item específico pelo ID.
- **Parâmetros**: 
  - `id` (string): O ID do item a ser deletado.

#### 7. `deleteAll()`

- **Descrição**: Remove todos os itens da ramificação.

#### 8. `update(id, newData)`

- **Descrição**: Atualiza um item específico pelo ID.
- **Parâmetros**: 
  - `id` (string): O ID do item a ser atualizado.
  - `newData` (object): Um objeto contendo os novos dados a serem aplicados.

## Exemplo de Uso

```javascript
const db = require('./treejson'); // Importa a OORM
const dbInstance = db('database.json'); // Cria uma instância do banco de dados

const ref = dbInstance.ref('users'); // Cria referência para 'users'

// Inserindo dados
ref.insert({ info: "banco de dados 1", descricao: "viste como o meu nome é Walter" });

// Recuperando todos os dados
console.log(ref.getAll());

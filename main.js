const db = require('./treejson'); // Ajuste conforme o nome do seu arquivo

// Criar raiz
const dbInstance = db('database.json');

// Criar ramificação
const ref = dbInstance.ref('users');
const ref2 = dbInstance.ref('dados');

// Adicionar ou criar ramificação
ref.insert({ info: "banco de dados 1", descricao: "viste como o meu nome é Walter e o seu qual é, cara" });
ref2.insert({ nome: "Walter Santana", idade: 18, casa: "Golf 2" });

// Selecionar todos
console.log('Todos os usuários:', ref.getAll());
console.log('================\nTodos os nomes:', ref2.getAll());

// Exemplo de uso do método getById
// const id = ref.getAll()[0].id; // Pega o ID do primeiro usuário
// console.log('Usuário por ID:', ref.getById(id));

// Atualizar
// ref.update(id, { nome: "Novo Nome" });
// console.log('Após atualização:', ref.getById(id));

// // Deletar
// ref.delete(id);
// console.log('Após deletar:', ref.getAll());

// // Deletar tudo
// ref.deleteAll();
// console.log('Após deletar todos:', ref.getAll());

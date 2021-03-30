let petObj = ` {  "nome" : "batman"}`;

//desestruturação

let pessoa = {
  nome: ' Iago',
  idade: 25,
  profissao: 'dev',
  contato: '81900000000',
  habilidades: ['node.js', 'mysql', 'javascript', 'html'],
};
let { nome, contato } = pessoa;

//console.log(`${pessoa.nome}-${pessoa.contato}`);
console.log(`${nome}-${contato}`);

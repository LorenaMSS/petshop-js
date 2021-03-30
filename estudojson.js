/*let petObj = ` {  "nome" : "batman"}`;

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
console.log(`${nome}-${contato}`);*/

let turma1 = ['Ana', 'João', 'Vinicius', 'Igor'];
let turma2 = ['Jana', 'Gustavo', 'Adriana', 'Isaac'];

let turmatotal = [...turma1, ...turma2]; // elemento por elemento
//let turmatotal = [turma1, turma2];// duas arrays dentro de uma

//console.log(turmatotal);

turma1.push(turma2); // elemento turma 1+ array turma 2
console.log(turma1);

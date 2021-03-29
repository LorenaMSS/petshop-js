const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');

bancoDados = JSON.parse(bancoDados);
const nomePetshop = 'PETSHOP DA LULU';

const atualizaBanco = () => {
  let petsAtualizado = JSON.stringify(bancoDados);
  fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
};

const listarPets = () => {
  for (let pet of bancoDados.pets) {
    // template string
    console.log(`nome do pet: ${pet.nome}`);
    pet.vacinado
      ? console.log('pet vacinado')
      : console.log('pet não vacinado');
  }
};

const vacinarPet = (pet) => {
  let nomep = 'Mimosa';

  for (let pet of bancoDados.pets) {
    if (pet.nome == nomep) {
      if (pet.vacinado == true) {
        console.log(`Ops, ${pet.nome} já está vacinado!'`);
      } else {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
      }
    }
    atualizaBanco();
  }
};

const campanhaVac = () => {
  let cont = 0;
  for (let pet of bancoDados.pets) {
    if (pet.vacinado == false) {
      cont++;
      pet.vacinado == true;
      modificarvac();
      console.log(`${pet.nome} foi vacinado!`);
    }
  }
  atualizaBanco();

  console.log(cont + ' pets foram vacinados nessa campanha!');
};

const novoCliente = () => {
  let novoPet = {
    nome: 'jujuba',
    tipo: 'cachorro',
    idade: '10',
    raca: 'Vira-lata',
    peso: '10',
    tutor: 'André',
    contato: '(81) 99699-0000',
    vacinado: false,
    servicos: ['banho', 'tosa'],
  };
  bancoDados.pets.push(novoPet);

  atualizaBanco();
};
const darBanho = (pet) => {
  nomep = pet.nome;

  for (let pet of bancoDados.pets) {
    if (pet.nome == nomep) {
      pet.servicos.push('banho');
      console.log(`${pet.nome} está tomando banho...`);
      console.log(`${pet.nome} está de banho tomado!`);
      console.log(`este serviço ocorreu em ${moment().format('L')}`);
      atualizaBanco();
    }
  }
};
const tosarPet = (pet) => {
  nomep = pet.nome;

  for (let pet of bancoDados.pets) {
    if (pet.nome == nomep) {
      pet.servicos.push('tosa');
      console.log(`${pet.nome} está sendo tosado...`);
      console.log(`${pet.nome} está com o cabelinho cortado!`);
      console.log(`este serviço ocorreu em ${moment().format('L')}`);
      atualizaBanco();
    }
  }
};
const cortarUnhas = (pet) => {
  nomep = pet.nome;

  for (let pet of bancoDados.pets) {
    if (pet.nome == nomep) {
      pet.servicos.push('Aparar as unhas');
      console.log(`${pet.nome} está cortando as unhas...`);
      console.log(`${pet.nome} está com a manicure em dia!`);
      console.log(`este serviço ocorreu em ${moment().format('L')}`);
      atualizaBanco();
    }
  }
};

const atenderCliente = (pet, servicos) => {
  console.log(`Olá ${pet.nome}`);

  servicos ? servicos(pet) : console.log('só  estou dando uma olhadinha');
  console.log('Tchau, até mais!');
};

listarPets();

atenderCliente(bancoDados.pets[0], darBanho);

//novoCliente();
//darBanho();
//cortarUnhas();
// tosarPet();
//campanhaVac();
//vacinarPet();
listarPets();

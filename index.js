const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');

bancoDados = JSON.parse(bancoDados);
const nomePetshop = 'PETSHOP DA LULU';

const atualizaBanco = () => {
  let petsAtualizado = JSON.stringify(bancoDados);
  fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
};

const contatoTutor = (pet) => {
  let { nome, tutor, contato } = contatoPet;

  return `Tutor: ${tutor}
   Contato: ${contato}
   Pet: ${nome}`;
};

const filtratTutor = (nomeTutor) => {
  let petsTutor = bancoDados.pets.filter((pet) => {
    return pet.tutor == nomeTutor;
  });

  console.log(`Pets do tutor ${nomeTutor}`);
  petsTutor.forEach((pet) => {
    console.log(`${pet.nome}- ${pet.tipo}`);
  });
};

const filtrarTipoPet = (tipoPet) => {
  let petEncontrados = bancoDados.pets.filter((pet) => {
    return pet.tipo == tipoPet;
  });
  return petEncontrados;
};

const clientePremium = (pet) => {
  let { nome } = pet;
  let nServicos = pet.servicos.length;

  if (nServicos > 5) {
    console.log(
      `Olá, ${nome}! Você é um cliente especial e ganhou um descontão!`
    );
  } else {
    console.log(`Olá, ${nome}! Você ainda não tem descontos disponiveis!`);
  }
};

const buscarPet = (nomePet) => {
  let petEncontrado = bancoDados.pets.find((pet) => {
    return pet.nome == nomePet;
  });

  return petEncontrado
    ? petEncontrado
    : `Nenhum pet encontrado com o nome ${nomePet}`;
};

const listarPets = () => {
  bancoDados.pets.forEach((pet) => {
    let { nome, idade, tipo, raca, vacinado, servicos } = pet;

    console.log(
      `${nome}, ${idade} anos, ${tipo}, ${raca}, ${
        vacinado ? 'vacinado' : 'não vacinado'
      }`
    );

    servicos.forEach((servico) => {
      let { data, nome } = servico;
      console.log(`${data} - ${nome}`);
    });
  });
};

const vacinarPet = (pet) => {
  let nomep = pet.nome;
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
  const vac = bancoDados.pets.map(function (pet) {
    if (pet.vacinado == false) {
      vacinarPet(pet);
      cont++;
    }
  });
  console.log(cont + ' pets foram vacinados nessa campanha!');
};

const novoCliente = () => {
  let novoPet = {
    nome: 'jujuba',
    tipo: 'cachorro',
    idade: '10',
    raca: 'Vira-lata',
    peso: '10',
    tutor: 'José',
    contato: '(81) 99699-0000',
    vacinado: false,
    servicos: ['banho', 'tosa'],
  };
  bancoDados.pets.push(novoPet);

  atualizaBanco();
};
const darBanho = (pet) => {
  for (let pet of bancoDados.pets) {
    if (pet.nome == nomep) {
      pet.servicos.push({
        nome: 'banho',
        data: moment().format('DD-MM-YYYY'),
      });
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
      pet.servicos.push({
        nome: 'tosa',
        data: moment().format('DD-MM-YYYY'),
      });
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
      pet.servicos.push({
        nome: 'corte de Unhas',
        data: moment().format('DD-MM-YYYY'),
      });
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

//novoCliente();
//filtratTutor('José');
//campanhaVac();
//listarPets();

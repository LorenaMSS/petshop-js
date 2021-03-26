const moment = require("moment");
var pets = require('./dadosPets.json')
const nomePetshop ="PETSHOP DA LULU";

const listarPets= ()=>{ 
    for( let pet of pets){
       // template string
        console.log (`nome do pet: ${pet.nome} serviços: ${pet.servicos}`);

    }
}

const vacinarPet = (pet) => {
    let nomep="Mimosa";

    for(let pet of pets){
        
        if(pet.nome==nomep){
            if (pet.vacinado==true){
                console.log(`Ops, ${pet.nome} já está vacinado!'`);
                
            }else{
                pet.vacinado= true;
                console.log(`${pet.nome} foi vacinado com sucesso!`);
                
            }
        }
    }
     
 }

 const campanhaVac=()=>{
     let cont=0;
     for (let pet of pets){
         if (pet.vacinado==false){
             cont++;
             pet.vacinado==true;
             console.log(`${pet.nome} foi vacinado!`)
         }
     }

     console.log(cont+" pets foram vacinados nessa campanha!")

 }
 listarPets()

 const novoCliente=()=>{
   
    let novoPet={
        nome:'jujuba',
        tipo: 'cachorro',
        idade: '10',
        raca: 'Vira-lata',
        peso: '10',
        tutor: 'André',
        contato:'(81) 99699-0000',
        vacinado: false,
        servicos: ['banho', 'tosa']   
    }
    pets.push(novoPet);
   
 }
 const darBanho=(pet)=>{
    let nomep="Mimosa";

    for(let pet of pets){
        
        if(pet.nome==nomep){
            pet.servicos.push("banho");
            console.log(`${pet.nome} está de banho tomado!`)
            console.log(`este serviço ocorreu em ${moment().format('L')}`)
        }
    }

 }
 const tosarPet=(pet)=>{
    let nomep="Mimosa";

    for(let pet of pets){
        
        if(pet.nome==nomep){
            pet.servicos.push("tosa");
            console.log(`${pet.nome} está com o cabelinho na régua!`)
            console.log(`este serviço ocorreu em ${moment().format('L')}`)
           
        }
    }

 }
 const cortarUnhas=(pet)=>{
    let nomep="Mimosa";

    for(let pet of pets){
        
        if(pet.nome==nomep){
            pet.servicos.push("Corte de unhas");
            console.log(`${pet.nome} está com as unhas cortadas!`)
            console.log(`este serviço ocorreu em ${moment().format('L')}`)
   
        }
    }

 }


 //novoCliente();
 //darBanho();
 //cortarUnhas();
// tosarPet();
 listarPets();
//campanhaVac();
 //vacinarPet();
 //listarPets();



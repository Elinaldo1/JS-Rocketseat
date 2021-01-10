//OPERADORES REST/SPREAD===========================
//  utiliza os 3 pontos um ao lado do outro(/...)
//como não foram acoplados a vs principal do babel vamos instalá-los como
//  plugins(yarn add @babel/plugin-proposal-object-rest-spread)

// spread===================================
//repassa as informações de umobjetou array para outra estrutura de dados
const user1 = {
  apelido:'Diego',
  anos: '20',
  local: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

// unir arr1 e arr2
const arr3 = [...arr1, ...arr2];//utilizado dessa forma copia 1 array inteiro.
console.log(arr3);
console.log(arr1.concat(arr2));//um teste fora parte, função concatenar

// criar um novo objeto com todas as propriedades de outro e mudar apenas 1 delas, muito utilizado no JS
const user2 = {...user1,apelido: 'user2'};//copiei as propriedades de user1 e mudei apenas o apelido
console.log(user2);

// spread===================================
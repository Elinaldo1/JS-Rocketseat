//DESESTRUTURAÇÃO=================================
// formas de buscar infos de um objeto
const user = {
  nome:'Diego',
  idade: '20',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};
console.log(user);
console.log(user.nome, user.idade,user.endereco.cidade);

const {nome, idade, endereco:{estado}} = user;//aqui antes do igual listo entre chaves as propriedades que quero bucar do objeto após o igual
console.log(nome,idade,estado);

function mostranome(user) {
  //sem desestruturação, apenas passo o objt como param da função e no retorno obj.propriedade
  console.log(user.nome)
}
mostranome(user);

function mostranome1({nome,idade}) {
  //posso usar desestruturação nos params da função usando o nome da propriedade do objt entre chaves no param
  console.log(nome, idade)
}
mostranome1(user);
//DESESTRUTURAÇÃO=================================
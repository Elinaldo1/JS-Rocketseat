//OPERADORES REST/SPREAD===========================
//  utiliza os 3 pontos um ao lado do outro(/...)
//como não foram acoplados a vs principal do babel vamos instalá-los como
//  plugins(yarn add @babel/plugin-proposal-object-rest-spread)

// rest==============================
// rest--serve para pegar o resto das propriedades
const user1 = {
  apelido:'Diego',
  anos: '20',
  local: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};

//em objetos
const{anos, ...restante } = user1;//aqui pego a propriedade anos e todas as outras ficam na variavel restante(...variavel)
console.log('rest '+anos);
console.log(restante);

const arr = [1,2,3,4,5,8,9];
const[a, b, ...c] = arr;//em vetores
console.log(arr);
console.log(a);
console.log(b);
console.log(c);

//com parametros
const somar =(a,b)=>a+b
console.log(somar(10,10))
//abaixo utiliso rest(...params)
const somar1 =(...params)=>params;
console.log(somar1(10,10))

const somar2 =(...params)=>params.reduce((total,next)=>total+next);
console.log(somar2(10,10,10))
//rest================================
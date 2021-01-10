//FILTER========================================
const arr = [1,2,3,4,5,8,10];
const filter = arr.filter((item)=>{
  //faz um loop na array e retorna valor true ou false para cada item
  //a expressão aqui dentro prcisa obrigatorimente retornar true ou false, aqui retorna só num pares
   return item % 2 === 0;
});
console.log(filter);
//FILTER========================================
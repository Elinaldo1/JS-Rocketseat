// map=============================================================
const arr = [1,2,3,4,5,8,10];
//map serve p/ percorrer o vetor e retornar algo de dentro
//o param da fun map é outra função q retorna cada item dentro da mesma, ex: array.map(function(item -são todos os itens do array){})
//posso passar o index tbm, ex: array.map((item,index)=>{})

// formar novo array
const newArr = arr.map((item/*todos os itens do array passado*/,index)=>{
  return item+'+'+index+' = '+ (item+index);//aqui para cada item de arr eu somo a posição do item no array
});
console.log(newArr);
// map============================================================
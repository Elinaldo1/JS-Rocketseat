// reduce=========================================================
const arr = [1,2,3,4,5,8,10];
// Reduce - cosome todo o vetor e tranforma numa única info(var)
//geralmente um número
const sum = arr.reduce((total, next)=>{
  return total+next;
  // reduce realiza um loop, no ciclo 1 o total será 0 e o next
  // será 1(1º item do array),total = 0+1(total+next)
  //segue assim até o final q retorna a soma de todos os itens
});
console.log(sum);
// reduce========================================================
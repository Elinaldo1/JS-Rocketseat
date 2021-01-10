//FUNÇÕES=======================================================
/*
quando uso parentese logo após a função estou executando-a imediatamente
sem parenteses apenas referencio a função e a passo como parâmetro de algo
*/
function soma(number1, number2) {
  var resultado = number1 + number2 ;
  //var é visto somente no escopo da função soma
  return resultado;
}
//abaixo jogo a função soma na variável e depois imprime
//pode imprimir sem jogar na var, ex: console.log(soma(2,2))
resultado=soma(2,2)//aqui é outra variável, não é da função soma
console.log('Funções- function soma = '+resultado)

//FIM FUNÇÕES=====================================================
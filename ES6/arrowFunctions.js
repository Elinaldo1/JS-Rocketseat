// ARROW FUNCTIONS===================================
//quando usamos no retorno uma function anônima(sem nome), podemos usar arrow function(entre o parâmetro e a chaves usamos '=>')
const arr = [1,2,3,4,5,8,10];
const arrowfunction = arr.find(function(item){
  // normal
  return item===0;
});

// quando temos apenas um parametro podemos remover os parenteses por volta d'ele
const arrowfunction1 = arr.find(item=>{
  // Arrow Function sem parenteses do param
  return item===0;
});

// quando a função retorna apenas uma resposta e não várias linhas de código, pode excluir as chaves e o return e deixar a instrução na frente da seta
const arrowfunction2 = arr.find(item=>item===0);// Arrow Function sem chaves

// se for retornar um objeto ex:{nome: 'Diego'} tem q usar parenteses por volta
//ex: const find = arr.find(item=>({nome: 'Diego'}));

//FIM ARROR FUNCTIONS=================================
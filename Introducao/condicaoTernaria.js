//CONDIÇÃO TERNÁRIA=============================================
/*
  Quando temos apenas 2 verificações dento do if
*/ 
var sexo ='M'
function vsexo(sexo){

 if (sexo==='M') {
  return 'Masculino';
} else {
  return 'Feminino';
}//forma normal(verbosa)

}
console.log('vsexo '+vsexo(sexo))

var retorno = (sexo==='M')? 'Masculino' : 'Feminino'//forma simplificada(condição ternária)
console.log('Condição ternária = '+retorno)

//FIM CONDIÇÃO TERNÁRIA============================================
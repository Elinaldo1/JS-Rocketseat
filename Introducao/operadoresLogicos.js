//OPERADORES LÓGICOS=============================================
//AND(&&), OR(||), NOT(!=apenas valor, !==valor e tipo)
var sexo = 'M', idade = 2;

if (sexo==='M'&& idade >= 18) {
  console.log ('idade = '+'ok');
}else{
  console.log('idade = '+'inválido')
}
//==armazenar valor da condição na variável==
// var masculino
// if (sexo==='M') {
//   masculino=true
// }else{masculino=false}
// console.log('valor da condição na var = '+masculino)

/*==condição direto na variável
  não precisa de parênteses
  condição sempre retorna true ou false
*/
var masculino = sexo==='M'
console.log(masculino)
//FIM OPERADORES LÓGICOS==========================================
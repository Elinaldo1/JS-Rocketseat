//CONDICIONAIS=====================================================
function retornasexo(sexo){
  //N, M
  //Masculino, Feminino
  //1x'=' define a variável, 2x'=='verifica igualdade de valores das variáveis, 3x'==='verifica igualdade de valor e tipo de variáveis
      // if (sexo==='M') {
      //   return 'Masculino';
      // } else if(sexo==='F') {
      //   return 'Feminino';
      // } else{
      //   return 'Outro';
      // }
  //quando tem várias condições pode usar switch em vez de if
     switch (sexo) {
       case 'M':
         return 'Masculino';
       case 'F': 
         return 'Feminino';    
         break;
       default:
         return 'Outro'
         break;
     }
    }
    var resultado = retornasexo('M');
    console.log('Condicionais - função retornasexo =  '+resultado)
  //FIM CONDICIONAIS===============================================
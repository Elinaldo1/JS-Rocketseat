//INTERVALO E TIMEOUT========================
/*
quando uso parentese logo após a função estou executando-a imediatamente
sem parenteses apenas referencio a função e a passo como parâmetro de algo
*/
   function exibealgo() {
     console.log('Hello World');
   }
   function exibealgo2() {
     console.log('Hello World2');
   }
//abaixo apenas referencio a função, sem parenteses
   setInterval(
     /*executa algo a cada intervalo de tempo*/
     exibealgo, 1000//1 segundo
     );

    setTimeout(
      /*executa após um intervalo de tempo*/
      exibealgo2, 3000//3 seg
      ); 

      setTimeout(exibealgo2,5000)
//FIM INTERVALO E TIMEOUT========================
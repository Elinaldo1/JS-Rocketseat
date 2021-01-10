  //Exercicio1===================================  
  var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "centro",
    cidade: "São Paulo",
    uf: "SP"
  };
  
  function exercicio1() {
    return console.log(
      '1 - O usuário mora em '+endereco.cidade+' / '+endereco.uf+
      ', no bairro '+endereco.bairro+', na rua "'+endereco.rua+
      '" com nº '+endereco.numero+'.' 
    );
  }
  exercicio1()
//FIM Exercicio1===================================   

//Exercicio2===================================  
  function exercicio2(x,y) {
    for (let i = x; i < y; i++) {
      if (i%2===0) {
        console.log('2 - '+i)
      } 
    }
  }
  exercicio2(1,8)
//FIM Exercicio2===================================  

//Exercicio3=================================== 
function temHabilidades(skills){
// vetor.indexOf(item) retorna a posição do item no vetor
//caso não encontre retorna -1
  var resultado = skills.indexOf("R");
  resultado=(resultado!==-1)?true:false
  console.log('3 - '+resultado)
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidades(skills);

//FIM Exercicio3=================================== 

//Exercicio4=================================== 
function experiencia(anos){

   if(anos>=0 && anos <=1){
      return 'Iniciante';
   }else if (anos>1 && anos <=3){
      return 'Intermediário';
   }else if(anos>3 && anos <=6){
      return 'Avançado';
   }else if(anos>=7){
      return 'Jedi Master';
   }
}
var anosEstudo = 20;
console.log('4 - '+experiencia(anosEstudo));
//FIM Exercicio4=================================== 

//Exercicio5=================================== 
var usuarios = [
  {
    nome:'Elinaldo',
    habilidades:["Javascript", "ReactJS", "Redux"]
  },
  {
    nome:'Diego',
    habilidades:["VueGS", 'Ruby on Raills', "Elixir"]
  }
];
function exercicio5() {
  for (const iterator of usuarios) {
    console.log('5 - O '+iterator.nome+ ' possui as habilidades: '+ iterator.habilidades.join(', '))
  }; 
}
exercicio5()
//FIM Exercicio5=================================== 

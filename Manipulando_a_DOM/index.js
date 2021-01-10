  //eventos inline=============================
  function mostraAlerta(){
    alert("Botão Pressionado")
  };
 //fim eventos inline============================= 

//TRABALHANDO COM A DOM(árvore de elementos html) =================================== 
/*
referenciar elementos através do JS,
document é uma var global q reverencia a DOM
abaixo armazeno nas variáveis a referência p determinado elemento na DOM com a sintaxe getElementBy
*/ 
  var inputElement = document.getElementById("nome");//traz 1 único elemento
  var tagElements = document.getElementsByTagName('input')[1];//retorna um vetor com todas as tags 'input', utilile [] no fim para o índex do elemento
  var classElements = document.getElementsByClassName('nome');//retorna um vetor com todas as class 'nome', utilize [] no fim para o índex do elemento
  console.log(inputElement);
  console.log(tagElements);
  console.log(classElements);

  /*
  COM querySelector podemos descartar getElementsBy
  querySelector nos permite andar pela DOM até encontrar o elemento escolhido 
  */ 
  inputElement=document.querySelector('div#app1 input');//traz um elemento input específico
  console.log(inputElement)

  inputElement=document.querySelector('input[name=nome]');//traz elemento input com atributto name=nome, atributos sempre entre[] (para buscar pela class seria elemento.nomeclass), estou referenciando uma propriedade do elemento
  console.log(inputElement)

  inputElement=document.querySelector('input');//traz o 1º elemento input na DOM
  console.log(inputElement)

  inputElement=document.querySelectorAll('input');//traz vetor com todos os elementos input na DOM
  console.log(inputElement)

  inputElement[1].onclick  =function() {
    if (inputElement[1].value!=='') {
      alert(inputElement[1].value + '\n input clicado,\n referenciando funções pelo JS');
    } else {
      alert('vazio, escreva algo')
    }  
  }//disparando eventos do JS p/ o HTML, recomendado, assim não suja o HTML, aprendemos a manipular os elementos da DOM com JS

//TRABALHANDO COM A DOM(árvore de elementos html) =====================================

//LIDANDO COM ELEMENTOS=================================
//ini criar elemento com appendChild=====================
 var linkElement= document.createElement('a');//criei o  elemento link(tag 'a')
 linkElement.setAttribute('href','http://google.com');//para criar um atributo use:('atributo,nome atributo')
 linkElement.setAttribute('class','google');//atributo class

 
 var textElement = document.createTextNode('Home Google');//criar texto do elemento
 linkElement.appendChild(textElement);//inserir texto(elemento filho) no elemento pai('linkElemento')

 var containerElement= document.querySelector('#app1');//define onde criar o elemento filho(linkElement), elementopai(containetElement)
 ///containerElement.appendChild(linkElement);//criar elementofilho(linkElement) no elementopai(containerElement)

containerElement;//altero a class aqui para usar abaixo(ALTERANDO ESTILOS)

var divElement= document.createElement('div');
divElement.setAttribute('id','app3');
divElement.setAttribute('class','estilo')

var containerDiv=document.querySelector('#app');
containerDiv.appendChild(divElement);


//fim criar elemento com appendChild=====================


//ini remover elemento com appendChild=====================
var removeElement = document.querySelector('#nome');//define elementofilho a ser excuido
// containerElement.removeChild(removeElement);//containerElement é o elementopai de removeElement
//fim remover elemento com appendChild=====================
//FIM LIDANDO COM ELEMENTOS=================================

//INI ALTERANDO ESTILOS=================================
 var boxElement=document.querySelector('#app');

 //para alterar estilos use .style.prop
 boxElement.style.width = 100;
 boxElement.style.height = 100;
 boxElement.style.backgroundColor='#ff1'//background-color, se não usar hífen a 1º letra após o mesmo será maiúscula(bacgrounColor)

//FIM ALTERANDO ESTILOS=================================

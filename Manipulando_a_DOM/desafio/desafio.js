var divElement=document.createElement('div');
divElement.setAttribute('id','app');
/////////////
var btElement = document.createElement('button')
btElement.setAttribute('class','criarDiv');
btElement.setAttribute('onclick','criar()')

var textBt = document.createTextNode('Criar Quadro');
btElement.appendChild(textBt);

var container1=document.querySelector('body');
container1.appendChild(divElement);
divElement.appendChild(btElement);

// btElement.onclick=criar;


function criar() {
  
  var criaDiv = document.createElement('div');
     criaDiv.setAttribute('class','cdiv')
     criaDiv.setAttribute('onclick','excluiDiv()')
  // var textDiv=document.createTextNode('Exercicio 1');
  //     criaDiv.appendChild(textDiv);

  var containerDiv2=document.querySelector('#app');
  containerDiv2.appendChild(criaDiv);
  
  criaDiv.style.width='100px';
  criaDiv.style.height='100px';
  criaDiv.style.backgroundColor='#f11';
  criaDiv.style.borderRadius='10px';

  var divContainer = document.querySelectorAll('.cdiv')

 for (let i = 0; i < divContainer.length; i++) {
        const element = divContainer[i];
        element.setAttribute('id','div'+i);
         //console.log(element.innerHTML)
        if(element.innerHTML===''){
          var textDiv=document.createTextNode      ('Exercicio 1 div'+i);
          element.appendChild(textDiv);
        }
}
};


//EXERCÍCIO2=========================================
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
    
  }
  return color;
}


var elementCor

document.body.onmouseover = function(){
 //esta função retorna o elemento(target) q recebe o evento(ex: onclick, onmousemove) 
var newColor = getRandomColor(); 

  elementCor=event.target;
  //console.log(elementCor.className);
  if (elementCor.className==='cdiv') {
    elementCor.style.backgroundColor=newColor;
  }
}

function excluiDiv() {
var containerDiv2=document.querySelector('#app');
    var divEcluir=document.querySelector('#'+elementCor.id);
    // console.log('#'+elementCor.id)
    containerDiv2.removeChild(divEcluir);
}
//FIM EXERCÍCIO2===========================================  

//EXERCÍCIO3=========================================

var nomes = ["Diego", "Gabriel", "Lucas" ];

var listaUl = document.createElement('ul');
   container1.appendChild(listaUl);

for (const iterator of nomes) {

 var listaLi = document.createElement('li');
 var listaNomes = document.createTextNode(iterator);
 listaLi.appendChild(listaNomes);
 listaUl.appendChild(listaLi);

}

//FIM EXERCÍCIO3=========================================


//FIM EXERCÍCIO4=========================================
var inputElement = document.createElement('input');
   inputElement.setAttribute('type','text');
   inputElement.setAttribute('name','nome');

var buttonElement = document.createElement('button');
   buttonElement.setAttribute('onclick','adcionar()');
   var textoButton = document.createTextNode('Adicionar');
       buttonElement.appendChild(textoButton);

container1.appendChild(inputElement);
container1.appendChild(buttonElement);        

function adcionar(){
  
  if (inputElement.value==='') {
      alert('Não pode está vazio');
  }else{

      var novaLi = document.createElement('li');
      var novoItem = document.createTextNode(inputElement.value);
      console.log(inputElement.value)
      
      novaLi.appendChild(novoItem);
      listaUl.appendChild(novaLi);
      inputElement.value=''
  }
}
//FIM 
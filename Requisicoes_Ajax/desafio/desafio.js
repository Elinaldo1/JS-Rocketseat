

function checaIdade(idade) {
  return new Promise (function(resolve, reject){ 
    if (idade>=18) {
      resolve();
    }else{
      reject();
    }
  });
}


  
setTimeout(() => {checaIdade(2)
.then(() =>
  console.log('maior 18')
)
.catch(()=>
  console.log('Menor 18')
);}, 2000);

var inputElement = document.querySelector('.text');
var buttonElement = document.querySelector('.botao');
var lista = document.querySelector('ul');
var repogit = []



function renderRepo(){
  var user = inputElement.value
  lista.innerHTML = 'Carregando...'
  axios.get(' https://api.github.com/users/'+user+'/repos')
  .then((response)=>{
       //console.log(response)
       var posit = repogit.length
           posit += 1 
       repogit.push('repo'+posit);
       var textoh1 = document.querySelector('h1');
       textoh1.innerHTML=(response.data[0].full_name+'/'+response.data[0].language)
       render()  
      }       
  )
  .catch((error)=>
       lista.innerHTML='Usuário não existe'
  );
  
}

buttonElement.onclick = renderRepo

function render (){
   lista.innerHTML='';
  for (const iterator of repogit) {
    
    var listaLi = document.createElement('li')
    var textoLista = document.createTextNode(iterator)
  
    listaLi.appendChild(textoLista)
    lista.appendChild(listaLi)
   }; 
}
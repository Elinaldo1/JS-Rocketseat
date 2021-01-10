var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

/*var todos = [
  'Fazer Café',
  'Estudar',
  'Praticar'
];substituido pelo arquivo json do localstorage*/

//(método) JSON.parse (text: string, reviver ?: 
//(this: any, key: string, value: any) => any): any
//Converte uma string JavaScript Object Notation (JSON) em um objeto.
// @param text - Uma string JSON válida.
// @param reviver
// Uma função que transforma os resultados. 
// Esta função é chamada para cada membro do objeto. 
// Se um membro contém objetos aninhados, 
// os objetos aninhados são transformados antes do objeto pai.
/*||[]= se não houver conteúdo(null) no JSON.parse ou 
o mesmo não retorne um valor aceitável criamos e iniciamos um vetor vazio 
outra forma - if(todos)==null{todos = []}*/

var todos = JSON.parse(localStorage.getItem('list_todo'))||[];//if(todos)==null{todos = []}


function renderTodo() {

  listElement.innerHTML = ''; //esvaziar a lista antes de receber a nova

  for (const todo of todos) {
    var todoElement = document.createElement('li');
    var linkElement = document.createElement('a');
    var  linkText = document.createTextNode('Excluir');
    var todoText = document.createTextNode(todo);

    var posClick = todos.indexOf(todo);//retorna a posição do item no vetor
    linkElement.setAttribute('onclick','limpaTodo('+posClick+')');
    
    linkElement.setAttribute('href',"#");
    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);

  }
  
}
renderTodo();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);//add 1 item ao final do array
  inputElement.value = '';
  renderTodo();
  saveToStorage();
}

function limpaTodo(pos) {
  todos.splice(pos,1);//remove itens do array a partir do index indicado, splice(index, qtd)
  renderTodo();
  saveToStorage();
}

buttonElement.onclick = addTodo;


//JSON=JavaScript Object Notation
//Tem a estrutura muito parecida com um objeto no JS
//Porém é uma string
function saveToStorage() {
  //JSON é uma var global
  //O método stringify tranforma um vetor em uma string(JSON)
  localStorage.setItem('list_todo',JSON.stringify(todos));
  //localStorage é uma var global
  //o método seItem(chave,valor) salva um item no storage
  //como o segundo param é string, tranformo o vetor todos em string
  //para verificar no console, vá em applications=>LocalStorage
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//CLASSES==================================================
var list = /*#__PURE__*/function () {
  function list() {
    _classCallCheck(this, list);

    this.todos = [];
  }

  _createClass(list, [{
    key: "addtTodo",
    value: function addtTodo() {
      this.todos.push('novo todo');
      console.log(this.todos);
    }
  }]);

  return list;
}();

var todoList = /*#__PURE__*/function (_list) {
  _inherits(todoList, _list);

  var _super = _createSuper(todoList);

  //constructor é o 1º método executado ao iniciar/instancia a classe
  //pode-se definir ações que disparam assim q o obj é iniciado
  //ou iniciar variáveis
  function todoList() {
    var _this;

    _classCallCheck(this, todoList);

    _this = _super.call(this);
    _this.usuario = 'SuperChoque';
    return _this;
  }

  _createClass(todoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log('Usuário - ' + this.usuario);
    } // 
    // constructor(){
    //     this.todos = [];
    // }
    // addtTodo(){
    //   this.todos.push('novo todo');
    //   console.log(this.todos);
    // }

  }]);

  return todoList;
}(list);

var minhaLista = new todoList();

document.getElementById('novotodo').onclick = function () {
  minhaLista.addtTodo();
  localStorage.setItem('listatodo', JSON.stringify(minhaLista.todos));
  localStorage.setItem('listatodo1', JSON.stringify(minhaLista.todos));
};

minhaLista.mostraUsuario(); // FIM CLASSES=====================================================
// CONST & LET========================================
//FIM CONST & LET=====================================
//INI OPERAÇÔES EM ARRAY======================================
// map=============================================================

var arr = [1, 2, 3, 4, 5, 8, 10]; //map serve p/ percorrer o vetor e retornar algo de dentro
//o param da fun map é outra função q retorna cada item dentro da mesma, ex: array.map(function(item -são todos os itens do array){})
//posso passar o index tbm, ex: array.map((item,index)=>{})
// formar novo array

var newArr = arr.map(function (item
/*todos os itens do array passado*/
, index) {
  return item + '+' + index + ' = ' + (item + index); //aqui para cada item de arr eu somo a posição do item no array
});
console.log(newArr); // map============================================================
// reduce=========================================================
// Reduce - cosome todo o vetor e tranforma numa única info(var)
//geralmente um número

var sum = arr.reduce(function (total, next) {
  return total + next; // reduce realiza um loop, no ciclo 1 o total será 0 e o next
  // será 1(1º item do array),total = 0+1(total+next)
  //segue assim até o final q retorna a soma de todos os itens
});
console.log(sum); // reduce========================================================
//FILTER========================================

var filter = arr.filter(function (item) {
  //faz um loop na array e retorna valor true ou false para cada item
  //a expressão aqui dentro prcisa obrigatorimente retornar true ou false, aqui retorna só num pares
  return item % 2 === 0;
});
console.log(filter); //FILTER========================================
// find==========================================
//  verificar se existe alguma info dentro do array, retorna true ou false, quando encontra o valor retorna o mesmo, se não retorna underfined

var find = arr.find(function (item) {
  return item === 0;
});
console.log(find); // find============================================
//FIM OPERAÇÔES EM ARRAY======================================
// ARROW FUNCTIONS===================================
//quando usamos no retorno uma function anônima(sem nome), podemos usar arrow function(entre o parâmetro e a chaves usamos '=>')

var arrowfunction = arr.find(function (item) {
  // normal
  return item === 0;
}); // quando temos apenas um parametro podemos remover os parenteses por volta d'ele

var arrowfunction1 = arr.find(function (item) {
  // Arrow Function sem parenteses do param
  return item === 0;
}); // quando a função retorna apenas uma resposta e não várias linhas de código, pode excluir as chaves e o return e deixar a instrução na frente da seta

var arrowfunction2 = arr.find(function (item) {
  return item === 0;
}); // Arrow Function sem chaves
// se for retornar um objeto ex:{nome: 'Diego'} tem q usar parenteses por volta
//ex: const find = arr.find(item=>({nome: 'Diego'}));
//FIM ARROR FUNCTIONS=================================
//VALORES PADRÃO=================================
// colocar valores padrão para os parâmetros

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a + b;
};

console.log(soma()); //vai retornar NaN
//FIM VALORES PADRÃO=================================
//DESESTRUTURAÇÃO=================================
// formas de buscar infos de um objeto

var user = {
  nome: 'Diego',
  idade: '20',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
console.log(user);
console.log(user.nome, user.idade, user.endereco.cidade);
var nome = user.nome,
    idade = user.idade,
    estado = user.endereco.estado; //aqui antes do igual listo entre chaves as propriedades que quero bucar do objeto após o igual

console.log(nome, idade, estado);

function mostranome(user) {
  //sem desestruturação, apenas passo o objt como param da função e no retorno obj.propriedade
  console.log(user.nome);
}

mostranome(user);

function mostranome1(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  //posso usar desestruturação nos params da função usando o nome da propriedade do objt entre chaves no param
  console.log(nome, idade);
}

mostranome1(user); //DESESTRUTURAÇÃO=================================
//OPERADORES REST/SPREAD===========================
//  utiliza os 3 pontos um ao lado do outro(/...)
//como não foram acoplados a vs principal do babel vamos instalá-los como plugins(yarn add @babel/plugin-proposal-object-rest-spread)
// rest==============================
// rest--serve para pegar o resto das propriedades

var user1 = {
  apelido: 'Diego',
  anos: '20',
  local: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; //em objetos

var anos = user1.anos,
    restante = _objectWithoutProperties(user1, ["anos"]); //aqui pego a propriedade anos e todas as outras ficam na variavel restante(...variavel)


console.log('rest ' + anos);
console.log(restante);
var a = arr[0],
    b = arr[1],
    c = arr.slice(2); //em vetores

console.log(arr);
console.log(a);
console.log(b);
console.log(c); //com parametros

var somar = function somar(a, b) {
  return a + b;
};

console.log(somar(10, 10)); //abaixo utiliso rest(...params)

var somar1 = function somar1() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params;
};

console.log(somar1(10, 10));

var somar2 = function somar2() {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(somar2(10, 10, 10)); //rest================================
// spread===================================
//repassa as informações de umobjetou array para outra estrutura de dados

var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8]; // unir arr1 e arr2

var arr3 = [].concat(arr1, arr2); //utilizado dessa forma copia 1 array inteiro.

console.log(arr3);
console.log(arr1.concat(arr2)); //um teste fora parte, função concatenar
// criar um novo objeto com todas as propriedades de outro e mudar apenas 1 delas, muito utilizado no JS

var user2 = _objectSpread(_objectSpread({}, user1), {}, {
  apelido: 'user2'
}); //copiei as propriedades de user1 e mudei apenas o apelido


console.log(user2); // spread===================================
//FIM OPERADORES REST/SPREAD===========================
//TEMPLATES LITERALS===========================
// incluir variáveis dentro de strings
//usar (crase $) para concatenar em vez de +

var nome1 = 'Super';
var nome2 = 'Choque';
console.log("Sou o " + nome1 + nome2);
console.log('Sou o ${nome1}');
console.log(nome1.concat(nome2)); //FIM TEMPLATES LITERALS===========================
// OBJECT SHORT SINTAXE===================
//sintaxe curta de objeto
//quando o nome da prop é igual ao nome da var dentro do obj pode deixar só um deles sem os dois pontos

var user4 = {
  nome1: nome1,
  //nome1: nome1
  nome2: nome2,
  //nome2: nome2
  empresa: 'JS'
};
console.log(user4); // OBJECT SHORT SINTAXE======================

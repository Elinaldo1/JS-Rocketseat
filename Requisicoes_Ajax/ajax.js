/*Ajax é uma forma de requisitar
infos do servidor sem precisar atualizar a pg*/

var xhr = new XMLHttpRequest();//esta classe do JS é quem nos
                               //acesso a funcionalidades do Ajax
                               //para poder recuperar info do servidor
//vamos consumir a url da api de users GhitHub via Ajax

//para buscar uma info o método é GET
xhr.open("GET",'https://api.github.com/users/diego3g');
xhr.send(null);
/*
pra ver se conectou no console-network-Headers Status Code deve está 
na cor verde'200 ok', em preview estará os dados retornaodos
*/
  /*
isto é uma requisição(req) assíncrona, não acontece no mesmo fluxo do script
o JS não espera a req terminar pra continuar sua execução
por isso devemos verificar qndo carregou pra alguma ação,
abaixo está a verificação
*/
xhr.onreadystatechange = function () {

if (xhr.readyState===4) {//caso carregamento esteje completo
  //o retorno é um JSON, será transformado em ojeto
  //observe q tem um pequeno atraso no retorno
  //resolvido com uma promise(veja o arqivo promise.js)
  console.log(JSON.parse(xhr.responseText));
}
}

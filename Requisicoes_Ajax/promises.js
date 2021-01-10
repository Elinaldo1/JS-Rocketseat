var minhaPromise = function() {
  return new Promise(function (resolve, reject){
    //resolve e reject tbm são funções de retorno
    //resolve(.then) quando retorna resultado ok
    //reject(.catch) contrário do resolve
    var xhr = new XMLHttpRequest();
    xhr.open ("GET", 'https://api.github.com/users/diego3g');
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState===4) {//se o carregamento está completo
        if (xhr.status===200){//se a requisição teve sucesso(CodeStaus=200 ok)
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('erro na requisição');
        }        
      }
    }
  });
}

//caso tenha um código que dependa do resulta da api buscada
//o lugar de inseri-lo será no .then
minhaPromise()
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
     console.warn(error);
  });


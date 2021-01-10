
// o Axios é um encapsulamento por volta do xmlHTTPRequest que 
// conhecemos no ajax e com promises
//por baixo o que está em execução é uma xmlhttprequest
//nos ajuda a retornar os valores mais facilmente
// ex: na resposta da api no ajax e promises precisamos fazer um JSON.parse
//o axios já entende que a resposta é um json e retorna um objeto JS
//ESTUDAR MAIS REQUISIÇÃO ASSÍNCRONA COM AXIOS

axios.get('https://api.github.com/users/diego3g')
//apis maps e estados criei p/ estudo no reactnative1
//'http://127.0.0.1:8000/maps'//127.0.0.1 é o endereço do meu pc
//'http://192.168.0.106:8000/maps'//o endereço aqui é do metro bundler
//'http://192.168.0.106:3030/estados'
//'https://api.giithub.com/users/diego3g')
  .then(function(response){
    console.log(response);
    console.log(response.data);
  })
  .catch(function(error){
     console.warn(error);
  });
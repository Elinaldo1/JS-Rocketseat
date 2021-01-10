
class Usuario {
  constructor(email, senha){
    this.user={
      email,
      senha,
    }
  };
  
  isAdmin = true

};

class Admin extends Usuario{
   constructor(){
     super();
    this.isAdmin=false;
   }
  
};

const user1  = new Usuario('emailteste','123');
const Adm1 = new Admin('emailteste2','123')
console.log(user1);
console.log(Adm1.isAdmin);

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const idade = usuarios.map((item)=>item.idade)
 console.log(idade);

 const empresa = usuarios.filter((item)=> item.empresa==='Rocketseat' && item.idade>=18);
 console.log(empresa)
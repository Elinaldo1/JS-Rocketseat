//CLASSES==================================================
class list{
  constructor(){
    this.todos = [];
}
addtTodo(){
  this.todos.push('novo todo');
  console.log(this.todos);
}
}

class todoList extends list{
    //constructor é o 1º método executado ao iniciar/instancia a classe
    //pode-se definir ações que disparam assim q o obj é iniciado
    //ou iniciar variáveis
    constructor(){
      super();
      this.usuario = 'SuperChoque';
    }

    mostraUsuario(){
      console.log('Usuário - '+this.usuario);
    }
    // 
    // constructor(){
    //     this.todos = [];
    // }
    // addtTodo(){
    //   this.todos.push('novo todo');
    //   console.log(this.todos);
    // }
}

const minhaLista = new todoList();
document.getElementById('novotodo').onclick = ()=> {
  minhaLista.addtTodo();
  localStorage.setItem('listatodo',JSON.stringify(minhaLista.todos)
  );
  localStorage.setItem('listatodo1',JSON.stringify(minhaLista.todos)); 
}
minhaLista.mostraUsuario();

// FIM CLASSES=====================================================
// find==========================================
  //  verificar se existe alguma info dentro do array, retorna true ou false, quando encontra o valor retorna o mesmo, se não retorna underfined
  const arr = [1,2,3,4,5,8,10];
  const find = arr.find((item)=>{
    return item===0;
  });
  console.log(find);
// find============================================
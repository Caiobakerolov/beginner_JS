function myScope() {
  const form = document.querySelector('.form'); // fiz da CLASS form uma constante para nao precisar ficar esquecrevendo muito
  const result = document.querySelector('#output'); // fiz do ID output uma constante para nao precisar ficar esquecrevendo muito

  // um array vazio para os itens serem incluidos
  const people = [];  
  
  // no caso essa funcao e como um expiao, se o evento do click acontecer ele ira executar esta funcao
  function receiveEventForm (event) { 

    
    event.preventDefault(); 
    const name = form.querySelector('#name'); // selecionando um input que esta dentro do formulario
    const surname = form.querySelector('#surname'); // selecionando um input que esta dentro do formulario
    const weight = form.querySelector('#weight'); // selecionando um input que esta dentro do formulario
    const height = form.querySelector('#height'); // selecionando um input que esta dentro do formulario


      // aqui foi criado um objeto para ser incluido dentro do array
    people.push({ 
      name: name.value,
      surname: surname.value,
      weight: weight.value,
      height: height.value
    });

    console.log(people);


    // aqui ele esta jogando os itens para dentro do HTML para sem impresso na tela no caso dentro do ID output
    result.innerHTML += `<p><strong> ${name.value} ${surname.value} ${weight.value} ${height.value} </strong></p>`; 
       
  }

  // aqui esta cliando um evento no botao para quando eu clicar executar a funcao
  form.addEventListener('submit', receiveEventForm);  

}

myScope();
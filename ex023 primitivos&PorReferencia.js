/* 
primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)

referencia (mutavel) - array, object, function - passados por referencia
*/


let a = 'A'; 
let b = a; // estou fazendo uma copia de uma variavel para a outra, porem ambas sao independentes
console.log(a, b);

a = 'Outra coisa'; 
console.log(a, b); // nesse caso o B nao mudo porque, o parametro de A foi passado depois da primeira alteracao


console.log('---------');

// os primitivos quando passo altero ou inclui 1 valor, eles sao copiados para os outros, ELES REFLETEM O QUE FOR FEITO UM PARA O OUTRO

let c = [1,2,3];
let d = c; // para deixar as variaveis independentes eu tenho que passar [...c] nesse caso o D nao ira mais acompanhar o C no que for feito daqui pra frente . . . exemplo: let d = [...c]; ele fez uma copia do c!!!
let e = d;
console.log(c, d);

c.push(4);
console.log(c,d);

d.pop();
console.log(d,c);

c.push('Luiz');
console.log(c);


console.log('---------');

const person = {
  name: 'Caio',
  surname: 'Bakerolov'
};
const person1 = {...person}; // isso e chamado como expred, o person1 recebeu o valor de person, mais no momento que foi passado o expred o person1 virou independente, entao o que acontecer daqui em diante nao alterara o person1 so o person . . . 

person.name = 'Joao'; // agora se eu nao passar o expred e efetuar esta funcao o valor de person1 sempre ira acompanhar o que for feito no person
console.log(person1);
console.log(person);
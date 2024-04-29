
function salutation(nome) {
  console.log('Bom dia ' + nome + ' !');  
  console.log(`Bom dia ${nome} !`);  

}

const variable = salutation('Luiz');

console.log('--------------');

function salutation1(nome1) {   
  return `Bom dia ${nome1} !`;  
}

const variable1 = salutation1('Luiz');
console.log(variable1);

console.log('--------------');

function sum (x, y) {
  const result = x + y;
  return result;
}

console.log(sum(2,2));
console.log(sum(3,7));
console.log(sum(5,12));

console.log('--------------');

function sum1 (w, z) {
  const result1 = w * z;
  return result1;
  console.log('Ola mundo'); // tudo que vem abaixo de return nao sera executado
}

const result1 = sum1(2,5); // se eu passar 2 parametros na funcao (w,z) eu sou obrigado a passar os parametro embaixo tambem, caso nao foi passado dara NaN
console.log(result1);

console.log('--------------');

function sum2 (f = 1, d = 1) { // no caso desta forma se eu nao passar 1 parametro ele usara o 1 no seu lugar
  const result2 = f * d;
  return result2; 
}

const result2 = sum2(5); 
console.log(result2);

console.log('--------------')



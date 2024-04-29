const nome = 'Caio';
console.log(nome);

console.log('--------------------');

/*
const nome2 = 'Bakerolov';
nome2 = 'Aline';
console.log(nome2)

uma const nao pode tem um valor atribuido ou alterado
*/

const firstNumber = 5; // number
const secondNumber = 10;
const thirdNumber = '5'; // string
const result = firstNumber * secondNumber;
const resultDouble = result * 2;
let resultTriplicate = result * 3;
resultTriplicate = resultTriplicate + 5; // com a const eu ja nao consigo fazer issso !

console.log(result);
console.log(resultDouble);
console.log(resultTriplicate);


console.log('--------------------');
console.log(typeof(firstNumber)); // para saber o tipo do item = NUMBER
console.log('--------------------');
console.log(typeof(thirdNumber)); // STRING
console.log('--------------------');

console.log(typeof(firstNumber + secondNumber));
console.log(typeof(secondNumber + thirdNumber));
console.log(secondNumber + thirdNumber); // quando um dos itens e string ele nao soma ele concatena, porem se for outros operadores ele funciona, normalmente
console.log(secondNumber * thirdNumber);
console.log(secondNumber / thirdNumber);
console.log(secondNumber - thirdNumber);

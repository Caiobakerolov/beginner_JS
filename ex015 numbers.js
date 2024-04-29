let number1 = 1; // NUMBER
let number2 = 2.5; // NUMBER
console.log(number1.toString() + number2); // o toString torno o numero em uma string e assim ele nao soma ele concatena porem se eu consultar o number1 ele ainda sera um NUMBER
console.log(typeof number1); 

console.log('-------------');

let number3 = 1; // NUMBER
number3 = number3.toString(); // desta forma eu estou alterando o number em uma string para sempre e nao somente na hora de soma ou fazer alguma operacao e se eu ver o tipo dele ele alterou para string
console.log(typeof number3);

console.log('-------------');

let number4 = 1500;
console.log(number4.toString(2)); // passando o parametro dentro do toString ele me mostra a representacao binaria do valor passado

console.log('-------------');

let number5 = 10.549874231654;
console.log(number5.toFixed(2)); // ele limita quantos casas decimais tera, porem ele nao alterar o valores real so para a exibicao que ele limita o valor

console.log('-------------');

let number6 = 10;
let number7 = 11.87;
console.log(Number.isInteger(number6)); // O isInteger confere se e um numero inteiro ou nao
console.log(Number.isInteger(number7));

console.log('-------------');

let number8 = 12;
let number9 = 11;
let temp = number8 * 'ola';
console.log(temp);
console.log(Number.isNaN(temp)); // ele verificar se a conta e um NaN como false ou true

console.log('-------------');

// IEEE 754-2008
let number10 = 0.7;
let number11 = 0.1;
console.log(number10 + number11);
console.log(Number.isInteger(number10)); // retorna se o numero e inteiro ou nao 

console.log('-------------');

let number12 = 0.7;
let number13 = 0.1;
number12 += number13; // number12 = number12 + number13
console.log(number12);
console.log(Number.isInteger(number12)); // retorna se o numero e inteiro ou nao 

console.log('-------------');

let number14 = 0.7;
let number15 = 0.1;
number14 += number15;
number14 = parseFloat(number14.toFixed(2));
console.log(number14);
console.log(Number.isInteger(number14)); // retorna se o numero e inteiro ou nao 

console.log('-------------');

let number16 = 0.7;
let number17 = 0.1;
number16 += number17; //0.8
number16 += number17; // 0.9
number16 += number17; // 1.0
number16 += number17; // 1.1
number16 += number17; // 1.2 
number16 += number17; // 1.3
number16 += number17; // 1.4
number16 += number17; // 1.5 
number16 += number17; // 1.6 
number16 += number17; // 1.7
number16 += number17; // 1.8
number16 += number17; // 1.9
number16 += number17; // 2.0

number16 = Number(number16.toFixed(2));
console.log(number16);
console.log(Number.isInteger(number16)); // retorna se o numero e inteiro ou nao 

console.log('-------------');

let number18 = 0.7;
let number19 = 0.1;
number18 = ((number18 * 100) + (number19 * 100)) / 100; // 0.8  . . .  desta forma nao da variacao
number18 = ((number18 * 100) + (number19 * 100)) / 100; // 0.9  . . .  desta forma nao da variacao
number18 = ((number18 * 100) + (number19 * 100)) / 100; // 1.0  . . .  desta forma nao da variacao
console.log(number18);
console.log(Number.isInteger(number18));// retorna se o numero e inteiro ou nao 
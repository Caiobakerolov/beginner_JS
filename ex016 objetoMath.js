let number1 = 9.54987;
let number2 = Math.floor(number1); // arredonda o numero para baixo
console.log(number2);

console.log('----------------');

let number3 = 9.54987;
let number4 = Math.ceil(number3); // arredonda o numero para cima
console.log(number4);

console.log('----------------');

let number5 = 9.51;
let number6 = Math.round(number5); // retorna um numero arredondado para o mais proximo
console.log(number6);

console.log('----------------');

let number7 = 9.49;
let number8 = Math.round(number7); // retorna um numero arredondado para o mais proximo
console.log(number8);

console.log('----------------');


console.log(Math.max(1,2,3,4,5,-78,-42,-46,-90)); // ele retorna o maior numero passado como parametro

console.log('----------------');

console.log(Math.min(1,2,3,4,5,-78,-42,-46,-90)); // ele retorna o menor numero passado como parametro

console.log('----------------');

console.log(Math.random()); // gera um numero aleatorio com varias casas decimais de 0 a 1

console.log('----------------');

const random = Math.random() * (10 - 5) + 5 ; // desta forma ele vai me dar um numero com casas decimais entre 5 e 10
console.log(random); 

console.log('----------------');

const random1 = Math.round(Math.random() * (10 - 5) + 5) ; // colocando o ROUND primeiro, ele ira passar um numero entre 5 e 10 mais sem casas decimais, no caso ele esta arredondando o calculo
console.log(random1); 

console.log('----------------');

console.log(Math.PI); // mostra o valor de PI

console.log('----------------');

console.log(Math.pow(2, 10)); // eleva um numero a outro
console.log(2 ** 10); // faz a mesma funcao que a de cima

console.log('----------------');

let number10 = 9;
let number11 = 25
console.log(number10 ** (1/2)); // calculando a raiz quadrada
console.log(number11 ** 0.5); // calculando a raiz quadrada

console.log('----------------');

console.log(100 / 0); // retorna um infinity porque no caso seria um numero imenso!!! e no caso ele e aviliado com TRUE

console.log('----------------');
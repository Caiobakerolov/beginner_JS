//            01234567891123  <- indice
const name = 'Caio Bakerolov';
console.log(name[10]);

console.log('--------------');

//                   0       1        2    <- indice 
const students = ['Luiz', 'Maria', 'Joao']; // os array sao indexados por elementos e nao por indice
console.log(students);
console.log(students[1]);
console.log(students[2]);

console.log('--------------');

const students1 = ['Luiz', 'Maria', 'Joao'];
students1[0] = 'Eduardo'; // adicionei um elemento no lugar do indice 0, no lugar do LUIZ
console.log(students1);

console.log('--------------');

const students2 = ['Luiz', 'Maria', 'Joao'];
students2[students2.length] = 'Luiza'; // introduz coisas no final do array
students2[students2.length] = 'Fabio';
students2[students2.length] = 'Luana';
console.log(students2);

console.log('--------------');

const students3 = ['Luiz', 'Maria', 'Joao'];
students3.push('Luiza', 'Fabio', 'Luana'); // introduz coisas no final array 
console.log(students2);

console.log('--------------');

const students4 = ['Luiz', 'Maria', 'Joao'];
students4.unshift('Luiza', 'Jose', 'Carlos'); // adicionar no comeco do array
console.log(students4);

console.log('--------------');

const students5 = ['Luiz', 'Maria', 'Joao', 'Luiza', 'Jose', 'Carlos'];
const removed = students5.pop(); // elimina do final do array
console.log(removed);
console.log(students5);

console.log('--------------');

const students6 = ['Luiz', 'Maria', 'Joao', 'Luiza', 'Jose', 'Carlos'];
const removed1 = students6.shift(); // elimina do comeco do array
console.log(removed1);
console.log(students6);

console.log('--------------');

const students7 = ['Luiz', 'Maria', 'Joao', 'Luiza', 'Jose', 'Carlos'];
delete students7[3]; // elimina do array mais deixa o espaco vazio
console.log(students7);

console.log('--------------');

const students8 = ['Luiz', 'Maria', 'Joao', 'Luiza', 'Jose', 'Carlos'];
console.log(students8[50]); // se eu passar um indice que nao existe, ele nao retornar erro, so retornara que nao existe !!! undefined

console.log('--------------');

const students9 = ['Luiz', 'Maria', 'Joao', 'Luiza', 'Jose', 'Carlos'];
students9.push('Fernando');
students9.push('Ailton');
console.log(students9[6]); // retornada o indice que ainda nem foi adicionar, porque ele respeito a ondem que foi colocada

console.log('--------------');

const students10 = ['Luiz', 'Maria', 'Joao', 'Luiza', 'Jose', 'Carlos'];
console.log(students10.slice(0, 3)); // ira fatiar a array do indice que eu passar inicial ate o indice que eu passar final

console.log('--------------');

const students11 = ['Luiz', 'Maria', 'Joao', 'Luiza', 'Jose', 'Carlos'];
console.log(students11.slice(0, -2));

console.log('--------------');

const students12 = ['Luiz', 'Maria', 'Joao', 'Luiza', 'Jose', 'Carlos'];
console.log(typeof students12); // retorna como um object

console.log('--------------');

const students13 = ['Luiz', 'Maria', 'Joao', 'Luiza', 'Jose', 'Carlos'];
console.log(students13 instanceof Array); // esta no caso perguntando se o que foi passado como parametro e um array

console.log('--------------');


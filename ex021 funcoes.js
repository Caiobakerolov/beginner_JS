// formas diferentes de criar funcao

const squareRoot = function (n) {
  return n ** 0.5;
};

console.log(squareRoot(9));
console.log(squareRoot(16));
console.log(squareRoot(25));

console.log('--------------');

// se eu passar apenas 1 parametro eu posso eliminar as () e os {} . . .

const squareRoot1 = d => d ** 0.5;
console.log(squareRoot1(9));
console.log(squareRoot1(16));
console.log(squareRoot1(25));

console.log('--------------');

// quando eu passar 2 parametros a arrow function tem que ser feita desta forma
const squareRoot2 = (x,y) => { 
  return x ** y;
} 
console.log(squareRoot2(9, 0.5));
console.log(squareRoot2(16, 0.5));
console.log(squareRoot2(25, 0.5));

console.log('--------------');
const array = [1,2,3];
array.push(4);
array[0] = 'Luiz'; // eu posso adicionar algo dentro da array, mais eu nao posso reatribuir um valor a array com eu coloco ela com CONST
// array = 'Outra coisa'; isso nao poder ser feito porque no caso eu estaria reatribuindo um valor a uma array, eu seu tivesse feito com LET isso seria possivel
console.log(array);

console.log('----------------');

// DESTA FORMA FICA MUITO LONGO!!!

// const name = 'Luiz';
// const surname = 'Rafaello';
// const age = 30;

// const name1 = 'Flavio';
// const surname1 = 'Calcanhoto';
// const age1 = 25;

const person = {
  name: 'Luiz',
  surname: 'Miranda',
  age: 25
}

console.log(person.name);
console.log(person.surname);

console.log('----------------');

function createPerson(name, surname, age) {
  return { name, surname, age };
}

const person1 = createPerson('Luiz', 'Miranda', 25);
const person2 = createPerson('Caio', 'Bakerolov', 31);
const person3 = createPerson('Aline', 'Alcantara', 29);
const person4 = createPerson('Ravi', 'Bakerolov', 1.6);
const person5 = createPerson('Gael', 'Bakerolov', 8);

// console.log(person1.name);
// console.log(person1.surname);
// console.log(person1.age);

console.log(person1.name, person1.surname, person1.age);
console.log(person2.name, person2.surname, person2.age);
console.log(person3.name, person3.surname, person3.age);
console.log(person4.name, person4.surname, person4.age);
console.log(person5.name, person5.surname, person5.age);
console.log(person1.name, person2.name, person3.name);

console.log('----------------');

const person6 = {
  name: 'Caio',
  surname: 'Bakerolov',
  age: 31,

  speak() {
    console.log(`Minha idade atual e ${this.age}`); // o THIS significa este objeto neste constexto no caso o PERSON6
  },

  increasingAge () {
    this.age++; // estou adicionando 1 ano a idade
  }
};


person6.speak();
person6.increasingAge(); // chamei a funcao que aumenta a idade e depois pedir pra imprimir novamente
person6.speak();
person6.increasingAge(); 
person6.speak();
person6.increasingAge(); 
person6.speak();
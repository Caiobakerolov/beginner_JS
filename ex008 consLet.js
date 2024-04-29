/* 

caio bakerolov tem 31 anos, pesa 94kg tem 1m83cm de altura e seu imc e de ... seu nascimento foi em 1992

*/

const name = 'Caio';
const surname = 'Bakerolov';
const age = 31;
const weight = 94;
const heightMeters = 1.83;
let bodyMassIndex; // base de  calculo IMC =  peso / (altura * altura);
let birthYear;

bodyMassIndex = (weight / (heightMeters * heightMeters)).toFixed(2);
birthYear = 2023 - age;

console.log(name + ' ' + surname + ', tem ' + age + ' anos, pesa ' + weight + 'Kg e tem ' + heightMeters + 'M de altura, o seu IMC e ' + bodyMassIndex + ' e a data do seu nascimento foi em ' + birthYear + '.');

console.log(`${name} ${surname}, tem ${age} anos, pesa ${weight}Kg e tem ${heightMeters}M de altura, o seu IMC: ${bodyMassIndex}, e nasceu em ${birthYear}.`);
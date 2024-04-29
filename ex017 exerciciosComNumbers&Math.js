const number = Number(prompt('Digite um numero'));

document.getElementById('output').innerHTML = (`Seu numero e: <strong>${number}</strong>`);

document.getElementById('output1').innerHTML = (`Raiz quadrada: <strong>${number ** 0.5}</strong>`);

document.getElementById('output2').innerHTML = (`<strong>${number}</strong> e um numero inteiro: <strong>${Number.isInteger(number)}</strong>`);

document.getElementById('output3').innerHTML = (`E um NaN: <strong>${Number.isNaN(number)}</strong>`);

document.getElementById('output4').innerHTML = (`Arredonda o numero para baixo: <strong>${Math.floor(number)}</strong>`);

document.getElementById('output5').innerHTML = (`Arredonda o numero para cima: <strong>${Math.ceil(number)}</strong>`);

document.getElementById('output6').innerHTML = (`Retorne o numero com duas casas decimais: <strong>${number.toFixed(2)}</strong>`);


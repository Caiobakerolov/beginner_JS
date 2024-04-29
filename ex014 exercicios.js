const name = prompt('Digite seu nome completo');
document.querySelector('#output1').innerHTML = (`Seu nome é: <strong>${name}</strong>`);

document.querySelector('#output2').innerHTML = (`Seu nome tem <strong>${name.length}</strong> letras`);

document.querySelector('#output3').innerHTML = (`A segunda letra do seu nome é: <strong>${name.charAt(1)}</strong> ou <strong>${name[1]}</strong>`);

document.querySelector('#output4').innerHTML = (`Qual o primeiro índice da letra LETRA (a) no seu nome? <strong>${name.indexOf('a')}</strong>`);

document.querySelector('#output5').innerHTML = (`Qual o último índice da letra LETRA (a) no seu nome? <strong>${name.lastIndexOf('a')}</strong>`);

document.querySelector('#output6').innerHTML = (`As últimas 3 letras do seu nome são: <strong>${name.slice(-3)}</strong>`);

document.querySelector('#output7').innerHTML = (`As palavras do seu nome são: <strong>${name.split(' ')}</strong>`);

document.querySelector('#output8').innerHTML = (`Seu nome com letras maiúsculas: <strong>${name.toUpperCase()}</strong>`);

document.querySelector('#output9').innerHTML = (`Seu nome com letras minúsculas: <strong>${name.toLowerCase()}</strong>`);
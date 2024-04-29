

let anString = 'Um texto';

console.log(anString.length); // mostra quantos caracteres tem na string
console.log(anString[4]); // retorna o indice solicitado
console.log(anString.charAt(5)); // mostra o indicice da letra solicitado
console.log(anString.concat(' em um lindo livro')); // concatena uma palavra com a outra
console.log(anString + ' em um lindo livro'); // concatena
console.log(`${anString} em um lindo livro`); // concatena
console.log(anString.indexOf('texto', 4)); // diz em qual indice comeca a palavra que foi passada ... e tambem posso escolher apartir de qual indice eu quero que comece a busca, se o indice escolhido for depois da palavra solicitada ele retornara -1 que significa que nao foi encontrada
console.log(anString.lastIndexOf('texto')); // o last em vez de comecar do comeco da string igual o indexOf ele comeca do final para o inicio e tambem aceita como parametro escolhe um indice
console.log(anString.search(/x/)); //retorna o indice mais ele e diferente porque aceita expressoes regulares
console.log(anString.replace('Um', 'Outra')); //ele substitui uma palavra pela outra mais nao altera a string original
let twoString = "O rato roeu a roupa do rei de roma.";
console.log(twoString.replace(/r/, '#')); // para altera apenas um caractere eu coloco a letra dentro de uma expressao
console.log(twoString.replace(/r/g, '#')); // para altera todos os R de uma expressao apos as barras tenho sempre que passar um G
console.log(twoString.slice(2, 6)); // ele fatia o texto mais o ultimo indice passado ele nao conta entao se quero a palavra toda tenho que colocar um indice a mais
console.log(twoString.slice(-5, -1)); // tambem posso passar negativo ai ele comeca de traz para frente
console.log(twoString.split(' ')); // o split divide a string conforme eu passar o valor como parametroX
console.log(twoString.split('r')); // o split divide a string conforme eu passar o valor como parametro
console.log(twoString.split(' ', 3)); // o split divide a string conforme eu passar o valor como parametro e posso passar quantos espacos eu quero!
console.log(twoString.toUpperCase()); // altera tudo para maiusculo
console.log(twoString.toLowerCase()); // altera tudo para minisculo

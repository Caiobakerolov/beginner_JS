
let varA = 'A'; // B
let varB = 'B'; // C 
let varC = 'C'; // A

// const varATemp = varA

// varA = varB;
// varB = varC;
// varC = varATemp;

[varA, varB, varC] = [varB, varC, varA]; // essa forma e o jeito mais novo de fazer, a forma que esta comentada tambem funciona mais e a forma antiga

console.log(varA, varB, varC);
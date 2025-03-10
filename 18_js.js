let numeros = [];
let soma = 0;

const prompt = require('prompt-sync')();

for (let i = 0; i < 5; i++){
    let numero = Number(prompt('Digite o numero '+ (i + 1) +': '));
    numeros.push(numero)
}

for (let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}
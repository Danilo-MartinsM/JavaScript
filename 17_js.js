let palavras = [];
const prompt = require('prompt-sync')();
for (let i = 0; i < 5; i ++){
    let palavra = prompt('Digite a palavra '+(i + 1) +': ');
    palavras.push(palavra);
}
let frequencia = {};

for (let i = 0; i < palavras.length; i ++){
    let palavra = palavras[i];

    if (frequencia[palavra]) {
        frequencia[palavra]++;
    }
    else {
        frequencia[palavra] = 1;
    }
}

console.log(frequencia);
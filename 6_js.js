let raio = Number(prompt('Digite o raio da esfera: '));
let classificacao;
let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

if (volume < 100){
    classificacao = 'pequena';
}
else if(volume <= 500){
    classificacao = 'média';
}
else{
    classificacao = 'grande';
}

console.log('O volume da esfera é '+ volume.toFixed(2) +'.')
console.log('Classificação: Esfera '+ classificacao +'.')





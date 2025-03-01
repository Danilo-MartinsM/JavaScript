let lado1 = Number(prompt('Digite o primeiro lado do triângulo: '));
let lado2 = Number(prompt('Digite o segundo lado do triângulo: '));
let lado3 = Number(prompt('Digite o terceiro lado do triângulo: '));
let = classificacao
let semi = (lado1 + lado2 + lado3) / 2;
let area = Math.sqrt(semi * (semi - lado1) * (semi - lado2) * (semi - lado3));

if (lado1 === lado2 && lado1 === lado3){
    classificacao = 'equilátero';
}
else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
    classificacao = 'escaleno';
}   
else{
    classificacao = 'isósceles';
}
console.log('A área do triângulo é '+ area.toFixed(2) +'.')
console.log('Triângulo '+ classificacao.toFixed(2) +'.')

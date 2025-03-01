let unidade_altura = prompt('Diga se sua idade estará em metros(m) ou em centimentros(cm): ')
let altura = Number(prompt ('Digite sua altura: '))
let peso = Number (prompt ('Digite seu peso: '))
let IMC
let classificacao

if (medida_altura === 'cm'){
    altura = altura / 100
}

function calcularIMC(altura, peso){
    return peso / (altura**2);
}
IMC = calcularIMC(altura, peso)

if (IMC < 18.5){
    classificacao = 'Abaixo do peso'
}
else if(IMC >= 18.5 && IMC < 24.9){
    classificacao = 'Peso normal'
}
else if(IMC >= 25 && IMC < 29.9){
   classificacao = 'Sobrepeso' 
}
else if(IMC > 30){
    classificacao = 'Obesidade'
}

console.log('Seu IMC é de '+ IMC.toFixed(2) +' e sua classificação é de '+ classificacao)


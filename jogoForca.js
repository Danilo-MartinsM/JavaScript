const numeroAleatorio = Math.floor(Math.random() * 5);
const palavras = ['gato', 'casa', 'flor', 'bola', 'rio'];
const palavra = palavras[numeroAleatorio];
let palavraCensurada = '';
let letrasErradas = [];
let tentativaRest = 7;

for (let i = 0; i < palavra.length; i++){
    palavraCensurada += "*";
}

console.log(`A palavra possui ${palavra.length} letras`);
console.log(palavraCensurada);

while (tentativaRest > 0){
    let palpite = prompt('Digite uma letra ou o palpite da palavra: ').toLowerCase();

    if (palpite.length === 1){

        if (palavra.indexOf(palpite) === -1){
            if (letrasErradas.indexOf(palpite) === -1){
                letrasErradas.push(palpite);
                tentativaRest -= 1;
            }
            } else {
                let letras = palavraCensurada.split('');
                for (let j = 0; j < palavra.length; j++) {
                    if (palavra[j] === palpite) {
                        letras[j] = palpite;
                    }
                }
                palavraCensurada = letras.join('');
            }
    } else {
        if (palavraCensurada === palavra){
            console.log('Palavra correta, parabéns!!!')
            break;
        } else {
            console.log('Palavra incorreta, tente novamente.')
            tentativaRest -= 1;
            continue;
        }
    }
    if (tentativaRest === 0){
        console.log('Acabou o jogo por falta de tentativas restantes.')
        break;
    }
    console.log(palavraCensurada);
}
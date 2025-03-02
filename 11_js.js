let distanciaViagem = Number(prompt('Digite a distância da viagem(em km): '));
let consumoCombustivel = Number(prompt('Digite o consumo de combustível do carro(em km/l): '));
let precoCombustivel = Number(prompt('Digite o preço do combustível(em R$/l): '));
let numeroPedagios = Number(prompt('Digite o número de pedágios na viagem: '));
let valorMedioPedagio = Number(prompt('Digite o valor médio de cada pedágio: '));
let classificacaoCusto;

let custoTotal = (distanciaViagem / consumoCombustivel) * precoCombustivel + (numeroPedagios * valorMedioPedagio);

if (custoTotal < 100){
    classificacaoCusto = 'Barata';
} else if (custoTotal < 300){
    classificacaoCusto = 'Moderada';
} else{
    classificacaoCusto = 'Cara';
}

console.log('Custo total da viagem: R$ '+ custoTotal.toFixed(2));
console.log('Classificação: '+ classificacaoCusto +'.');



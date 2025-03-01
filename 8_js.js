let distancia = Number(prompt('Digite a distância da viagem em KM: '));
let consumo = Number(prompt('Digite o consumo da viagem em Km/l: '));
let preçoGasolina = Number(prompt('Digite o preço da gasolina: '));

let custoTotal = (distancia / consumo) * preçoGasolina;

console.log('O custo total da viagem é R$'+ custoTotal.toFixed(2) +'.');


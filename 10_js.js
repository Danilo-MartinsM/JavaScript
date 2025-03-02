let consumo = Number(prompt('Digite o consumo de energias elétrica(em kWh): '));
let tarifa = Number(prompt('Digite o valor da tarifa de energia(em R$/kWh): '));
let desconto = 0;
let taxaAdicional = 0;
let custoTotal = consumo * tarifa;

if (consumo < 100){
    desconto = custoTotal * 0.1;
    custoTotal -= desconto;
    console.log('Desconto de 10%: R$'+ desconto.toFixed(2));
}
else if (consumo > 200){
    taxaAdicional = custoTotal * 0.05;
    custoTotal += taxaAdicional;
    console.log('Taxa adicional de 5%: R$'+ taxaAdicional.toFixed(2));
}

console.log('Custo inicial: R$'+ (consumo * tarifa).toFixed(2));
console.log('Custo total: R$'+ custoTotal.toFixed(2));




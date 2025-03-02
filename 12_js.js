let valorCompra = Number(prompt('Digite o valor total da compra: '));
let descontoPercentual = Number(prompt('Digite o percentual de desconto na compra: '));

function calcularDesconto(valorCompra, descontoPercentual){
    return valorCompra * descontoPercentual / 100;
}
function calcularValorFinal(valorCompra, desconto){
    return valorCompra - desconto;
}

let desconto = calcularDesconto(valorCompra, descontoPercentual);
let valorFinal = calcularValorFinal(valorCompra, desconto);

console.log('Desconto: R$ '+ desconto.toFixed(2));
console.log('Valor final: R$ '+ valorFinal.toFixed(2));



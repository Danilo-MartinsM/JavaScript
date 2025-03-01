let salarioBruto = Number (prompt('Digite seu salário bruto: '));
let INSS = salarioBruto * 0.10;
let IRRF = (salarioBruto - INSS) * 0.15;
let valeRefeicao = 300;
let valeTransporte = 200;

let salarioLiquido = salarioBruto - INSS - IRRF + valeRefeicao + valeTransporte;

console.log('Salário Líquido: R$'+ salarioLiquido.toFixed(2));
console.log('Descontos: INSS = R$'+ INSS.toFixed(2) +', IRRF = '+ IRRF.toFixed(2));
console.log('Benefícios: Vale-refeição = R$'+ valeRefeicao.toFixed(2) +'Vale-transporte = R$'+ valeTransporte.toFixed(2));






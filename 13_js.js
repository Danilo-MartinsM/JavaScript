let nota1 = Number(prompt('Digite a primeira nota: '));
let nota2 = Number(prompt('Digite a segunda nota: '));
let nota3 = Number(prompt('Digite a terceira nota: '));
let nota4 = Number(prompt('Digite a quarta nota: '));
let situacaoAluno;

function calcularMedia(nota1, nota2, nota3, nota4){
    return (nota1 + nota2 + nota3 + nota4) / 4;
}
let media = calcularMedia(nota1, nota2, nota3, nota4);

if (media >= 7){
    situacaoAluno = 'Aprovado';
}
else if (media >= 5){
    situacaoAluno = 'Recuperação';
}
else{
    situacaoAluno = 'Reprovado';
}

console.log('Média: '+ media.toFixed(2));
console.log('Situação: '+ situacaoAluno);




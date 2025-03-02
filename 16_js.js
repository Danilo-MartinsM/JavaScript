let notas = [];
let soma = 0;

for (let i = 0; i < 5; i ++){
    let nota = prompt('Digite a nota '+ (i + 1) +':');
    notas.push(Number(nota));
}

// A média também pode ser feita com:
// let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
// let media = soma / notas.lenght;
for (let i = 0; i < notas.length; i ++){
    soma += notas[i];
}
let media = soma / notas.length;

notas.push(media);

console.log(notas);


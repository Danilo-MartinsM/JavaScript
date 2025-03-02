let listaCompras = [];

for (let i = 0; i < 4; i++){
    let compra = prompt('Digite a compra: ');
    listaCompras.push(compra);
}
listaCompras.pop();
listaCompras.push('Novo item');

console.log(listaCompras);



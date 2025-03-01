let idade = prompt('Digite sua idade: ');
idade = Number(idade)

function dobrarIdade(idade){
    return idade * 2;
}

console.log('Minha idade é '+ idade +' anos.');

console.log('O dobro da minha idade é '+dobrarIdade(idade)+' anos.');

if (idade >= 18){
    console.log('Você é maior de idade.')
} else{
    console.log('Você é menor de idade.')
}

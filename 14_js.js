let tarefas = [];

for (let i = 0; i < 3; i ++){
    let tarefa = prompt('Digite a atividade '+ (i + 1) +': ');
    tarefas.push(tarefa);
}
tarefas.shift();
tarefas.unshift('Nova tarefa');

console.log(tarefas);


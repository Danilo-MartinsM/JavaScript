// Aqui, estamos importando o módulo http do Node.js. Este módulo fornece as funcionalidades necessárias para criar um servidor HTTP.
const http = require('http');
// O metodo abaixo cria o servidor HTTP que recebe a função de "Callback", que sempre será chamada quando houver uma requisição ao servidor, e tem 2 parametros: req (requisição) e res (resposta)
const server = http.createServer((req, res) => {
// req.url contém a URL da requisição.
//Se a URL for /, o servidor responde com "Bem-vindo à página inicial!".
//Se a URL for /sobre, o servidor responde com "Esta é a página sobre nós.".
//Para qualquer outra URL, o servidor responde com "Página não encontrada." e um status code 404.
//res.writeHead() é usado para definir o status code (200 para sucesso, 404 para não encontrado) e o tipo de conteúdo da resposta (text/plain para texto simples).
//res.end() envia a resposta ao cliente e finaliza a requisição.
    if (req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('Bem-vindo à página inicial!');
    }
    else if (req.url === 'sobre') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Esta é a página sobre nós.');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página não encontrada.');
    }

});
//server.listen() faz o servidor escutar na porta 3000.
//Quando o servidor estiver rodando, a mensagem "Servidor rodando na porta 3000" será exibida no console.
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
let tamanhoArquivo = Number(prompt('Digite o tamanho do arquivo em MB: '));
let velocidadeInternet = Number(prompt('Digite a velocidade da sua internet: '));

let tempoDownload = (tamanhoArquivo * 8) / velocidadeInternet;
let tempoDownloadMinutos = Math.floor(tempoDownload / 60);
let tempoDownloadSegundos = Math.floor(tempoDownload % 60);

console.log('O tempo de download é '+ tempoDownloadMinutos +' minuto(s) e '+ tempoDownloadSegundos +'.');






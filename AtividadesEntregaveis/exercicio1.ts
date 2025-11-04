import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();

for(let i = 1 ; i < 6; i++){
    let cor: string = readlinesync.question('\nDigite a cor: ');
    cores.push(cor)
}
console.log(`Listar todas as cores: ${cores} `);

console.log(`Ordenar as cores: ${cores.sort()} `);
import readlinesync = require("readline-sync");

const arrayNum: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

let numeroEncontrar = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");
let posicaoFinal = null;


for( let i = 0 ; i < arrayNum.length ; i++ ){
    if(arrayNum[i] === numeroEncontrar){
        posicaoFinal = i;
        break;
    }
}

console.log((posicaoFinal === null) ? `O número ${numeroEncontrar} não foi encontrado!` :
`O número ${numeroEncontrar} esta localizado na posição: ${posicaoFinal}`);
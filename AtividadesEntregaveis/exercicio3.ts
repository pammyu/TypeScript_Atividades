import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for(let i = 0 ; i < 10 ; i++ ){
    let numerosDigitados = readlinesync.questionInt('\nDigite um numero: ');
    numeros.add(numerosDigitados)
}

const arrayNumeros : Array<number> = [...numeros];
arrayNumeros.sort((a, b) => a - b);

console.log('\nListar dados do Set:');
for(let numero of arrayNumeros){
    console.log(numero);
}
    
    
    
    

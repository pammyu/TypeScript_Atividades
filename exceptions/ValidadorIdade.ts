import readline = require('readline-sync');

try {
    let idade: number = readline.questionInt('Digite a sua idade: ');
    validarIdade(idade);
} catch (error) {
    console.error(`${error}`)
}

function validarIdade(idade: number): void {
    if(idade < 18) {
        throw new Error('A pessoa não pode dirigir!');
    } else {
        console.log('A pessoa está apta a dirigir!');
    }
}
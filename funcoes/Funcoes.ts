/*
SINTAXE:
function nomeDaFuncao(parametro1: tipo, parametro2: tipo): tipo_de_retorno {
   //Corpo da função
   //return 
}

nomeDaFuncao(argumento1, argumento2); // Argumento é o DADO que você está enviando no momento da função que vai ser executada. É como se
// fossem os ingredientes para fazer um bolo. */

// O console LOG é um retorno visual, não a nível de função.

function saudar(): void {
    console.log('Bom dia!');
}

saudar()

function saudar2(nome: string): void {
    console.log(`Bom dia, ${nome}!`);
}
saudar2('Pamela');

//parâmetro default
function saudar3(nome: string = 'Mundo'): void{
    console.log(`Olá, ${nome}!`);
}
saudar3();

function somar(numero1: number, numero2: number): number {
    let resultado = numero1 + numero2;
    return resultado;
}
console.log(`O resultado da soma é ${somar(2, 5)}`);

function verificarPar(numero: number): boolean {
    return numero % 2 === 0; 
}

let resultado = verificarPar(8);

if (resultado){
    console.log('O numero é par!');
}else{
    console.log('O numero é impar!');
}

function somarArray(numeros: number[]): number {
    let total = 0;
    for(let numero of numeros) {
        total += numero;
    }
    return total;
}
console.log(`Resultado da soma do array é: ${somarArray([1, 2, 3, 4])}`);

// parâmetro opcional
function apresentar(nome?: string, idade?: number): string {
    if (nome && idade !== undefined) {
        return `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
    } else if(nome) {
        return `Olá, meu nome é ${nome}`;
    } else{
        return 'Olá, visitante!';
        }
}
console.log(apresentar('Geandro', 25));
console.log(apresentar('Ana'));
console.log(apresentar());
// console.log(apresentar(undefined, 10));

function calcularIMC(peso: number, altura: number): string | null {
    if (peso <= 0 || altura <= 0) {
        return null;
    } 

    const imc = peso / (altura ** 2);
    let classificacao: string;

    if(imc < 18.5) {
        classificacao = 'Abaixo do peso';
    }   else if (imc < 24.9) {
        classificacao = 'Peso normal';
    }   else if(imc < 29.9){
        classificacao = 'Sobrepreso';
    }   else {
        classificacao= 'Obesidade'
    }

    return classificacao;
}
console.log(calcularIMC(70, 1.75));
console.log(calcularIMC(0, 1.70));

//let identificador_da_variavel: tipo = valor;

let variavel: any = 'texto';
variavel = 123;
variavel = true;

let aprovado: boolean = true;

let peso: number = 75.50;
let idade: number = 25;
let nome: string = 'Pâmela'; //Tanto aspas simples quanto aspas duplas funciona. Depende do que foi adotado no projeto.

console.log(`Bom dia ${nome}! Seu peso é ${peso}kg e sua idade é ${idade} anos.`)

let sobrenome = 'Reis';
let anoNascimento = 2003;
console.log(`Tipo da variavel sobrenome: ${typeof sobrenome}`)
console.log(`Tipo da variavel anoNascimento: ${typeof anoNascimento}`)

//Null e Undefined
let cliente: any = null; //Vazio intencional por opção do programador.
let ano: number | undefined; //Indica que algo não foi definido, o valor não foi inicializado.

console.log(ano)

// NaN
let numero = Number("abc");
console.log(numero);

//Infinity 
let a = 1 / 0;
console.log(a);

//Constantes
const Quantidade: number = 10;
const Port: number = 3000;
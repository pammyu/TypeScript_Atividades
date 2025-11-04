/* const nome_do_Array: Array<T> = new Array<T>();
const nome_do_Array: Array<T> = new Array<T>(elemento1, elemento2, elemento3); - Sintaxe para definir um Array. É uma CONST pois a variável
vai guardar um Array. A estrutura não vai mudar! */

const pessoas: Array<string> = new Array<string>('Enrique', 'Bruno', 'Murilo', 'Geandro');

for (let pessoa of pessoas){
    console.log(pessoa);
}

pessoas.push('Daniel');

for (let pessoa of pessoas){
    console.log(pessoa);
}

pessoas.push('Enrique'); // Push acrescenta ao final
pessoas.unshift('Gabrieli', 'Eduardo'); // Unshift coloca os valores na primeira posição do Array
console.log(`\nO índice da pessoa Eduardo é: ${pessoas.indexOf('Eduardo')}`);

console.log(`A pessoa Enrique existe no Array?: ${pessoas.includes('Enrique')}`);

console.log(`O elemento do índice 3 é: ${pessoas[3]}`);

pessoas [3] = 'Jeferson';

console.log(`\nO tamanho do array pessoas é ${pessoas.length}`)


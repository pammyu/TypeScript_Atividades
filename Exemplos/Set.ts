// const nome_do_set: Set<T> = new Set<T>();
// const nome_do_set: Set<T> = new Set<T>([elemento1, elemento2, elemento3]) - No SET não pode repetir os elementos!

const frutas: Set<string> = new Set<string>(['Banana', 'Abacate', 'Morango', 'Maçã']);

console.log(frutas);

for(let fruta of frutas){
    console.log(fruta);
}

console.log(`\nExiste a fruta Kiwi? ${frutas.has('Kiwi')}`);

console.log(frutas.delete('Abacate'));

console.log(`\nTamanho do set: ${frutas.size}`);
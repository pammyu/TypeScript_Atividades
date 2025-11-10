import { Carro } from "./Carro";

const carro = new Carro('Toyota', 'Corolla', 'Prata', 'Flex', 95000); // O operador NEW cria um NOVO objeto, o NOVO CARRO.
/*carro.fabricante = 'Toyota';
carro.modelo = 'Corolla';
carro.cor = 'Prata';
carro.tipoDeCombustivel = 'Flex';
carro.valorDeMercado = 95000;*/
carro.valorDeMercado = 90000;

//Tínhamos o MOLDE do Carro, e nesse arquivo colocamos suas características para 
// criar o objeto!

/* console.log(`Fabricante: ${carro.fabricante}`);
console.log(`Modelo: ${carro.modelo}`);
console.log(`Cor: ${carro.cor}`);
console.log(`Tipo de Combustível: ${carro.tipoDeCombustivel}`);
console.log(`Valor de Mercado: ${carro.valorDeMercado}`); */

carro.ligar();
carro.acelerar(40);
carro.frear();
carro.acelerar(100);
let preco = carro.abastecer(30, 6.50);
console.log(`Abastecido com R$ ${preco.toFixed(2)}`);
carro.exibirDetalhes();
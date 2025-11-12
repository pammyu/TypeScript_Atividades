import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./Preguica";

const cachorro: Cachorro = new Cachorro('Lady Amora', 3);
const cavalo: Cavalo = new Cavalo('Pé de Pano', 8);
const preguica: Preguica = new Preguica('Soninho', 3);

cachorro.emitirSom();
cachorro.correr();

cavalo.emitirSom();
cavalo.correr();

preguica.nome = 'Sonequinha';
preguica.idade = 10;
console.log(`Novo nome da preguica: ${preguica.nome}`);
console.log(`Nova idade da preguiça: ${preguica.idade}`);

preguica.escalarArvore();
preguica.emitirSom();






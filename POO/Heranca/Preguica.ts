import { Animal } from "./Animal";

export class Preguica extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    public emitirSom(): void {
        console.log(`${this._nome} está emitindo um som sonolento: UAhhhhh.... ZzzzzZZZzzz`);
    }

    public escalarArvore(): void {
        console.log(`${this._nome} está lentamente escalando uma árvore para tirar um cochilo!`);
    }

}
import { Pessoa } from "./Pessoa";
import { Ciclista } from "./Interfaces/Ciclista";
import { Corredor } from "./Interfaces/Corredor";
import { Nadador } from "./Interfaces/Nadador";

export class Triatleta extends Pessoa implements Ciclista, Corredor, Nadador {

    aquecer(): void {
        console.log(`Triatleta está se aquecendo!`);
    }

    pedalar(): void {
       console.log(`Triatleta está pedalando!`);
    }

    correr(): void {
        console.log(`Triatleta está correndo!`);
    }

    nadar(): void {
        console.log(`Triatleta está nadando!`);
    }

    public alimentar(): void {
        console.log(`Triatleta se alimentando!`);
    }


}
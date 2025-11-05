//Atividade 01 - FILA

import readlinesync = require("readline-sync");
import { Queue } from "./Queue";

const filaBanco = new Queue<string>();
let opcao: number;


do{
    console.clear();
    console.log("**********************************************");
    console.log("\n1 - Adicionar Cliente na Fila.");
    console.log("2 - Listar todos os Clientes.");
    console.log("3 - Retirar Cliente da Fila.");
    console.log("0 - Sair.");
    console.log("\n**********************************************");

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch(opcao) {
        case 1: "Adicionar Cliente na Fila."
        const nomeCliente = readlinesync.question("Digite o nome do Cliente: ");
        filaBanco.enqueue(nomeCliente);
        console.log(`\nCliente ${nomeCliente} adicionado!`);
        console.log("\nFila Atual:\n");
        filaBanco.printQueue();
        readlinesync.question("\nPressione ENTER se deseja continuar...");
        break;

        case 2:"Listar todos os Clientes."
        if(filaBanco.isEmpty()){
            console.log("\nA fila esta vazia!");
        }else{
                console.log("\nLista de Clientes na Fila: \n");
        filaBanco.printQueue();
        }
        readlinesync.question("\nPressione ENTER se deseja continuar...");
        break;

        case 3: "Retirar Cliente da Fila."
        if(filaBanco.isEmpty()){
            console.log("A fila esta vazia!");
        }else{
            console.log("Fila:\n");
            filaBanco.dequeue();
            filaBanco.printQueue();
            console.log("\nO cliente foi chamado!");
        }
        readlinesync.question("\nPressione ENTER se deseja continuar...");
        break;

        case 0: "Sair."
        break;

        default: 
            console.log("\nOpcao Invalida! Digite um numero entre 0 e 3.");
            readlinesync.question("\nPressione ENTER se deseja continuar...");
    }
}while (opcao !== 0);
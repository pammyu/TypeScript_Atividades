//Atividade 02 - PILHA

import readlinesync = require("readline-sync");
import { Stack } from "./Stack";

const pilhaLivros = new Stack<string>;
let opcao: number;

do{
    console.clear()
    console.log("**********************************************");
    console.log("\n1 - Adicionar Livro na pilha.");
    console.log("2 - Listar todos os Livros.");
    console.log("3 - Retirar Livro da pilha.");
    console.log("0 - Sair.");
    console.log("\n**********************************************");

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch(opcao){
        case 1: "Adicionar Livro na pilha."
        const livroNome = readlinesync.question("Digite o nome do livro: ");
        pilhaLivros.push(livroNome);
        console.log("\nPilha:\n");
        pilhaLivros.printStack();
        console.log(`\nO livro ${livroNome} foi adicionado!`);
        readlinesync.question("\nPressione ENTER se deseja continuar...");
        break;

        case 2: "Listar todos os Livros.";
        if(pilhaLivros.isEmpty()){
            console.log("\nA pilha esta vazia!");
        }else{
            console.log("\nPilha:\n");
            pilhaLivros.printStack();
        }
        readlinesync.question("\nPressione ENTER se deseja continuar...");
        break;

        case 3: "Retirar Livro da pilha."
        if(pilhaLivros.isEmpty()){
            console.log("\nA pilha esta vazia!");
        }else{
            console.log("\nPilha:\n");
            pilhaLivros.pop();
            pilhaLivros.printStack();
            console.log("\nO livro foi removido!");
        }
        readlinesync.question("\nPressione ENTER se deseja continuar...");
        break;

        case 0: "Sair."
        break;

        default:
            console.log("\nOpcao Invalida! Digite um numero entre 0 e 3.");
            readlinesync.question("\nPressione ENTER se deseja continuar...");
            
    }
}while(opcao !== 0); 
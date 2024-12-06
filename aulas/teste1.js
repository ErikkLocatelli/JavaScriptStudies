const prompt = require('prompt-sync')();
let op;
let pessoas = [];

do {
    const nome = prompt("Qual o seu nome? ");
    const idade = prompt("Qual a sua idade? ");
    const altura = prompt("Qual a sua altura? ");

    function criaPessoa(nome, idade, altura) {
        const pessoa = {
            nome: nome,
            idade: idade,
            altura: altura,
        }
        return pessoa;
    }

    const novasPessoas = criaPessoa(nome, idade, altura);
    pessoas.push(novasPessoas);
    console.log(pessoas);

    op = prompt("Quer Refazer? (1 para sim, 2 para não) ");
} while (op != 2);

const maisVelho = " "

function calculaIdoso(pessoas) {
    const {idade} = pessoas
    let maisVelho = Math.max(idade)
    return maisVelho
}

calculaIdoso(pessoas)

console.log(`A pessoa mais velha tem ${maisVelho} anos`)
"use strict";
let numero = 87;
const pi = 3.14;
let nome = "erik";
let resultado = numero * pi;
/*
const nomeUsuario = prompt("Qual o seu nome?")
console.log(nomeUsuario?.toUpperCase())*/
// Tipagem de arrays 
const array = [1, 2, 3, 4, 5, 6];
const numeros = [3, 4, 5, 6, 67, 0]; // inicializando um array apenas de numbers 
const misto = [87, 87, "Erik", false]; // integrando diversos tipos de dados no mesmo array com tipagem - evitar pois não é o indicado 
const idades = [];
idades.push(12);
idades.push(34);
idades.push(45);
idades.push(14);
idades.push(9);
idades.push(134);
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade);
// tuplas 
const pessoaTupla = ["Erik", 20];
const pessoa = {
    nome: "Erik",
    idade: 20,
    altura: 1.80,
    profissao: 'Desenvolvedor'
};
function getNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio <= 0.5)
                return numero1;
            return numero2;
    }
}
console.log(getNumber(23, 45, 'greater'));
const outraPessoa = {};
// 2. Required ---- Todos os parametros envolvidos ficam obrigatórios 
//3. Picked --- Pega alguns tipos específicos desejados. 
//4. Omit --- Omite alguma informação do tipo envolvido 

let numero = 87;
const pi = 3.14; 
let nome = "erik"

let resultado = numero * pi; 
/*
const nomeUsuario = prompt("Qual o seu nome?")
console.log(nomeUsuario?.toUpperCase())*/ 

// Tipagem de arrays 

const array = [1,2,3,4,5,6]
const numeros: number[] = [3,4,5,6,67,0] // inicializando um array apenas de numbers 

const misto: (number | string | boolean)[] = [87, 87, "Erik", false] // integrando diversos tipos de dados no mesmo array com tipagem - evitar pois não é o indicado 

const idades: number[] = []
idades.push(12)
idades.push(34)
idades.push(45)
idades.push(14)
idades.push(9)
idades.push(134)

const menoresDeIdade = idades.filter(idade => idade < 18)
console.log(menoresDeIdade)

// tuplas 

const pessoaTupla: [string, number] = ["Erik", 20]

const pessoa: Person = {
    nome: "Erik", 
    idade: 20, 
    altura: 1.80, 
    profissao: 'Desenvolvedor'
}; 

//inteface 

interface Person {
    nome: string, 
    idade: number, 
    altura: number, 
    profissao?: string, 
}

function getNumber(numero1: number, numero2: number, criterio?: 'greater' | 'lower'): number {
    switch(criterio) {
        case 'greater': 
            return numero1 > numero2 ? numero1 : numero2; 
        case "lower": 
            return numero1 < numero2 ? numero1 : numero2 
        default: 
            const numeroAleatorio: number = Math.random();
            if (numeroAleatorio <= 0.5) return numero1;
            return numero2
    }
}

console.log(getNumber(23, 45, 'greater'))

////// Utility Types /////// ---- Novos tipos a partir de tipos que já existem ------ 

// 1. Partial 

type Personpartial = Partial<Person>; // Todos os parametros da person envolvida ficam parciais, ou seja nenhum parametro é obrigatório 

const outraPessoa: Personpartial = {
    
}

// 2. Required ---- Todos os parametros envolvidos ficam obrigatórios 

//3. Picked --- Pega alguns tipos específicos desejados. 

//4. Omit --- Omite alguma informação do tipo envolvido 
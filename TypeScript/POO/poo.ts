// Aula 19 - POO 

// Interfaciando -- Deixando da forma mais pragmática e exemplificada possível. Recebe tanto atributo quanto métodos 

interface IPessoa {
    nome: string, 
    idade: number, 
    altura: number, 
    dormir: ()=> void; 
    comer: ()=> void; 
}

// Classe: abstração
// Definindo a abstração de uma pessoa
class Pessoa implements IPessoa {
    // caracteristicas ou atributos dessa classe
   nome: string;
   idade: number;
   altura: number;
   private _cpf: string;

    // método construtor \

    constructor(nome: string, idade: number, altura: number, cpf: string) { // objeto construtor e como deve ser definido quando o objeto foi instansiado 
        this.nome = nome, 
        this.idade = idade, 
        this.altura = altura,
        this._cpf = cpf; 
    }

   // método: Acão  
    dormir() {
        console.log(this.nome + ' está dormindo...')
    }

    comer() {
        this.altura = 10 + this.altura
        console.log("A nova altura é de" + this.altura)
    }


    // acessor - acessa um objeto privado mesmo que de fora, meio que dá permissão para que isso ocorra - me permite acessar, mas não alterar

    get cpf(): string {
        return this._cpf
    }

    // setter me permite alterar os valores, mesmo que privado
    
    set cpf(newcpf) {
        if (newcpf.length != 14) {
            // Lançando um erro
            throw new Error("Deu erro pai, " + newcpf.length + " é o tamanho que foi colocado e deve ter 14")
        } else {
        this._cpf = newcpf; 
        }
    }

    
}


class Professor extends Pessoa {
    codigo: number;  
    materia: string;


    constructor (nome: string, idade: number, altura: number, cpf: string, codigo: number, materia: string) {
        super(nome, idade, altura, cpf)
        this.codigo = codigo, 
        this.materia = materia; 
    }

    ensinar() {
        console.log(`O professor ${this.nome} ensina a materia de ${this.materia}`)
    }
}



// criando uma pessoa a partir da definição da classe

const pessoa1 = new Pessoa("Erik", 20, 1.80, "106-266-749-21")
const pessoa2 = new Pessoa("Felipe", 34, 2.34, "123456-789")
console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.dormir())
console.log(pessoa1.altura)
console.log(pessoa1.comer())
console.log(pessoa1.altura)
console.log(pessoa1.cpf)
pessoa1.cpf = "123-456-789.01"
console.log(pessoa1.cpf)
const professor1 = new Professor("Ricardo", 54, 1.76, "123-456-678.12", 1224, "História")
console.log(professor1.ensinar())

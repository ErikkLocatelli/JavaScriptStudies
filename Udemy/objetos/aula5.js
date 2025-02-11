// Manipulando Heranças 

class Produto {

    constructor(nome, preco) {
        this.nome = nome; 
        this.preco = preco
    }; 

    desconto(parametro){
       let novoPreco = this.preco - (this.preco*(parametro/100))
        return `O novo valor é de R$ ${novoPreco.toFixed(2)} e o desconto foi de R$ ${(this.preco-novoPreco).toFixed(2)}`
    };
    aumento(parametro){return this.preco += this.preco*(parametro/100)}
}

class Camiseta extends Produto {
    constructor(nome, preco, cor, material, marca) {
        super(nome, preco); 
        this.cor = cor; 
        this.material = material; 
        this.marca = marca; 
    }
}

class Bermuda extends Produto {
    constructor(nome, preco, cor, material, botao) {
        super(nome, preco); 
        this.cor = cor; 
        this.material = material; 
        this.botao = botao
    }
}

const bermuda = new Bermuda("Bermuda", 190.99, "preta", "tactel", true)

console.log(bermuda.desconto(90))
console.log(bermuda)


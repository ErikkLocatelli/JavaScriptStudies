// Aprendendo a trabalhar com prototypes 

// JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro. 

//Protótipo: É o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou de molde para futuras produçoes. 
//Todo os objetos tem uma referencia interna para um prototipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para cri;a-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este memro no próprio objeto e depois a cadeia de protótipos é usada até o topo. 

function Pessoa(nome, sobrenome) {
    this.nome = nome; 
    this.sobrenome = sobrenome; 
}

Pessoa.prototype

.chamaNome = function() {
    return this.nome + " " + this.sobrenome
}


const pessoa1 = new Pessoa("Erik", "Locatelli")
const pessoa2 = new Pessoa("Rayanne", "Alexia")

console.log(pessoa1.chamaNome())


// Manipulando Prototypes 

const objA = {
    chaveA: "A", 

}; 

const objB = {
    chaveB: "B", 
    
}; 

Object.setPrototypeOf(objB, objA) //Desse modo, eu defino que o objeto B tem dentro do seu prototype o objA, fazendo uma espécie de cadeia 
console.log(objB.chaveA)

function Produto(nome, preco) {
    this.nome = nome; 
    this.preco = preco; 


}

const produto1 = new Produto("Banana", 2.30)

Produto.prototype.desconto = function(parametro) {
    return this.preco-=(this.preco*(parametro/100))
}

console.log(produto1.desconto(10));
console.log(produto1.preco)
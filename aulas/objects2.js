const pessoa1 = {
    nome: "Erik",
    sobrenome: "Locatelli",  
    idade: 90, 

    fala() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`); // this é utilizado para referenciar o dado dentro do contexto do objetp 
    }

}; 
pessoa1.fala(); 

const carro = {
    nome: " ", 
    rodas: 4, 
    potência: 45546
}; 

console.log(typeof carro.nome, typeof carro.rodas)
carro.nome = "Sandero"
console.log(carro.nome)
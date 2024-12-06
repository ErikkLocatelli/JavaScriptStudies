// Atribuição via desestrturação

const pessoa = {

    nome: "Erik",
    idade: 20,
    time: "Corinthians",
    altura: 1.8,
    endereço: {
        rua: "São Miguel", 
        bairro: "Três rios do Sul",
        numero: 205, 
    }

}; 

const {nome: teste, sobrenome, idade, endereço: {rua, numero}} = pessoa //atribuição por desestruturação 
console.log(teste, rua)

//finalização do objeto com vírgula


const carros = {
    modelo: "gol",
    marca: "fiat", 
    rodas: 4, 
};

const {modelo: nome, marca, rodas} = carros
console.log(nome)
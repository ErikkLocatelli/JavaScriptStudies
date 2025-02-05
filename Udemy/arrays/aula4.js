// Aprendendo a usar o método filter -> vai sempre retornar uma array com a mesma quantidade de elementos ou menos, mas nunca maior 

//Retornar numeros maiores que 10 

const numeros = [5,50,80,2,3,4,5,90,76,34,6]

const numerosMaior = [ ]
const numerosMenor = []
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10 ) {
        numerosMaior.push(numeros[i])
    } else {
        numerosMenor.push(numeros[i])
    }
}

console.log(numerosMaior)
console.log(numerosMenor)



const numerosTeste = [5,50,80,2,3,4,5,90,76,34,6]
const numerosFiltrados = numerosTeste.filter(valor => valor%2==0 // quando só tem uma linha o retorno é implicito!!! 
)
console.log(numerosFiltrados)

const pessoas = [
    { nome: "Erik", idade: 20}, 
    {nome: "Luiz", idade: 23}, 
    {nome: "Lucas", idade: 17}, 
    { nome: "Augusto", idade: 87},
    { nome: "Marcos", idade: 87}
]; 

const nomeMaior = pessoas.filter(pessoa => pessoa.nome.length >= 1); 
console.log(nomeMaior)

const maiorDeIdade = pessoas.filter(pessoa => pessoa.idade > 17); 
console.log(maiorDeIdade)

const terminaEmS = pessoas.filter(pessoa => pessoa.nome.endsWith("s")) // um método que implica um retorno de última letra
console.log(terminaEmS)



//lê os índices  0         1        2


const frutas = ["maça", "banana", "manga"]

for (let indice in frutas) { //for para contador de indices (mais simples, não precisa incrementar um ocntador na mão semelhante ao for)
    console.log(frutas[indice])
}

const pessoa = {
    nome: "Erik", 
    sobrenome: "Locatelli",
    idade: 20, 
}

//lê as chaves de um objeto

for (let i in pessoa) {
    console.log(i)
}
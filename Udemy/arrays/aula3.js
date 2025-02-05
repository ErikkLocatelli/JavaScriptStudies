const num1 = [1,2,3,4,5]
const num2 = [6,7,8,9,10]
const num3 = num1.concat(num2)
console.log(num3)
console.log(typeof num3)
const num4 = [...num1, ...num2]
console.log(num4)
console.log(typeof num4)

const pessoa1 = {
    nome: "Erik", 
    idade: 21, 
}

const pessoa2 = {
    endereço: "Sao Miguel",
    cep: 89254-305
}

const pessoas = {...pessoa1,...pessoa2}
console.log(pessoas)
console.log(pessoas.nome, pessoas.cep)
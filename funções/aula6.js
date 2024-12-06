// factory fucntions - funções que retornam objeto (muito importante estudar isso)

function criaPessoa(nome, sobrenome, idade, bonito, p, altura) {
    return {
        nome, sobrenome, idade, bonito, time: "corinthians", peso: p, altura, 
        fala: function(assunto) { // função dentro de um objeto é chamado de método
            return `${this.nome}, está falando ${assunto}, e possui ${this.peso} Kg, e torce para ${this.time}` // extraí dados de fora da chave do objeto 
        }, 

        chamaNome() {
            return `o nome dessa pessoa é ${nome} ${sobrenome} e estudou na ${escola}`
        },
        

        set chamaNome(valor) { // me possibilita, diferente do get, alterar os valores antes dispostos
            valor = valor.split(" ") // método para separar os diferentes valores que serão disponibilizados no array
            this.nome = valor.shift() // removeu o primeiro
            console.log(valor)
        },

        get calculaIMC(){ // o get faz com que a função funja ser um atributo do objeto e não uma função (getter)
            const imc = this.peso/(altura*altura)
            return imc// acessando os dados transmitidos com o this, no caso do peso que não entra no parametro com peso, mas sim como p, na altura como já entra como altura, não tem necessidade de utilizar o this
        }
    };
     
}


const pessoa1 = criaPessoa("Erik", "locatelli", 768, true, 70, 1.80) // guardando os dados de uma pessoa na variável
const pessoa2 = criaPessoa("Marcos", "Felipe", 56456, false )
console.log(pessoa1)
console.log(typeof pessoa1.nome)
console.log(typeof pessoa1.nome)
console.log(typeof pessoa1.idade)
console.log(typeof pessoa1.bonito)
console.log(pessoa1.fala("futebol")) // forma de chamar um método (função dentro de um objeto)
console.log(pessoa2.fala("flamengo")) // mesmo método sendo chamado, mas com outro objeto apenas para ver o funcionamento do this e parametro passados 
console.log(pessoa1.calculaIMC)
pessoa1.calculaIMC = 123
console.log(pessoa1.calculaIMC)
 //onsole.log(pessoa1.chamaNome())
pessoa1.chamaNome = "Augusto Abreu"

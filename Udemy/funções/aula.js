//funções auto-invocadas
//IIFE - immeaditely invoked function espression 

(function(idade, peso, altura) {

    const sobrenome = "Locatelli"



    function criaNome(nome) {
        return nome + " " + sobrenome
    }


    function falaNome() {
        console.log(criaNome("Erik"))
        console.log(idade, peso, altura)
    }

    falaNome()

}) (20, 1.80, 72) // a função se auto chama ao fim do seu corpo, não interferindo no funcionamento das demais partes do código. 
// nessa parte é onde os dados viriam do escopo global ou de outra função fora da IIFE
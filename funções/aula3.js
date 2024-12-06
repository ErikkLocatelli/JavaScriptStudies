// retorno de funções 
// return - termina a função retorna aquilo que deve retornar 
// retorno vazio é undefined 
function soma(a, b) {
    let somar = a+b
    return somar
}

console.log(soma(5,15))

function chamaAlert() {
    alert("Você foi avisado")
}

function criaPessoa(nome, sobrenome) { // function que cria um objeto 
    return pessoa = {
        nome, 
        sobrenome
    };
}

criaPessoa("Erik", "Locatelli")
console.log(pessoa.nome)
console.log(pessoa)
const p1 = criaPessoa("Felipe", "Fagundes")
console.log(p1.nome)

function falaFrase(comeco) {

}

function multiplica(n1,n2) {
    return n1 * n2; 
}

console.log(multiplica(4, 4))

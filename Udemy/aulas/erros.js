//erros com possíveis possibilidades de erro 

// try tente executar, caso dê erro, ele direciona para catch 

let nErro = 0; 

try {
    console.log(naoExisto)
} catch(erro) {
    console.log("Não existe")
    let naoExisto = 10
    nErro++
}

console.log(nErro)
console.log(naoExisto)


const fs = require('fs');

//Exemplo 1: Função que lê um arquivo 
// Funções de CallBack utilizando uma async 
/*
fs.readFile("AdaSantander/arquivo.txt", (erro, conteudoDoArquivo) => { //leitura de um arquivo. 
    if(erro) {
        console.log("O arquivo não pode ser aberto, devido ao erro", erro)
    } else {
        console.log(String(conteudoDoArquivo))
    }
}); 

// Exemplo 2: setTimeOut()
// Definição de tempo para uma ação ocorrer 
setTimeout(()=>{
    console.log("Isso aqui vai ser executado após os dois segundos")
}, 2000 ) */

// Promessas - promisses 

function lerArquivos() {
return new Promise((resolve, reject) => { 
    fs.readFile("AdaSantander/arquivo.txt", (erro, conteudoDoArquivo) => { //leitura de um arquivo. 
        if(erro) {
           reject("O arquivo não pode ser aberto, devido ao erro", erro)
        } else {
            resolve(String(conteudoDoArquivo))
        }
    }); 
});//criando uma promessa 
}
/*
lerArquvos()
.then((retornoDoResolve) => {
    console.log("A promessa foi executada, aqui está o seu arquivo: ", retornoDoResolve)
})

.catch((erro) => {
    console.log("Deu erro, o seu erro é: ", erro)
})

.finally(()=> {
    console.log("Parabéns a promisse foi completa")
})
*/

// async / aweait 

async function leituraDeDados() {
    console.log("Executa antes")
    const retornoDapromessa = await lerArquivos() //aguarda a resposta ser resolvida
    console.log(retornoDapromessa) 
    console.log("Executa depois")
}

leituraDeDados()

async function testaTempo() {
    console.log("Executa antes")
    const retornoDoTempo = await setTimeout(() => {
        console.log("2 Segundos de bobo")
    },2000)
    console.log(retornoDoTempo)
    console.log("executaDepois")
}

testaTempo()
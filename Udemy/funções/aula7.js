// funções geradoras 

function* gerador1() {
    yield "valor 1"; 
    yield "valor 2";
    yield "valor 3";
}

const g1 = gerador1(); 
console.log(g1.next())
for (let valor of g1) {
    console.log(valor)
}

const pessoa1 = {
    nome: "Erik", 
    idade: 12, 
}


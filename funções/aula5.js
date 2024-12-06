// funções de call-back
//definitivamente bem confuso, necessário posteriomente aprofundar o conceito

function rand(min = 100, max= 3000) {
    const num = Math.random() * (max - min) + min // função que gera um numero aleatório entre a faixa de tempo determinada
    return num; 
}

function f1(callback) {
    setTimeout(function(){
        console.log("f1")
        if(callback) callback(); 
    }, rand())
}

function f2(callback) {
    setTimeout(function(){
        console.log("f2")
        if(callback) callback(); 
    }, rand())
}

function f3(callback) {
    setTimeout(function(){
        console.log("f3")
        if(callback) callback(); 
    }, rand())
}

//aqui é previsto que a exec ocorra, mas a função apenas rode com base no time definido 

f1()
f2();
f3();
console.log("Primeiro, pois não há timer")
function mostraHora() {
    let data = new Date()

    return data.toTimeString().split(' ')[0];
    
}



const timer = setInterval(function() {
    console.log(mostraHora())
}, 100); 

setTimeout(function(){ // funçao que serve para parar a execução da setInterval 
    clearInterval(timer)},
     10000); 

const msg = setTimeout(function() {
    console.log("Olá mundo");
}, 12000)

setTimeout(function(){
    clearInterval(msg)
    console.log("Fim de operação")
}, 15000)

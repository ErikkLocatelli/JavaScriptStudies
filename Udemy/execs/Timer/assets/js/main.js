const inicio = document.querySelector('#botaoInicio');
const zerar = document.querySelector("#botaoZerar");
const espaçoTimer = document.querySelector("#localTimer");
const parar = document.querySelector('#botaoPause');

function mostraHora() {
let data = new Date(); 
let dataAgora = data.toTimeString().split(' ')[0];
return dataAgora;

};

inicio.addEventListener('click', function(event){
    iniciar(); 
});


zerar.addEventListener('click', function(event){
    zerou(); 
});


function iniciar() {
    setInterval(function(){ 
        espaçoTimer.textContent = mostraHora(); 
    }, Infinity)
}

function parou() {
    setTimeout(function(){
        clearInterval(espaçoTimer)
    })
}

function zerou() {
    espaçoTimer.textContent = "00:00:00"
}
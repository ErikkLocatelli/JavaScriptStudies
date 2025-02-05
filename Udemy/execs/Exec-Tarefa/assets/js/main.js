const inputtarefa = document.querySelector(".input-tarefa") //lembrar do .tarefa ao puxar class ou # para divs
const btnTarefa = document.querySelector(".btn-tarefa")
const listaTarefas = document.querySelector(".tarefas")

function criaLista() {
    const li = document.createElement('li') //funç]ao própria do JS que cria um elemento, nesse caso criando uma li das litas.
    return li; 
}

function criaDelete() {
    const botaoDelete = document.createElement('input');
    botaoDelete.type = "button";
    botaoDelete.value = "apagar";  
    botaoDelete.addEventListener('click', function(e){
        botaoDelete.parentElement.remove(); // remove o pai dele 
        removeTarefa()
    }) 
    return botaoDelete; 
}

function criaTarefa(textoInput) {
    const li = criaLista();
    li.innerText = textoInput;
    listaTarefas.appendChild(li);
    const botaoDelete = criaDelete();
    li.appendChild(botaoDelete); // aloca o botão delete criado anteriormente para o seu PAI (condição que permite exclusão logo após)
    limpaTarefa()
    salvaTarefa(textoInput)
}

function limpaTarefa() {
    inputtarefa.value = " "; //limpa a barra de escrita do site. 
    inputtarefa.focus();  
}

function salvaTarefa(textoInput) {
    const liTarefas = listaTarefas.querySelectorAll('li')
    const tarefasSalvas = []; 

    for (let tarefa of liTarefas) {
        console.log(tarefa.innerText)
    }
}

function removeTarefa() {
    tarefaSalva.pop()
    console.log(tarefaSalva)
}

btnTarefa.addEventListener('click', function(event){
    if (!inputtarefa.value) return alert("Defina uma tarefa");
    criaTarefa(inputtarefa.value)
       
})

inputtarefa.addEventListener('keypress', function(e){ //evento que permite a captação das teclas pressionadas no escopo em que o addEvent é chamado 
    if (e.keyCode === 13) { // como configurar a tecla desejada para envio. Cada tecla possuí o seu código (enter = 13)
        if (!inputtarefa.value) return alert("Defina uma tarefa");
        criaTarefa(inputtarefa.value)
    }
    
})

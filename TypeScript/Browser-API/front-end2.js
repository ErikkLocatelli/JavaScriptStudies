const botaoAumentar = document.querySelector("#aumentarBotao")
const botaoDiminuir = document.querySelector("#diminuirBotao")
const contador = document.querySelector("#contador")
const inputText = document.querySelector("#inputText")
const botaoStyle = document.querySelector("#botaoStyle")
const titulo = document.querySelector("#titulo")

botaoAumentar.addEventListener("click", () => {
    let valorAtual = Number(contador.textContent)
    valorAtual += 1; 
    contador.textContent = valorAtual; 
});


botaoDiminuir.addEventListener("click", () => {
    let valorAtual = Number(contador.textContent)
    valorAtual -= 1; 
    contador.textContent = valorAtual; 
});

inputText.addEventListener("input", () => {
    console.log(inputText.value)
} )

botaoStyle.addEventListener("click", ()=>{
    const body = document.querySelector('body')
    body.style.backgroundColor = "#222"
    body.style.color = "white"
})



function mudaTitulo() {
    titulo.textContent = "Mudando o titulo através do click do botão"
}

// manipular classes usando JS 

botaoDiminuir.classList.add('btn') // Adicionando uma classe e modificando o css apenas usando JS e não através do Html diretamente 
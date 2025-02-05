const paragrafos = document.querySelector(".paragrafos");
// nodeList, não é um array, mas funciona semelhante 
const paragrafosTodos = paragrafos.querySelectorAll('p'); //cria uma nodeList dos itens presentes dentro da div selecionada 
console.log(paragrafosTodos[1]) 
console.log(typeof paragrafosTodos)

const estilosBody = getComputedStyle(document.body); //computa todos os estilos registrados no nav (nesse caso no body)
const backgroundColorBody = estilosBody.backgroundColor; //cria uma const para pega exclusivamente a cor do background do body 
console.log(backgroundColorBody)

for (let p of paragrafosTodos) { //acessa todos os elementos p dentro da variável paragrafos
   p.style.backgroundColor = backgroundColorBody;
   p.style.color = 'white'
}


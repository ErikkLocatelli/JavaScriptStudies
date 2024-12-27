// Selecionar elementos da página 
// Pega os elementos com o nome de TAG - Não acho muito viável pra ser sincero. 
// 1. Pelo nome da tag 
const todosH1s = document.getElementsByTagName("h1")
console.log(todosH1s)

//2. Pelo nome da Classe 

//document.getElementsByClassName("nomeDaClasse")

//3. Pelo name - muito usado para inputs e formulários etc 

//document.getElementsByName("name")

//4. Pelo ID - idenificador único (seguindo a boa prática)

//document.getElementById("id")

// 5. QuerySelector 

//document.querySelector('')

// 6. query selectorALL 

// document.querySelectorAll

// Criando elementos na página - Create elements 
const lista = document.querySelector("#lista")
const listaLis = document.querySelectorAll('ol > li')
const novaTagLi = document.createElement('li') // criando a tag LI vazia 
novaTagLi.textContent = "Segundo Item - Teste"; 
console.log(novaTagLi)
console.log(lista)
// lista.appendChild(novaTagLi)

lista.insertBefore(novaTagLi, listaLis[1]) //complexo kkk, mas dá pra usar, só tem que ver se é útil 
lista.removeChild(novaTagLi)
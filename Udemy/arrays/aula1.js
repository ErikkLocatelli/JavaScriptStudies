// revisao de arrays - valores por referencia 
//pop - retira o último elemento e retorna esse valor, caso adicionado a uma variável 
//shift - trabalha no começo do array 
//push - adiciona ao final do elemento 
//unshift - adiciona no inicio // mas detalhe, tanto shift quanto unshift afetam as posições do array 
//slice - corta uma parte do array e retorna a parte cortada nome.slice(primeiro elemento, aonde ele acaba (mas n vai pegar esse valor em especifico))
//split - separa uma string em um array
//join faz o contrário 
const nomes = ["Erik", "Leandro", "Vinicius"]
delete nomes[1] // Para remover uma posição do array, mas sem mexes na estrutura e posições, função delete  
console.log(nomes)

const nomesCortados = nomes.slice(0,1)
console.log(nomesCortados)

// convertendo uma string em um array 

const nome = "Erik Locatelli Borba Gato"; 
const nomess = nome.split(" ")
console.log(nomess)

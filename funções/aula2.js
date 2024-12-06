// parametro de uma função

function funcao() { 
   let total = 0;  // arguments é o que salva os argumentos enviados, mesmo que a função n receba parametros, mas apenas para funções que são iniciadas com a palavra function 
   for (let argumento of arguments) { // iteração de of são para objetos iteraveis (variáveis, arrays, etc)
        total += argumento; 
   }
   console.log(total)
}

funcao("a", "b", "b") //o que eu mando é um argumento 


function des({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)    
}

des({nome: 'erik', sobrenome: 'locatelli', idade: 90}) //destruturação, estudar isso mais 

function Array([valor1, valor2, valor3]) { //desestruturação de arrays 
    console.log(valor1, valor2, valor3)
}

Erik = ["Erik", "Locatelli", 43, 65]

Array(Erik)
console.log(Erik.length)

function conta(operador, acumulador, ...numeros){ // ... rest operator, permite que após a puxada dos dois primeiros argumetnos como parametros, o resto que sobrou fique inteiramente agrupado no último parametro como um array
    for (let numero of numeros) {
        acumulador += numero
    }
    console.log(acumulador)
}

conta("+", 0, 34,45,23)
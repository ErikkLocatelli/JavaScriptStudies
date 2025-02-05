//controle de continuaçaõ e quebra de laço 
//break sai do laço
//continue continua o laço sem se importar com o restante das execs abaixo do código 

const numeros = [1,2,3,4,5,6,7,8,9,10]

for (let numero of numeros) {
    if (numero == 2) {
        continue //passa para próxima iteração do laço, sem executar o que está abaixo 
    }
    console.log(numero)
    
}
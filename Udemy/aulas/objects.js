const array = [1,2,3]; 
array.push(4); 

// lembrando wue const pode mudar os valores dentro, mas n reatribuir 
//agrupamento de variáveis (objeto)

const pessoa1 = {
    nome: "Erik",
    sobrenome: "Locatelli",  
    idade: 90, 

}; 

console.log(pessoa1.idade) //acessando o dado específico dentro do objeto. (nome da variável + aquilo que deseja acessar); 


function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome, 
        sobrenome: sobrenome,   //funçao que retorna objeto : factory 
        idade: idade
    };
}

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }; //forma contraída para quando os valores se repetem, 
}





const pessoa2 = criaPessoa("Rayanne", "Alexia", 20); //argumento e parametro 
const pessoa3 = criaPessoa("Fellipe", "Texas", 98); 
console.log(pessoa2.idade)
console.log(pessoa3.idade) 
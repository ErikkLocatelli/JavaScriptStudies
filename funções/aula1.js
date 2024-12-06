//parte de estudo sobre funções (do mais simples ao avançao)

function falaOI() { //function hoisting (posso criar a função antes de chamar, pois o JS eleva as funções para parte superior do motor)
    console.log("OI")
}

falaOI();

// - First-Class-Object (pode ser tratada como dado)
// function expression 

const nome = function(){ //variável que recebe uma função, desse modo ela se torna uma função. 
    console.log("sou um dado")
}


function executaFuncao(funcao) {
    funcao(); 
} // funçao que recebe uma outra função por meio do FCO (transformando a função em uma variável)

executaFuncao(nome)

//Arrow function 

const funcaoArrow = () => {
    console.log("Sou uma arrow")
}; 

// Dentro de um objeto 

const obj = {
    falar: function() { //função declarada dentro de um objeto
        console.log("Estou falando")
    }, 

    escutar() { //maneira simplificade de declarar as funções dentro de um objeto
        console.log("Estou escutando")
    }

};

obj.falar() //método de um objeto 
obj.escutar()
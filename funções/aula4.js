// escopo léxico 

// as funções reconhecem todas as indos globais (fora da função), bem como aquelas que estão dentro do seu escopo

// closures 

function retornaFuncao() {
    const nome = "Erik"; 
    return function () {
        return nome 
    };
}

const funcao = retornaFuncao() 
console.log(funcao);

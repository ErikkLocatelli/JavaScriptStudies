function meuEscopo() {

    const form = document.querySelector('.form'); //selecionador universal de elementos, serve para ids, 
    const texto = document.querySelector('.texto'); 

    const pessoas = []; 
 /*   
    form.onsubmit = function (evento) { //onsubmit faz com que o form seja enviado, a ação de submit está linkada na função evento, ou seja toda vez que enviar, ativa a função evento
        evento.preventDefault();  //previne que a ação n volte para o default 
        alert(1); 
        console.log("Foi enviado")
    }; */ 
    
    
    function recebeEventoForm (evento) {
        evento.preventDefault(); 
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome'); 
        const idade = form.querySelector('.idade'); 
        const altura = form.querySelector('.altura');

        pessoas.push({ //adiciona objetos ao array. 

            nome: nome.value, 
            sobrenome: sobrenome.value, 
            idade: idade.value,
            altura: altura.value  

        });

        console.log(pessoas)
        texto.innerHTML += `${nome.value} ${sobrenome.value} ${idade.value} ${altura.value}`; 

    };

    

    form.addEventListener('submit', recebeEventoForm) //escutador de evento (primeiro qual será o evento e depois onde ele será atribuido)
}

meuEscopo(); 
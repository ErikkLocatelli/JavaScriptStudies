// Fetch API (url) - promise 

// É possível abordar tanto com then/catch, quanto com await e async 

// then / catch 

/*

fetch('https://viacep.com.br/ws/89254305/json/')  

.then((resposta)=> {
    console.log(resposta);
    resposta.json().then((dados) => console.log(dados));  // recebendo os dados e armazenando em formato json (n pode salvar direito na variável pq json() também é uma promise e leva um tempo para executar 
})

.catch((erro)=>{
    console.log("Infelizmente houve um problema " + erro);
}) 

const data = dados; 

*/ 

// exemplo com await/async 

async function obterDados() {
    try {
    const resposta = await fetch('https://dummyapi.online/api/movies/3')
    const respostaJson = await resposta.json()
    console.log(respostaJson) 
    }
    catch(erro) {
        console.log("Deu xabu" + erro)
    }
}

obterDados()

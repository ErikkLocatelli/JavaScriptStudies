// Estudo das funçoes defineProperty e defineProperties 

function Produto(nome, preco, estoque) {
    
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque", {
        enumerable: false, // mostra a chave quando o objeto for chamado
       // value: estoque, //define o valor para a chave (notar que ela não é definida dentro do constructor como as outras)
       // writable: false,  // permite ou não a alteração do valor dessa chave por meio externo
        configurable: false, // permite que a chave seja ou não reconfigurada em outra aparição do defineProperiry
        get: function() {
            return estoque; 
        },
        set: function(valor) {
            
        }
    }); 



}

const produto1 = new Produto("Camiseta", 20, 3)
produto1.estoque = 555; 
console.log(produto1.estoque)
console.log(Object.keys(produto1)) //como ele tá falso não aparece
for (let chave in produto1){
    console.log(chave)
}
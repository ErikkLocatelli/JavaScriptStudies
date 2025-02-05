// Alguns métodos importantes na manipulação de objetos 

const produto = {nome: "Caneca", preco: 123} 
const outroProduto = produto; // nao copia o objeto, apenas faz com que o novo objeto aponte para o mesm local na memória
const outroProduto2 = {...produto, material:"ceremica"} //utilizando o spread operator, ele copia o objeto e o poe em um novo, mas sem apontar para o mesmo local, além de permitir adicionar mais elementos caso seja o desejo 
console.log(outroProduto2)

console.log(Object.keys(outroProduto2)) // mostra as chaves do objeto
for (let chaves in outroProduto2) {
    chaves.startsWith("p")?console.log("esse sim"):console.log("esse nao")
}


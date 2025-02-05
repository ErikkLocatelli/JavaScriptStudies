// MAP - método map, muito parecido com o funcionamento do filter, mas ele sim irá alterar o array raiz


// dobrar os numeros 
const numeros = [5,50,80,2,3,4,5,90,76,34,6];

const numerosDobrados = numeros.map(dobrados => dobrados*2)
console.log(numerosDobrados)

const pessoas = [
    { nome: "Erik", idade: 20}, 
    {nome: "Luiz", idade: 23}, 
    {nome: "Lucas", idade: 17}, 
    { nome: "Augusto", idade: 87},
    { nome: "Marcos", idade: 87}
]; 

const apenasNomes = pessoas.map(nomes => nomes.nome) 
console.log(apenasNomes)

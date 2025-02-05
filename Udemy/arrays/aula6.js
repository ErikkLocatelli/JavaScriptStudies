// Reduce 

// Mais utilizada para reduzir uma lista de arrays para um unico valor, além de outras funçoes 

const numeros = [5,50,80,2,3,4,5,90,76,34,6]; 

const soma = numeros.reduce(function(acumulador, valor){
    acumulador = numeros.filter(valor => valor % 2 == 0)
    acumulador = acumulador.map(valor => valor*2)
    return acumulador + valor 
}, [ ]); // Esse 0 é um valor inicial para o acumulador. 

console.log(soma)


const pessoas = [
    { nome: "Erik", idade: 20}, 
    {nome: "Luiz", idade: 23}, 
    {nome: "Lucas", idade: 17}, 
    { nome: "Augusto", idade: 87},
    { nome: "Marcos", idade: 87}
];  



const listaPessoas = pessoas.reduce((acumulador, valor) => {
    acumulador.push(valor.nome);
    return acumulador;
  }, []);

  console.log(listaPessoas)


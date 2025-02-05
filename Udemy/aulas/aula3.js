
n2 = window.confirm("deseja realmente cancelar"); 
if (n2 == true) {
    alert("Ok arquivo excluído"); 
}
if (n2 == false) {
    alert("Arquivo salvo");
} 
prompt("Gorila da bola azul"); 

// tudo que é retornável pelo prompt é string, logo para operação é necessário transformar 

let num = Number(prompt("Digite um numero")); 
console.log(typeof num); 
console.log(num); 

let testeFor = Number(prompt("Digite um numero para a rotação")); 
console.log(testeFor);
let n1; 
let total; 
for (let i = 0; i < testeFor;i++){
    n1 = Number(prompt("Digite seu número")); 
    console.log(n1); 
    total =+ n1; 
    console.log(total); 
} 
console.log(total);



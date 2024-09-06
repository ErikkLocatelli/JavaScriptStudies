let contador = 1; 
contador += contador;
contador++; // funciona ingual as duas opções  
console.log(contador); 
console.log(++contador); //clean code
contador**=4; 
console.log(contador); 
console.log(contador*5);
let n1 = '5'; 
let n2 = parseInt(n1); //transforma uma string para number (int, float)
let n3 = Number(n1); //mesma coisa, mas difere de precsiar de ser float ou int, vai assumir a forma de ambos
console.log(n2); 
console.log(typeof n2);   
console.log(n3); 
console.log(typeof n3);

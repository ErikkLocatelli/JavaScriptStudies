let num1 = 1; 
let num2 =2.565464564564; //number 


console.log(num1.toString()); //converte um number para string  
num1 = num1.toString(2); //esse dois apresenta a rep binária
num2 = num2.toFixed(1); //altera o núemero de casas decimais e arredonda 
console.log(num2) 
console.log(Number.isInteger(num1)); //retorna verdadeiro ou falso se o numero é inteiro ou não. 
console.log(Number.isNaN(num1)); //retorna se é NUN (false pra não é e true pra é)
console.log(num1 + num2); 
//parseInt e parseFloat para passar os números para um desses coisas 
num3 = 234.2
console.log(Number.isInteger(num3 - parseInt(num3))); 




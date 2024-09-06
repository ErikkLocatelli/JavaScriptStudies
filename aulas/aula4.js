let umaString = "Uma String, que talvez se tranforme em um texto cheio de String";  // \\ para escapar das aspas caso queira envolver alg oem aspas

console.log(umaString) //para apontar qual posição da string deseja trabalhar; 
console.log(umaString.indexOf('String')) //aponta para qual vértice inicia o elemento indicado; 
console.log(umaString.lastIndexOf('tranforme')); //mesma coisa, mas inicia do final da string
console.log(umaString.match(/y/g)); //busca por uma letra em especíofico dentro de uma string 
console.log(umaString.replace(/String/g, "Cartman")); //troca a palavra, o g evidencia a por em todos.
console.log(umaString.length);
console.log(umaString.slice(2,56)) //corta uma parte específica da string. 
console.log(umaString.toUpperCase()); //bota em letra maiscula
console.log(umaString.toLocaleLowerCase);  //minucusla 


function saudacao() {
   // console.log(`Hello World ${nome}`); 
    return `Hello World ${nome}`; 
}

function soma(x, y) {
    console.log("Vamos somar"); 
     let resultado = x+y; 
     return resultado; 
}


let nome = "Erik"; 
let teste = saudacao(nome); 
console.log(teste); 

console.log(soma(1,4)); 

const raiz = function (n) { // declarando uma função por meio de uma variável 
    return n ** 0.5; 
}

const adição = (n1, n2) => n1 + n2;  //arrow function (maneira mais elegante de declarar uma function), separa a palavra function e declara essa seta ao lado, funciona igual a maneira convecional
    


console.log(adição(9, 10)); 

console.log(raiz(9)); //aqui declar o n; 
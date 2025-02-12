// Primeiros Passos para realizar o projeto do validador de CPF. 

// 705.484.450-52 

let cpf = "705.484.450-52" // Sempre deve ser uma STRING, mas para realizar os cálculos deve ser num
let cpfLimpo = cpf.replace(/\D+/g, "") //Basicamente o comando a frente é uma represntação para eliminar tudo que não é um número. A segunda parte da sentença fala que deve ser substituído por um espaço vázio 
console.log(cpfLimpo)

// 
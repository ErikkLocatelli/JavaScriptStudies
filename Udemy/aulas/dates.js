const data = new Date() // função construtora tipo java
console.log(data.getFullYear()) //chama aquilo que desejar 

let hora = data.getHours(); //minutes, day, month, year, mls, day(dia da semana)
let dia = data.getDay()
console.log(dia)
console.log(ver = hora > 18 ? 'noite' : 'dia')
console.log(ver = data.getDay == 0 || dia == 6 ? 'Fim de semana' : 'Dia de semana ' + dia)

function zeroEsquerda(num) {
    return num > 10 ? num : `0${num}`
}

function formataData(data) {
    let dia = zeroEsquerda(data.getDate());
    let mes = zeroEsquerda(data.getMonth() + 1); 
    let ano = zeroEsquerda(data.getFullYear()); 
    let hora = zeroEsquerda(data.getHours()); 
    let min = zeroEsquerda(data.getMinutes()); 
    let sec = zeroEsquerda(data.getSeconds()); 

    return console.log(`${dia}/${mes}/${ano}  ${hora}:${mes}:${sec}`)
}

formataData(data)


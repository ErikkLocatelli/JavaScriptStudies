function testaNumero (num) {
    if (num %3 == 0 || num % 5 == 0) {
    
    if (num%5 == 0 && num%3==0) {
            return console.log(`${num} = FizzBuzz`)
    }

    if (num%3 == 0) {
        return console.log(`${num} = Fizz`)
    } 
    
    if (num%5== 0) {
        return console.log(`${num} = Buzz`)
    }

}
    else {
        return console.log(`${num}`)
    }
}

for (let i = 0; i <= 100; i++) {
    testaNumero(i)
}

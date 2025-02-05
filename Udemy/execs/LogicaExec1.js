function maiorNumero(n1, n2) {
    const maior = n1 > n2 ? n1 : n2
    return maior
}

const maiorNumero2 = (n1, n2) => n1 > n2 ? n1 : n2; // arrow function 

console.log(maiorNumero(8, 12))
console.log(maiorNumero2(10,20)); 
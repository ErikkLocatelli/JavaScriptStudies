// revisao do uso de POO em Js (coisas básicas)

class Veiculo {
   constructor(modelo, ano, marca, velocidadeMedia, rodas) {
    this.modelo = modelo, 
    this.ano = ano, 
    this.marca = marca, 
    this.rodas = rodas, 
    this.velocidadeMedia = velocidadeMedia
    this.velocidadeInicial = 0; 
   };

   andar(velocidadeAtual) {
    return this.velocidadeInicial += velocidadeAtual
   };

   diminuir(velocidadeReduzida) {
    return this.velocidadeInicial > 0 ? this.velocidadeInicial - velocidadeReduzida : this.velocidadeInicial
   }


}

class Motos extends Veiculo {
    constructor(modelo, ano, marca, velocidadeMedia, rodas, capacete) {
        super(modelo, ano, marca, velocidadeMedia, rodas), 
        this.capacete = capacete; 
        this.velocidadeInicial = 0
    };  
}



let Veiculos = []; 
const Subaru = new Veiculo("Subaru", 2001, "Toyota", 200,4)

Veiculos.push(Subaru)

const Spider = new Veiculo("Spider", 2017, "Ferrari", 300,4)

Veiculos.push(Spider)

const Gol = new Veiculo("Gol", 2023, "WolksWagem", 130,4)

Veiculos.push(Gol)
const motoca = new Motos("motoca", 2023, "BMW", 220, 2, "Suzuki")
Veiculos.push(motoca)
console.log(motoca.diminuir(45));
console.log(Veiculos)

let Carros = Veiculos.filter(carros => carros.rodas > 2) 
console.log(Carros)
//const carrosComS = Carros.filter(carro => carro.modelo.startsWith("S"));

//console.log(carrosComS)


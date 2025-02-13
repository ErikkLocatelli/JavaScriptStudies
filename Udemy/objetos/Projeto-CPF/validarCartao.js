class ValidaCartao {
    constructor(cartao) {
        this.cartao = cartao; 
    }

    validarCartao(){
       // let soma = 0; 
       let numerosDobrados = []
        for (let i= this.cartao.length-1; i > -1; i--){
            if(this.cartao[i%2!=0]){
                numerosDobrados = this.cartao.map(cartao => parseInt(this.cartao[i])*2) 
            }
        }
        console.log(numerosDobrados)
    }

}



const cartao = new ValidaCartao("4921815436274388")
cartao.validarCartao()
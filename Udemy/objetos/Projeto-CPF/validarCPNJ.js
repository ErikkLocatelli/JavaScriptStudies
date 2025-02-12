class ValidaCNPJ {
    constructor(cnpj) {
        this.cnpj = cnpj.replace(/\D+/g, ""); // o CNPJ já entra na funçao sem caracteres
    }

    sequencial() {
        return /^(\d)\1{13}$/.test(this.cnpj);
    }

    calcularDigitoUm(limite) {
        let soma = 0;
        let resto;  
        let pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        console.log(this.cnpj)
        for (let i = 0; i < limite; i++) {  
            console.log(`Dígito: ${this.cnpj[i]} * Peso: ${pesos[i]} = ${parseInt(this.cnpj[i]) * pesos[i]}`);
            soma += parseInt(this.cnpj[i]) * pesos[i];
        }
    
        console.log("Soma total:", soma);
        resto = soma % 11; 
        console.log("Resto da divisão por 11:", resto);
        console.log("Dígito verificador 1:", resto < 2 ? 0 : 11 - resto);
    
        return resto < 2 ? 0 : 11 - resto;
    }
    
    calcularDigitoDois(limite) {
        let soma = 0; 
        let resto; 
        let pesos = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
        for (let i = 0; i < limite; i++) {  
            console.log(`Dígito: ${this.cnpj[i]} * Peso: ${pesos[i]} = ${parseInt(this.cnpj[i]) * pesos[i]}`);
            soma += parseInt(this.cnpj[i]) * pesos[i];
        }
    
        console.log("Soma total:", soma);
        resto = soma % 11; 
        console.log("Resto da divisão por 11:", resto);
        console.log("Dígito verificador 2:", resto < 2 ? 0 : 11 - resto);
    
        return resto < 2 ? 0 : 11 - resto;
    }
    

    validarCNPJ() {
        if (this.cnpj.length !== 14 || this.sequencial()) return false;

        const digito1 = this.calcularDigitoUm(12); 
       
        const digito2 = this.calcularDigitoDois(13); 
        

        if(digito1 !== parseInt(this.cnpj[12])) return false 
        if(digito2 !== parseInt(this.cnpj[13])) return false   

        return true

    }
}

const cnpj = new ValidaCNPJ("47.921.385/0001-06")
console.log(cnpj.validarCNPJ()?"O CNPJ é valido" : "O CNPJ não é válido")




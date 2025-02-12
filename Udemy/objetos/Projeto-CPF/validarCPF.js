class ValidaCPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, ""); // Remove caracteres não numéricos
    }

    ehSequencial() {
        return /^(\d)\1{10}$/.test(this.cpf); // Verifica se todos os números são iguais
    }

    calcularDigito(limite) {
        let soma = 0;
        for (let i = 0; i < limite; i++) {
            soma += parseInt(this.cpf[i]) * (limite + 1 - i);
        }
        let resto = (soma * 10) % 11;
        return resto === 10 || resto === 11 ? 0 : resto;
    }

    validar() {
        if (this.cpf.length !== 11 || this.ehSequencial()) return false;

        const digito1 = this.calcularDigito(9);
        const digito2 = this.calcularDigito(10);

        return digito1 === parseInt(this.cpf[9]) && digito2 === parseInt(this.cpf[10]);
    }
}

// Exemplo de uso
const cpf = new ValidaCPF("705.984.450-52");
console.log(cpf.validar() ? "CPF válido!" : "CPF inválido!");
function calcularMediaAvaliacao(avaliacoes) {
	
	let somaNotas = 0; 
	let totalClientes = 0; 

	avaliacoes.forEach(avaliacao => {
		somaNotas += avaliacao.nota * avaliacao.clientes;
		totalClientes += avaliacao.clientes
	}); 

	return somaNotas/totalClientes;
}

const avaliacoes = [
	{"clientes": 2, "nota": 1}, 
	{"clientes": 15, "nota": 2},
	{"clientes": 18, "nota": 3}, 
	{"clientes": 25, "nota": 4}, 
	{"clientes": 40, "nota": 5}
]; 

console.log(calcularMediaAvaliacao(avaliacoes))
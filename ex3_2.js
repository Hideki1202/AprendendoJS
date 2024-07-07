const prompt = require("prompt-sync")()
const veiculo = prompt("Digite o nome do veículo: ")
const preco = Number(prompt("Digite o valor do veículo: "))
const entrada = preco * 0.5
const parcela = (preco* 0.5)/12
console.log(`Nome do veículo: ${veiculo}`)
console.log(`Entrada de R$${entrada}`)
console.log(`+12x de R$${parcela}`)
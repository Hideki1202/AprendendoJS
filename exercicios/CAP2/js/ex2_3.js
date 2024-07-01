const frm = document.querySelector("form")
const outModelo = document.getElementById("outModelo")
const outEntrada = document.getElementById("outEntrada")
const outParcelas = document.getElementById("outParcelas")

frm.addEventListener("submit", (e) =>{
    const modelo = frm.inModelo.value
    const entrada = (Number(frm.inPreco.value) * 0.5).toFixed(2)
    const parcelas = (Number(frm.inPreco.value)/12).toFixed(2)

    outModelo.innerText = `Promoção ${modelo} `
    outEntrada.innerText = `Entrada de R$${entrada}`
    outParcelas.innerText = `+12x de R$${parcelas}`

    e.preventDefault()
})
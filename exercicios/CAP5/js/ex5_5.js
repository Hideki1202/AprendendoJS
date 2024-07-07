const frm = document.querySelector("form")
const outDescricaoValor = document.getElementById("outDescricaoValor")
const outQuantContas = document.getElementById("outQuantContas")
let contador = 0
let contadorValor = 0
frm.addEventListener("submit", (e)=>{
    const descricao = frm.inDescricao.value
    const valor =Number(frm.inValor.value)
    contador += 1
    contadorValor += valor

    outDescricaoValor.innerText += `${descricao} - R$: ${valor} \n`
    outQuantContas.innerText = `--------------------------------\n${contador} Conta(s) - total R$: ${contadorValor}`
    

    e.preventDefault()
})
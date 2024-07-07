const frm = document.querySelector("form")
const outRaizQuadrada = document.getElementById("outRaizQuadrada")

frm.addEventListener("submit", (e)=> {
    const num = Number(frm.inNumero.value)
    const raiz = Math.sqrt(num)
    if(Number.isInteger(raiz)){
        outRaizQuadrada.innerText = `Raíz Quadrada de ${num} é ${raiz}`
    }else{
        outRaizQuadrada.innerText = `${num} não tem raíz quadrada exata`
    }
    e.preventDefault()
})
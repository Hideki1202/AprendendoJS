const frm = document.querySelector("form")
const outPesoIdeal = document.getElementById("outPesoIdeal")

frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value
    const homem = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)
    let pesoIdeal
    
    if(homem){
        pesoIdeal = 22 * Math.pow(altura,2)
    }else{
        pesoIdeal = 21 * Math.pow(altura, 2)
    }
    
    outPesoIdeal.innerText = `O peso de  ${pesoIdeal.toFixed(2)}kg`

    e.preventDefault()
})
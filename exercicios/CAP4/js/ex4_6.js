const frm = document.querySelector("form")
const outParImpar = document.getElementById("outParImpar")

frm.addEventListener("submit", (e)=>{
    const num = Number(frm.inNumero.value)
    if(num%2 != 0){
        outParImpar.innerText = "É ímpar"
    }else{
        outParImpar.innerText = "É par"
    }
    e.preventDefault()
})
const frm = document.querySelector("form")
const outPrimo = document.getElementById("outPrimo")
let primo = 0
frm.addEventListener("submit", (e)=>{
    const num = Number(frm.inNumero.value)
    for(let i = 0; i<=num; i++){
        if (num%i == 0){
            primo += 1
        }
    }
    if(primo>2){
        outPrimo.innerText = "Não é primo"
    }else{
        outPrimo.innerText = "É primo"
    }
    e.preventDefault()
    primo = 0
})
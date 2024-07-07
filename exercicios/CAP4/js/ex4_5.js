const frm = document.querySelector("form")
const outImpossivel = document.getElementById("outImpossivel")
const outNotas100 = document.getElementById("outNotas100")
const outNotas50 = document.getElementById("outNotas50")
const outNotas10 = document.getElementById("outNotas10")

frm.addEventListener("submit", (e)=>{
    const saque = Number( frm.inSaque.value)
    const notas100 = Math.floor(saque/100)
    const notas50 = Math.floor((saque%100)/50)
    const notas10 = Math.floor(((saque%100)%50)/10)
    if(saque%10 != 0){
        outImpossivel.innerText = "Não é possível exibir saque com esse valor"
    }else{
        outImpossivel.innerText = ""
        outNotas100.innerText = `Notas de R$100: ${notas100}`
        outNotas50.innerText = `Notas de R$50: ${notas50}`
        outNotas10.innerText = `Notas de R$10: ${notas10}`
    }
    

    
    e.preventDefault()

})
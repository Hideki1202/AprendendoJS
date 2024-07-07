const frm = document.querySelector("form")
const outErros = document.getElementById("outErros")
const outChances = document.getElementById("outChances")
let numDesc = Math.round(Math.random()*100)


let tentativas = []
frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    console.log(numDesc)

    if(tentativas.includes(num)){
        alert("Esse número já foi apostado!")
    }else{
        tentativas.push(num)

        //Verifica se ganhou
        if(num == numDesc){
        
            numDesc = Math.round(Math.random()*100) //Vai ser gerado outro número aleatorio
        
            tentativas = []
            alert("Acertou!")
        }
    
        //Verifica se existem chances restantes
        if( 10 - tentativas.length == 0){
            alert("Chances esgotadas! Estatísticas zeradas")
            tentativas = []
            numDesc = Math.round(Math.random()*100) //Vai ser gerado outro número aleatorio
        }
        outChances.innerText = 10 - tentativas.length
        outErros.innerText = tentativas.length +": "+ tentativas.join("; ")
    }
    





    
})
const frm = document.querySelector("form")
const outNome = document.getElementById("outNome")
const outMedia = document.getElementById("outMedia")
const outAprovacao = document.getElementById("outAprovacao")

frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = ((nota1 + nota2)/2).toFixed(1)


    outNome.innerText = `Situação do aluno ${nome}`
    outMedia.innerText = `Média do aluno foi ${media}`
    if(media>7  ){
        outAprovacao.innerText = `Parabéns! Aluno aprovado`
        outAprovacao.style = "color: blue"
    }
    else if(media >5){

        outAprovacao.innerText = `Aluno em exame...`
        outAprovacao.style = "color: orange"
        
    }
    else{
        outAprovacao.innerText = `Sentimos muito, aluno desaprovado`
        outAprovacao.style = "color: red"
    }

    e.preventDefault()
})
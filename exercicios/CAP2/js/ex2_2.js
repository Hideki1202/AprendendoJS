const frm = document.querySelector("form")
const elementoTitulo = document.getElementById("titulo")
const elementoDuracao = document.getElementById("duracao")

frm.addEventListener("submit", (e)=>{
    const titulo = frm.inTitulo.value
    const totalMinutos = Number(frm.inMinutos.value)
    const horas = Math.floor(totalMinutos/60)
    const minutos = totalMinutos%60

    elementoTitulo.innerText=titulo
    elementoDuracao .innerText= `${horas}hora(s) e ${minutos}minuto(s)`
    e.preventDefault()
})
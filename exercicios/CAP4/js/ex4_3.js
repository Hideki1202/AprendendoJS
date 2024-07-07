const frm = document.querySelector("form")
const outHoraFranca = document.getElementById("outHoraFranca")

frm.addEventListener("submit", (e)=>{
    const horaBrasil = Number( frm.inHoraBrasil.value)
    const horaFranca = horaBrasil + 5 > 24 ? (horaBrasil + 5)-24 : horaBrasil+5

    outHoraFranca.innerText = "Hora na França: "+horaFranca.toFixed(2)
    e.preventDefault()
})
const frm = document.querySelector("form")
const outNumeros = document.getElementById("outNumeros")

frm.addEventListener("submit", (e)=>{
    const num = Number(frm.inNumero.value)

    for(let i = num; i>0; i--){
        outNumeros.innerHTML += `<h3>${i}</h3>`
    }
    e.preventDefault()
})
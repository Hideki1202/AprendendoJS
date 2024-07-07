const frm = document.querySelector("form")
const outAtendimento = document.getElementById("outAtendimento")
const outPacientes = document.getElementById("outPacientes")
const pacientes= []

frm.addEventListener("submit",(e)=>{
    outPacientes.innerText = ""
    let i = 0
    const paciente = frm.inPaciente.value
    pacientes.push(paciente)

    for(const pac of pacientes){
        i += 1
        outPacientes.innerText += `${i}. ${pac}\n`
    }

    e.preventDefault()

})

frm.btUrgencia.addEventListener("click", ()=>{
    outPacientes.innerText = ""
    let i = 0

    const paciente = frm.inPaciente.value
    pacientes.unshift(paciente)
    for(const pac of pacientes){
        i += 1
        outPacientes.innerText += `${i}. ${pac}\n`
    }
})

frm.btAtender.addEventListener("click", ()=>{
    
    outPacientes.innerText = 0
    let i = 0
    if(pacientes.length == 0){
        outAtendimento.innerText = "Nenhum paciente para ser atendido"
    }else{
         outAtendimento.innerText = pacientes[0]
    }
   
    pacientes.shift()
    for(const pac of pacientes){
        i += 1
        outPacientes.innerText += `${i}. ${pac}\n`
    }
    if(pacientes.length == 0){
        outPacientes.innerText = "Não há pacientes no momento"
    }

    
})
if(pacientes.length == 0){
    outPacientes.innerText = "Não há pacientes no momento"
}
const frm = document.querySelector("form")
const outTabela = document.getElementById("outTabuada")

frm.addEventListener("submit", (e)=>{
    
    const num = Number(frm.inNumero.value)
   
    
    for(let i = 1; i<=10; i++){
        
        outTabela.innerHTML += `<h3>${num} x ${i} = ${num*i}</h3>`
        
        
    }
    
    e.preventDefault() 
})
  
    
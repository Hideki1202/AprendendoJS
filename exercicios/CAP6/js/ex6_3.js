const frm = document.querySelector("form")
const outResultado = document.getElementById("outResultado")

const carros = []

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)

    carros.push({modelo: modelo, preco: preco})


//    for (const carro of carros){
//        
//        const mod = carro.modelo
//        const prec = carro.preco
//
//        console.log(`${mod} - ${prec}`)
//    }
})

frm.btListar.addEventListener("click", ()=>{
    outResultado.innerText = `Lista de todos os carros \n----------------------------\n`
    for (const carro of carros){
        
        const mod = carro.modelo
        const prec = carro.preco

        outResultado.innerText += `${mod} - R$${prec}\n`
    }
})

frm.btFiltrar.addEventListener("click", ()=>{
    let min
    let max
    do{
        min =Number( prompt("Preço Mínimo para o carro: "))
        max =Number( prompt( "Preço Máximo para o carro: "))
        if(min < 0 || max < 0 ){
            alert("Os números precisam ser maiores que zero")
        }else if(isNaN(min) || isNaN(max)){
            alert("Os números precisam ser válidos")
            
        }else if(max<min){
            alert("O preço máximo deve ser maior que o mínimo")
            
        }else{
            break 
        }
    }while(true)
    
    
    outResultado.innerHTML = `<p>Carros com <strong>preço mínimo</strong>: ${min} </p><p>e <strong>preço máximo</strong>: ${max}</p><p>-------------------------------</p>`
    const carrosFiltrados = carros.filter(aux => aux.preco >= min && aux.preco <= max)
    for (const carro of carrosFiltrados){
        
        const mod = carro.modelo
        const prec = carro.preco

        outResultado.innerText += `\n ${mod} - R$${prec}`
    }
})

frm.btPromocao.addEventListener("click", ()=>{
    let pctPromocao 
    do{
        pctPromocao =Number( prompt("Porcentagem de desconto do carro: "))
        
        if(pctPromocao < 0 || pctPromocao >100 ){
            alert("A porcentagem precisa ser maior que 0 e menor que 100")
        }else if(isNaN(pctPromocao) ){
            alert("Os números precisam ser válidos")
            
        }else{
            break 
        }
    }while(true)
    outResultado.innerHTML = `<p>Simulação do preço dos carros com ${pctPromocao}% de desconto</p><p>-------------------------------</p>`
    const carrosDesconto = carros.map(aux => ({modelo: aux.modelo, preco: aux.preco-(pctPromocao*(aux.preco/100))}))
    for (const carro of carrosDesconto){
        
        const mod = carro.modelo
        const prec = carro.preco

        outResultado.innerText += `\n ${mod} - R$${prec}`
    }
})

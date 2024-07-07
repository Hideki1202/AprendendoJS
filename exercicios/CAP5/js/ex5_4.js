alert("Digite 0 para sair")
do{
    const num =Number( prompt("Digite um número: "))
    if(num == 0 || isNaN(num)){
        const sair = confirm("Confirma a saída?")
        if(sair){
            break
        }else{
            continue
        }

    }
    if (num%2==0){
        alert(`O dobro de ${num} é ${2*num}`)
    }else{
        alert(`O triplo de ${num} é ${num * 3}`)
    }
    
}while(true)


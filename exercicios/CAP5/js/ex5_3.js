let num 
let resposta = "Pares: "
do{
    num = prompt("Digite um número")
    if(num == 0 || isNaN(num)){
        alert("Digite um número válido")

    }
}while(num ==0|| isNaN(num))

for(let i = 0; i<num; i++){

    if(i % 2 == 0){
        resposta += i+" "
        
    }
}

alert(resposta)
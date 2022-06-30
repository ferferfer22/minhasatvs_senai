let lista = []
let opcao = 's'

while (opcao == 's') 
{
    let nome = prompt("Digite o nome do participante.")
    let idade = prompt("Digite a idade do participante.")
    if(idade > 18){
        if(lista.length < 100){
            console.log("Cadastro permitido.")
            lista.push(nome)
        }
        else{
            console.log("Cadastro negado. Lista cheia.")
        }
    }
    else{
        console.log("Cadastro negado. Participante menor de idade")
    }
    opcao = prompt("Deseja cadastrar outro participante? s/n")
}

let i = 0
while (i < lista.length){
console.log(lista[i])
i++
}
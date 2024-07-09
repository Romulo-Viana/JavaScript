var input = window.prompt('Digite um número: ')

var input = input.replace(`,`,`.`)

var n1 = Number(input)

if (n1 == isNaN){
    document.write(`Por favor, digite um número válido </br>`)
} else {
    document.write(`O número digitado foi ${n1.toFixed(2)} </br></br>`)
    document.write(`Tipo: ${typeof(n1)}`)
}




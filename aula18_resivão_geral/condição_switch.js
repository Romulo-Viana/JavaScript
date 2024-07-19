var agora = new Date()
var diaSem = agora.getDay()

//Troca o resultado dependendo do dia da semana

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('SEGUNDA')
        break
    case 2:
        console.log('TERÇA')
        break
    case 3:
        console.log('QUARTA')
        break
    case 4:
        console.log('QUINTA')
        break
    case 5:
        console.log('SEXTA')
        break
    case 6:
        console.log('SÁBADO')
}


if (diaSem === 0){
    console.log('DOMINGO')
} else if (diaSem === 1) {
    console.log('SEGUNDA')
} else if (diaSem === 2) {
    console.log('TERÇA')
} else if (diaSem === 3) {
    console.log('QUARTA')
} else if (diaSem === 4) {
    console.log('QUINTA')
} else if (diaSem === 5) {
    console.log('SEXTA') 
} else if (diaSem === 6) {
    console.log('SÁBADO')
}
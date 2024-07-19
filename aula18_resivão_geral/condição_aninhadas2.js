//Exemplo 1
var hora = 9

if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18){
    console.log('Boa tarde!')
} else if (hora >= 18 && hora < 24){
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada')
}

//_______________________________________________________
//Exemplo 2
var hora = 5

if (hora > 5 && hora < 12){
    console.log('Bom dia!')
} else if (hora > 11 && hora < 18) {
    console.log('Boa tarde')
} else if (hora > 17 && hora < 24) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}

//________________________________________________________
//Exemplo 3

var hora = 17
var msg = ''


if (hora > 5 && hora < 12){
    msg = 'Bom dia!'
} else if (hora > 11 && hora < 18) {
    msg = 'Boa tarde!'
} else if (hora > 17 && hora < 24) {
    msg = 'Boa noite!'
} else {
    msg = 'Boa madrugada!'
}

console.log(`Agora são exatamente ${hora} horas. ${msg}`)
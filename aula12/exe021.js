var agora = new Date() //comando para busca hora, data, segundos e etc.
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)

//Condições aninhadas
if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite')
}
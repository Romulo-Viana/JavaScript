var idade = 68


//aninhamento abreviado
if (idade < 16){
    console.log('Você não vota.')
} else if (idade < 18 || idade > 65){
    console.log('Seu voto é opcional.')
} else {
    console.log('Seu voto é obrigatório')
}

/*
//aninhamento tradicional
if (idade < 16) {
    console.log('Você não vota')
} else 
    if (idade < 18 || idade > 65) {
        console.log('Seu voto opcional')
    } else {
        console.log('Seu voto é obrigatório')
    }
*/
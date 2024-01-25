function contar(){
    var nInício = document.getElementById('nInício')
    var nFim = document.getElementById('nFim')
    var nPasso = document.getElementById('nPasso')
    var res = document.getElementById('res')
    var resultadoTexto = ''

    var n1 = Number(nInício.value)
    var n2 = Number(nFim.value)
    var n3 = Number(nPasso.value)


    if (n1 === 0 || n2 === 0){ //Alerta de erro para espaço em branco ou digite zero
        res.style.color = 'red'
        res.innerHTML = "[ERRO] Você precisa digitar um valor acima de ZERO[0]."
    } else {
        if (n3 === 0){ //Estou usando essa condição para válidar o zero como 1 passo.
            n3 += 1
        }
        while (n1 <= n2){
            res.style.color = 'black' //Estilizo para fonte black, caso o usuário acione o erro em vermelho.
            resultadoTexto += `<br> 👉🏻 ${n1}`
            res.innerHTML = `Contando: ${resultadoTexto}`
            n1 += n3
    }
    }
        
}
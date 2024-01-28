function contar(){
    let nInício = document.getElementById('nInício')
    let nFim = document.getElementById('nFim')
    let nPasso = document.getElementById('nPasso')
    let res = document.getElementById('res')
    let resultadoTexto = ''

    let n1 = Number(nInício.value)
    let n2 = Number(nFim.value)
    //Aqui testamos se a variável n3 vai receber um valor em branco ou zero, caso seja vdd, add 1, caso falso add o valor digitado.
    var n3 = nPasso.value === '' || nPasso.value == 0 ? 1 : Number(nPasso.value)    

    if (nInício.value === '' || nFim.value === ''){ //Alerta de erro para espaços em branco
        res.style.color = 'red'
        res.innerHTML = "[ERRO] Você precisa digitar um valor acima de ZERO[0]."
    }  else{
         if (n1 <= n2){
            while(n1 <= n2){
                res.style.color = 'black' //Estilizo para fonte black, caso o usuário acione o erro em vermelho.
                resultadoTexto += `<br> 👉🏻 ${n1}`
                n1 += n3
            }
        } else {
            while(n1 >= n2){
                res.style.color = 'black' //Estilizo para fonte black, caso o usuário acione o erro em vermelho.
                resultadoTexto += `<br> 👉🏻 ${n1}`
                n1 -= n3
            }
        } res.innerHTML = `Contando: ${resultadoTexto}`
    }   
}
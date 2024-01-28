function gerar(){
    var valor = document.getElementById('valor')
    var tabuada =  document.getElementById('tabuada')
    var alerta = document.getElementById('alerta')
    //Se o length(comprimento) do value(valor) de valor(variável) for igual a 0 faça...
    if (valor.value.length == 0){
        alerta.style.color = 'red'
        alerta.innerHTML = 'Digite um valor numérico válido:'
    } else {
        //Lembra que as variáveis de escopo local podem e devem ficar dentro da condição que fazem sentido para elas.
        var n = Number(valor.value)
        var c = 1
        //Antes de mostra o resultado da tabuada, limpe.
        tabuada.innerHTML = ''
        for(c; c <= 10; c+=1){
            //Aqui criamos um elemento dinâmicamente, o elemento option geralmente está atrelado tab selection.
            var option = document.createElement('option')
            //A parte de dentro do option, que é o texto, vai receber o calculo
            option.text = `${n} X ${c} = ${n*c}`
            //Tabuada, adicionar um elemento filho, que sera o option
            tabuada.appendChild(option)
        }
    } tabuada.style.color = 'blue'
}
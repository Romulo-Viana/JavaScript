function verificar(){
    //Ano coleta no sistema, atual.
    var data = new Date()
    var anoatual = data.getFullYear()

    //Ano coletado no formulário.
    var anof = document.getElementById('txtano')
    var anoformulário = Number(anof.value)
    var res = document.getElementById('res')

    //Se anoformulário identico/estrito a zero ou anoformulário mair que anoatual exiba um alerta de ERRO.
    if (anoformulário === 0 || anoformulário > anoatual){
        res.style.textAlign = 'center'
        res.style.color = 'red'
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente.'
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - anoformulário
        var gênero = ''
        //Aqui estou criando um elemento 'img' direto pelo JS, sem digitar nada no html
        var img = document.createElement('img')
        //Aqui estou configurando o elemento com um 'id' chamado 'foto'.
        img.setAttribute('id', 'foto')
        //Se formulário sexo na posição 1 for selecionado, gênero recebe 'Homem'.
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 1 && idade <= 10){
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade <= 21){
                img.setAttribute('src', 'imagens/jovem_homem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto_homem.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        //Se não se, formulário sexo na posição 2 for selecionado, gênero recebe 'Mulher'
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=1 && idade <= 10){
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade <= 21){
                img.setAttribute('src', 'imagens/jovem_mulher.png')
            } else if (idade <= 50){
                img.setAttribute('src', 'imagens/adulto_mulher.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        //Estilizando direto pelo JS
        res.style.color = 'black'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${gênero} com ${idade} anos`
        //Estou adicionando o elemento 'img' abaixo do texto logo acima.
        res.appendChild(img)    
    } 
    
}

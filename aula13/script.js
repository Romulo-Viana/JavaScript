
function carregar(){
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    //hora = data.getHours()
    hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'amanhecer.png'
        document.body.style.background = '#F2EBD5'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'entardecer.png'
        document.body.style.background = '#C6582F'
    } else {
        //BOA NOITE
        img.src = 'anoitecer.png'
        document.body.style.background = '#262626'
    }
}

function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var meufooter = document.getElementById('meufooter')
    var data = new Date()
    var hora = data.getHours()

    var saoHoras = (hora === 1)? 'hora' : 'horas';
    
    msg.innerHTML = `Agora são ${hora} ${saoHoras}`
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = './imagens/amanhecer_p.png'
        document.body.style.background = '#F2EBD5'
        meufooter.style.color = 'black'
        msg.innerHTML += `. BOM DIA!`
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = './imagens/entardecer_p.png'
        document.body.style.background = '#C6582F'
        meufooter.style.color = 'white'
        msg.innerHTML += `. BOA TARDE!`
    } else {
        //BOA NOITE
        img.src = './imagens/anoitecer_p.png'
        document.body.style.background = '#242222'
        meufooter.style.color = 'white'
        msg.innerHTML += `. BOA NOITE!`
    }
}
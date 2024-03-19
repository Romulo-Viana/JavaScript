var participantes = []

function adicionar(){
    let addàlista = document.getElementById('txt1')
    let tabela = document.getElementById('tabela')
    
    let participante = addàlista.value.toUpperCase()

    if(participante == ''){
        window.alert('Digite um valor válido')
    } else if(participantes.includes(addàlista.value)) {
        window.alert('Participante já foi adicionado')
    } else {
        participantes.push(participante)
        let option = document.createElement('option')
        option.text = participante
        tabela.appendChild(option)

        // Adicionando evento de clique para remover o participante
        option.addEventListener('click', function() {
            //adiciona à variável 'index' o íncide do participante clicado
            let index = participantes.indexOf(participante);
            //Remove o elemento dentro do array uma única vez
            participantes.splice(index, 1);
            //Remove o elemeto filho dentro do elemento pai na página de exibição
            tabela.removeChild(option);
        });
    }
    addàlista.value = '' // Limpar o valor do input
    addàlista.focus() // Dar foco ao input

}  

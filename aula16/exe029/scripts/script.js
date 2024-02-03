var lista = []

function adicionar(){
    let valor1à100 = document.getElementById('valor')
    let tabela = document.getElementById('tabela')
    let números = Number(valor1à100.value)

    
    if (números == 0 || números > 100){
        window.alert('Digite um valor válido!')
    } else {
        lista.push(números)
        let option = document.createElement('option')
        option.text = `Valor ${números} adicionado.`
        res.innerHTML = ''
        tabela.appendChild(option)
    } 
    valor1à100.value = '' // Limpar o valor do input
    valor1à100.focus() // Dar foco ao input
    
}

function Finalizar(){
    let res = document.getElementById('res')
    
    if (lista.length == 0){
        res.innerHTML = 'Não há valores para calcular.'
    } else {
        let soma = lista[0]
        let maiorvalor = lista[0]
        let menorvalor = lista[0]

        for (let c = 1; c < lista.length; c++){
            soma += lista[c]

            if(lista[c] > maiorvalor){
                maiorvalor = lista[c]
            } 
            
            if (lista[c] < menorvalor){
                menorvalor = lista[c]
            }
            
        } 

        res.style.color = 'blue'

        res.innerHTML = `Ao todo, temos ${lista.length} cadastros <br/>
          O maior valor informado foi ${maiorvalor} <br/>
          O menor valor informado foi ${menorvalor} <br/>
          Somando todos os valores, temos ${soma} <br/>
          A média dos valores digitados é ${soma/lista.length}`
        
    }
}
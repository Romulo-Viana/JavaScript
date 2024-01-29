/*var num = [5,8,2,9,3]
//Add um valor automaticamente
num.push(6)
//Ordenar de forma crescente
num.sort()
//Atribuir à pos o indexOf do valor 8
let pos = num.indexOf(8)
//Se pos for -1, ou seja, não existir
if (pos == -1){
    console.log(`O valor ${pos} não existe.`)
} else {
    console.log(`O valor é ${pos}`)
}*/


let n = [1,5,7,9,0,10]
n.sort(function(a, b){
    return a - b
})
for(pos in n){
    console.log(n[pos])
}
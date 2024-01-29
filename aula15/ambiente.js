//Vetor composto
var num = [5,8,2,9,3]
console.log(num.indexOf(9))
console.log(num.indexOf(10))



//Add valor de forma manual
num[5] = 7
//add valores automaticamente
num.push(1)
//ordena de forma crescente
num.sort()
console.log(num)
//length, para saber o comprimento 
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//Leitura de vetor usar o FOR
for(var pos = 0;pos < num.length; pos +=1){
    console.log(num[pos])
}

//Leitura de vetor usando o WHILE
let pos = 0
while (pos < num.length){   
    console.log(num[pos])
    pos+=1
}

//Leitura de vetor usando o DO WHILE
do{
    console.log(num[pos])
    pos+=1
} while(pos<num.length)

//Leitura de vetor com método for simplificado
for(pos in num){
    console.log(num[pos])
}
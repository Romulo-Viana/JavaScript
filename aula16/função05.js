//RECURSIVIDADE
function fatorial(n){
    if(n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

//Sabemos que fatorial de 5! é = 5 x 4 x 3 x 2 x 1
//Também pode ser 5 x 4!
//De forma recursiva, fotorial de 5! = 5 * (5-1)!
//Lebrando de 1! de = 1
const x = 1
let n = 9

const Factorial = (n) => {
    let temp = 1
    for( let i = 1; i <= n; i++ ) {
        temp= temp* i
    } 
    return temp
}


const Calcul = (x, n) =>{

    if(n <= 0) {
        return 1
    }

    return (Math.pow(x, n)) / (Factorial(n)) + Calcul( x , n - 1 )
} 

console.log(Calcul(1, 9))




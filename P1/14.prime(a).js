// O(n^2)

let n = 10

function prime (n) {
    let numero = 2
    let primo = 1

    while (n > 0) {
        primo = 1
        for ( let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = 0
                break 
            }
        }

        if (primo) {
            console.log(numero)
            n--
        }

        numero++
    }
}

prime(n)
// O(f(n))

let n = 10

function fib (n) {
    let a = 0
    let b = 1
    let c = 1

    for(let i = 1; i <= n; i++) {
        console.log(c)
        c = a + b
        
        a = b
        b = c
    }
}

fib(n)
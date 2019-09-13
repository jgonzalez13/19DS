const fact = (n) => {
    let r = 1

    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 

    return r
}

const P = (n, r) => {
    return (fact(n)) / fact((n - r))
}

const Combinatoria = (n, r) => {
    return P(n, r) / fact(r)
}

console.log(Combinatoria(8, 2))

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

console.log(P(8, 2))
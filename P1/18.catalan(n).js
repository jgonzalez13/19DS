const fact = (n) => {
    let r = 1

    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 

    return r
}

const catalan = (n) => { 
    return fact(2 * n) / (fact(n+1) * fact(n))
}

const n = 9


for(let i = 0; i < n; i++) {
    console.log(catalan(i))
}

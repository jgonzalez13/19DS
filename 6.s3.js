const n = 10
let temp = 0
let form

for (let i = 1; i <= n; i++) {
    temp+= i * i
}

form = (n * ( n + 1 ) * ( 2 * n + 1 )) / 6

console.log('Sumatoria: ', temp)
console.log('Formula: ', form)
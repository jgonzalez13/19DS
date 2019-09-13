const n = 10
const k = 2
let temp = 0
let form


for (let i = 0; i <= n; i++) {
    temp += Math.pow(k, i);
}


form = (Math.pow(k, n + 1) - 1) / (k - 1)

console.log('Sumatoria: ', temp)
console.log('Formula: ', form)
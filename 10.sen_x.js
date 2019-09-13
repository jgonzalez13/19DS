const fact = (n) => {
    let r = 1

    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 

    return r
}

const switchSign = i => {
  if (i % 2 === 0) return -1;
  else return 1;
};

const senX = (x) => {
  let sum = 0;
  let top = 15
  for (let i = 1, c = 1; c <= top; i += 2, c++) {
    sum += switchSign(c) * (Math.pow(x, i) / fact(i));
  }
  return sum;
};

console.log(senX(8));

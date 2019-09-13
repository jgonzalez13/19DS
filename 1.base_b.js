const changeLog = ( x, y ) => Math.log( x ) / Math.log( y )

let logBase = 13

console.log('Logaritmo Base Global')

for ( let i = 1;  i <= 10; i++ ) 
    console.log(`log7( ${i} ) = ${changeLog(i, logBase)}`)


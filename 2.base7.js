console.log('Logaritmo Base 7')

const changeLog = ( x ) => Math.log( x ) / Math.log( 7 )

for ( let i = 1;  i <= 10; i++ ) 
    console.log(`log7( ${i} ) = ${changeLog(i)}`)


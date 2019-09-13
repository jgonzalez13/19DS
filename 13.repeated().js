const n = [1,9,2,1,5,6,2,9]
//const n = [ 1, 2, 5, 6 ]

const repeated = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {            
            if (array[i]===array[j]){
                
               return true
            } 
        } 
    }  
     return false
}

console.log(repeated(n))

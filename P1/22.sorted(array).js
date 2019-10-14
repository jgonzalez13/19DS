const n = [1,9,2,1,5,6,2,9]
let m = []

const sort = (array) => {
    var length = array.length;
    
    for(var i = 1; i < length; i++) {
      var temp = array[i];
        for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }
    
    return array;
}

const verficar = (array) => {
    let temp = array[0]
    
    for (let i = 0; i < array.length; i++) {
        if ( temp <= array[i] ) {
            
            temp = array[i]

            console.log(true)
        } else {
            console.log(false)
        }
    }
}

console.log("Ordenamiento")
console.log(sort(n))

m = sort(n)

console.log("Verificacion")
console.log(verficar(m))



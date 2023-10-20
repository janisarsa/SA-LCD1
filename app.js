// Escribe tu código aquí.
function bigWords(string,array) {
    const arreglo=[]

    for (let index = 0; index < array.length; index++) {
        if (array[index].length > string.length) {
            arreglo.push(array[index])
            
        } 
        
    } 
    const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
    bigWords('bocina', myArray)
    
}
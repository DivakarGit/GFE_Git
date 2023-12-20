/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
function dropRightWhile(array, predicate) {
    let tempArray = [...array];
    let outputArray= tempArray.filter(predicate);
    for(let i=0;i<outputArray.length;i++){
        if(outputArray[0])
            tempArray.pop();
    }
    return tempArray
}

clickHandler =() =>{
    console.log(dropRightWhile([1, , 3, 4, 5], (value) => value === undefined))
}
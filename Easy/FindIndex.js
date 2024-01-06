/**
 * This function returns the index of the first element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1, indicating that no element passed the test.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */
function findIndex(array, predicate, fromIndex = 0) {
    if(array.length>0){
        if(fromIndex>array.length) return -1
        let index=fromIndex;
        if(fromIndex<0){
            index = array.length+fromIndex;
        }
        for(let k=index;k<array.length;k++){
            if(predicate(array[k],k,array)){    // filter ( value, index, array)
                return k;
            }
        }
    }
    return -1
}

clickHandler =() =>{
    const arr = [1, 2, 3, 4, 5];
    // Search for the first value in the array that is greater than 3.
    console.log(findIndex(arr, (num) => num > 3)); // => 3
    // Start from 0 if fromIndex < -(array.length)
    console.log(findIndex(arr, (num) => num > 2, -10)); // => 2
}   
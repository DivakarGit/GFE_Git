/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(array) {
    let output=""
    for(let i =0;i<array.length;i++){
        output = output+" "+ array[i]
    }
    return [output]
}

clickHandler = () =>{
    console.log(flatten([1, 2, 3])); // [1, 2, 3]

    console.log( flatten([
        [1, 2],
        [3, 4],
      ])); // [1, 2, 3, 4]
}
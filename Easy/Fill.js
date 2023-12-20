/**
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */
function fill(array, value, start = 0, end = array.length) {
    if(end<0)
        end = end+array.length
    if(start<0)
        start= start+array.length

    for(let i=0;i<array.length;i++){
        if(start<=i && i<end)
            array[i] =value;
    }
    return array
}

clickHandler =() =>{
    let input1= [4, 6, 8, 10];
    let input2= [4, 6, 8, 10,12];

    //console.log(`Input Array : ${input1}:  Output is ${fill([4, 6, 8, 10], '*', -3, -1)}`)
    console.log(`Input Array : ${input2}:  Output is ${fill(input2, '*', -3, -1)}`) // [4, 6, '*', '*', 12]

}
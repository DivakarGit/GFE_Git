/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
function compact(array) {
    //Solution:1
    return array.filter((item) => item)
    // Solution:2
    // let outputArray=[]
    // for(let i=0;i<array.length;i++){
    //     if(array[i]){
    //         outputArray.push(array[i])
    //     }
    // }
    // return outputArray
}

clickHandler =() =>{
    let input =[0, 1, false, 2, '', 3, null, true];
    //let input = [null, undefined, NaN, 0, false, '', '']

    console.log(`Output Array is: ${compact(input)}`)
}
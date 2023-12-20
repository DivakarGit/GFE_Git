/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
function chunk(array, size = 1) {
    if(array.length===0) return array;
    if(size>array.length) return [array];
    let outputArray=[];
    for(let i=0;i<array.length;i=i+size){
        outputArray.push(array.slice(i,i+size));
    }
    return outputArray;
}

clickHandler =() =>{
    let input =[1,2,3,4];
    let size =2;
    console.log(`Chunks of arrays ${chunk(input,size)}`)
}
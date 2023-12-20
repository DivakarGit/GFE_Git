/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs - An array of key-value pairs.
 * @returns {Object} - The object composed from the key-value pairs.
 */
function fromPairs(pairs) {

    let obj ={}
    //Solution:1
    // for(let i=0;i<pairs.length;i++){
    //     obj[pairs[i][0]]=pairs[i][1]
    // }

    // Solution:2
    for(const [key ,value] of pairs){
        obj[key]= value;
    }


    return obj;
}

clickHandler =() =>{
    const pairs = [
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ];
      
    console.log(fromPairs(pairs));
}
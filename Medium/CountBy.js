/**
 * @param {Array} array The array to iterate over.
 * @param {Function|string} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
function countBy(array, iteratee) {
    let outputArray = [];
    if(typeof iteratee =='function'){
        outputArray = array.map((x)=>iteratee(x))
    }else {
        outputArray = array.map((x)=>x[iteratee])
    }
    console.log(outputArray)
    return createObject(outputArray)
}

const createObject =(arr) =>{
    let obj ={};
    for(let i =0;i<arr.length;i++){
        if(!(obj[arr[i]])){
            obj[arr[i]] =1;
        }else{
            obj[arr[i]] =obj[arr[i]]+1;
        }
    }
    return obj
}
// function countBy(array, iteratee) {
//     const result = Object.create(null);
  
//     for (const element of array) {
//       const key =
//         typeof iteratee === 'function' ? iteratee(element) : element[iteratee];
//       result[key] ??= 0;
//       result[key]++;
//     }
  
//     return result;
//   }
clickHandler =() =>{
    console.log(countBy([6.1, 4.2, 6.3], Math.floor));
    console.log(countBy(['one','two','three'], 'length'));
    console.log(countBy(['one', 'two', 'three'], (val) => 'length'));
}
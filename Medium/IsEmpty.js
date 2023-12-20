/**
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
function isEmpty(value) {

    
    if ((value === null)  || typeof value ==='number' || typeof value==='boolean' || typeof value ==='symbol'){ return true}
    else if (typeof value === 'object'){
        let len = Object.keys(value).length;
        if(len===0)
          return  value.size >0  ? false:true
        else 
        return  len>0 ? false : true;
    }
    else if(value.length === 0) {return true }
    return false;

}

clickHandler = () =>{
    console.log(isEmpty(null)); // => true
    console.log(isEmpty(true)); // => true
    console.log(isEmpty(1)); // => true
    console.log(isEmpty([1, 2, 3])); // => false
    console.log(isEmpty({ a: 1 })); // => false
    console.log(isEmpty({ })); // => true
}
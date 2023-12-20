/**
 * @template T
 * @param {...(T | Array<T>)} items
 * @return {Array<T>}
 */
Array.prototype.myConcat = function (...items) {

    let outputArray =[...this];
    for(let i =0;i<items.length;i++){
        if(Array.isArray(items[i])){
            outputArray.push(...items[i])
        }else{
            outputArray.push(items[i])
        }
    }
    return outputArray;
};

clickHandler =() =>{
    console.log([1, 2, 3].myConcat([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
    console.log([1, 2, 3].myConcat(4, 5, 6)); // [1, 2, 3, 4, 5, 6]
    console.log([1, 2, 3].myConcat(4, [5, 6])); // [1, 2, 3, 4, 5, 6]

}
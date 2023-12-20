/**
 * @param {...any} args
 * @return {number}
 */
function numberOfArguments(...items) {
    //return items.length;
    return arguments.length;
}

clickHandler =() =>{
    console.log(numberOfArguments());
    console.log(numberOfArguments(1));
    console.log(numberOfArguments(2,3,));
    console.log(numberOfArguments('a','b','c'));
}
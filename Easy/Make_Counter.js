/**
 * @param {number} initialValue
 * @return {Function}
 */
function makeCounter(initialValue=0) {
    // return function(){
    //     return ++initialValue;
    // }
    return (()=>initialValue++)
}

clickHandler =() =>{
    const counter = makeCounter(5);
    console.log(counter());
    console.log(counter());
    console.log(counter());

}

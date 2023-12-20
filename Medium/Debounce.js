/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
function debounce(func, wait) {

    return function(){
        clearTimeout();
        setTimeout(()=>{
            ++counter
            console.log(`I called ${counter} times`);
            func.apply(this);
        },wait);
    }
}
let i=0;
let counter =0;
function increment(){
    return ++i;
}

clickHandler =() =>{
    const debouncedIncrement = debounce(increment, 2000);
    console.log(`Debounced at ${debouncedIncrement()} time ${i}`)
}

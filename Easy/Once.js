/**
 * @template {Function} T
 * @param {T} func
 * @return {T}
 */
function once(fn) {
    let run= false;
    let output;
    return function (...args){
        if(!run){
            run = true;
            output = fn.apply(this, args);
        }
        return output;
    }
}

function increment(val){
    return val*2;
}
function printOnce(val){
    return `Printed once ${val} `
}
clickHandler =() =>{
    let caller1 =once(increment);
    let caller2 =once(printOnce);
    console.log(caller1(20));
    console.log(caller1(50));
    console.log(caller2(1));
    console.log(caller2(2));
}
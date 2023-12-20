/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
function throttle(func, wait) {
    
    let ran = false;
    let output;
    setTimeout(()=> ran=false,wait)
    return function (...args){
        if(!ran){
            ran = true;
            output = func.apply(this,args)
        }
        return output
    }

}

let i=10;
function increment(val){
    i++;
    return val*i
}

clickHandler= () =>{
    // Similar to Once.js
    
    let caller = throttle(increment,5000);
    console.log(caller(5));
    console.log(caller(5));
    setTimeout(()=> console.log(caller(5)),4000)
    setTimeout(()=> console.log(caller(5)),6000)
}
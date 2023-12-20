/**
 * @param {Function} func
 * @return {Function}
 */
function nocurry(a,b,c){
    return a+b+c;
}

function yescurry(a) {
    return function item1(b){
        return function item2(c){
            return a+b+c
        }
    }
}

function curry(func){
    return function curried(...args) {
        if (args.length >= func.length) {
          return func.apply(this, args);
        }
    
        return curried.bind(this, ...args);
      };
}

clickHandler =() =>{
    console.log("No Curry: ",nocurry(3,4,5));
    console.log("Curry: ",yescurry(3)(4)(5));
    console.log("Generic Curry Function: ",curry(2)(4)(5))

}
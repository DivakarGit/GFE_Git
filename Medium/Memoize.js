/**
 * @param {Function} func
 * @returns Function
 */
function memoize(func) {

    const cache = new Map();
    return function(...args){
            let data;
            if(cache.has(...args)){
                return cache.get(...args);
            }else{
                data = func.call(this,...args)
                cache.set(...args,data);
                return data;
            }
    }
}

function expensiveFunction(n) {
    console.log('Computing...');
    return n * 2;
  }

clickHandler =() =>{
    // Create a memoized version of the function.
    const memoizedExpensiveFunction = memoize(expensiveFunction);
        
    // First call (computes and caches the result).
    console.log(memoizedExpensiveFunction(5)); // Output: Computing... 10

    // Second call with the same argument (returns the cached result).
    console.log(memoizedExpensiveFunction(5)); // Output: 10

    // Third call with a different argument (computes and caches the new result).
    console.log(memoizedExpensiveFunction(10)); // Output: Computing... 20

// Fourth call with the same argument as the third call (returns the cached result).
    console.log(memoizedExpensiveFunction(10)); // Output: 20
}
/**
 * create Key value pair with Arguments and ouput
 */
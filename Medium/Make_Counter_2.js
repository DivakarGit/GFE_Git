
/**
 * @param {number} initialValue
 * @return {{get: Function, increment: Function, decrement: Function, reset: Function }}
 */
/**Solution 1 */
function makeCounter(initialValue=0) {
    let val = initialValue;
    return {
        get: () =>{
            return val;
        },
        increment : () =>{
            val= val +1;
            return val;
        },
        reset :() =>{
             val =initialValue;
             return val
        },
        decrement :() =>{
            val= val-1;
            return val
        }
    }
    
}

/**Solution 2 */

// class Counter{
//     constructor(initialValue){
//         this.val = initialValue;
//         this.initialValue = initialValue;
//     }
//     get= () =>{
//         return this.val;
//     };
//     increment = () =>{
//         return ++this.val;
//     };
//     reset =() =>{
//          this.val =this.initialValue;
//          return this.val
//     };
//     decrement =() =>{
//         return --this.val
//     }
// }

// function makeCounter(initialValue=0){
//     return new Counter(initialValue)
// }

clickHandler =() =>{
    const counter = makeCounter();
    console.log(counter.get()); // 0
    console.log(counter.increment()); // 1
    console.log(counter.increment()); // 2
    console.log(counter.get()); // 2
    console.log(counter.reset()); // 0
    console.log(counter.decrement()); // -1

    const counter2 = makeCounter(5);
    console.log(counter2.get()); // 0
    console.log(counter2.increment()); // 1
    console.log(counter2.increment()); // 2
    console.log(counter2.get()); // 2
    console.log(counter2.reset()); // 0
    console.log(counter2.decrement()); // -1

    //document.getElementById('demo').innerHTML=makeCounter();
}
/**
 * @param {*} value
 * @returns Promise
 */
async function promiseResolve(value) {
    if(typeof value!== "object")
        return value
    if(Object.prototype.toString.call(value)==='[object Promise]'){
        return value.then((data)=>{
            return data
        })
    }

}

clickHandler =()=>{
    async function execute(){
        const p = promiseResolve(42);
         console.log(await p); // 42
        const original = new Promise((resolve) => resolve(42));
        const cast = promiseResolve(original);
        console.log(await cast); // 42

        const resolvedThenable = promiseResolve({
            then(resolve, reject) {
              resolve(42);
            },
            
        });
          await resolvedThenable; // 42
    }
    execute();
}
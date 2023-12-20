/**
 * @callback func
 * @returns Function
 */
function promisify(func) {
    return function(...args){
        return new Promise((resolve, reject)=>{
            func.call(this,...args,(result,err)=>{
                if(!err)
                    resolve(result)
                else 
                    reject(err)
            })
        })
    } 
}
// Example function with callback as last argument
// The callback has the signature `(err, value) => any`
function foo(url, options, callback) {
    apiCall(url, options)
      .then((data) => callback(null, data))
      .catch((err) => callback(err));
}

clickHandler =() =>{
    async function execute(){
        const promisifiedFoo = promisify(foo);
        const data = await promisifiedFoo('example.com', { foo: 1 });
    }
    execute()
}
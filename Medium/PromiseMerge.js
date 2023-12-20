/**
 * @param {Promise} p1
 * @param {Promise} p2
 * @return {Promise<any>}
 */
function promiseMerge(p1, p2) {
    return Promise.all([p1,p2]).then(([x,y])=>{

        try{
            if(typeof x ==="number" && typeof y ==="number" || typeof x ==="string" &&  typeof y ==="string"  ){
                return(x+y)
            }else if( Array.isArray(x) === true && Array.isArray(y) === true){
                return(x.concat(y))
            }else if(typeof x ==="object" && typeof y === "object" ){
                if(x instanceof Map || y instanceof Map || x instanceof Set || y instanceof Set){
                    throw('Unsupported data types')
                }  return {...x,...y}
            }else{
                throw('Unsupported data types')
            }  
        }
        catch{
            throw('Unsupported data types')
        }
           
    })
}

clickHandler =()=>{

    async function execute(){
        await promiseMerge(Promise.resolve(1), Promise.resolve(2)); // 3
        await promiseMerge(Promise.resolve('abc'), Promise.resolve('def')); // 'abcdef'
        await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
        await promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve({ bar: 2 })); // { foo: 1, bar: 2}

        await promiseMerge(Promise.resolve(1), Promise.resolve([])); // Rejected with 'Unsupported data types'
        await promiseMerge(Promise.reject(1), Promise.resolve(2)); // Rejected with 1
    }
    execute();
}
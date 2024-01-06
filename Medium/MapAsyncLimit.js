/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 * @param {number} size
 *
 * @return {Promise}
 */

function mapAsyncLimit(iterable, callbackFn, size) {
    
    return new Promise((resolve)=>{
        let len = iterable.length;
        let count =0;
        let outputArray=[];
        if(!checkCompleted()){
            for(let i=0;i<len;i=i+size){
                outputArray[i]= callbackFn(iterable[i])
            }
        }else{
            resolve(outputArray)
        }
        function checkCompleted(){
            if(count=== len){
                return true
            }else{
                count = count+size;
                return false;
            }
        }
        
    })
    //return Promise.all(iterable.map(callbackFn))
}

clickHandler =() =>{
    async function fetchUpperCase(q) {
        // Fake API service that converts a string to uppercase.
        const res = await q.toUpperCase();
        return await res;
    }
    
    async function execute(){
        // Only a maximum of 2 pending requests at any one time.
        const results = await mapAsyncLimit(
            ['foo', 'bar', 'qux', 'quz'],
            fetchUpperCase,
            2,
        );
        console.log(results); // ['FOO', 'BAR', 'QUX', 'QUZ'];
    }
    execute();
    
}
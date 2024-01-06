/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
        let len = iterable.length;
        let counter =0;
        let outputArray=[];
        if(len ===0){
            resolve(outputArray)
        }
        for(let i=0;i<len;i++){
            // if(typeof(iterable[i])!=='object')   { outputArray[i]=iterable[i]; checkPro() }
            // else{
            //     iterable[i].then((data)=>{
            //         outputArray[i]= data; 
            //         checkPro();
            //     });
            // }

            Promise.resolve(iterable[i]).then((data)=>{
                outputArray[i]= data; 
                checkPro();
            },(reason) => {
                reject(reason);
            });
        }
        function checkPro(){
            counter = counter+1;
            if(counter===len)
                resolve(outputArray)
        }
        
    })

    // return Promise.all(iterable)
}

clickHandler = () =>{
    // Resolved example.
    const p0 = Promise.resolve(3);
    const p1 = 42;
    const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 100);
    });
    async function execute(){
        const result= await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
        console.log(result)
    }
    execute();
}
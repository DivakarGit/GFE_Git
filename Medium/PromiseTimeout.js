

function promiseTimeout(promise, duration){
    
    return new Promise((resolve, reject)=>{
        const timeout= setTimeout(() => {
            //console.log('Promise timeout');
            reject('Promise timeout')
        }, duration);
        promise.then((data)=>{
            //console.log("Promise Successful") 
            resolve(data)
        })
        .catch((err)=>{
            //console.log("Error")
            reject(err)
        }).finally(() =>{
            clearTimeout(timeout)

        })
    })
}

function fakeFetch(latency){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully")
        },latency)
    })
}

clickHandler = () =>{

    async function execute(){
        const response = await promiseTimeout(fakeFetch(1000),2000);
        console.log(response); // Data successfully fetched!
    }
    execute();

}

/**
 * @param {number} duration
 * @return {Promise<void>}
 */
async function sleep(duration) {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Promise resolved")
        },duration)
    })
    // console.log("inner loop with Duration",duration)
}
clickHandler =() =>{
    console.log("Started");
    sleep(3000).then(()=>{
        console.log("ended")
    })
    console.log("I wont wait")
}
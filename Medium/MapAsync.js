/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 *
 * @return {Promise}
 */
function mapAsync(iterable, callbackFn) {
    return Promise.all(iterable.map(callbackFn))
}

clickHandler =() =>{
    const asyncDouble = (x) =>
        new Promise((resolve) => {
            setTimeout(() => {
            resolve(x * 2);
            }, 5000);
    });

    async function execute(){
        const doubled = await mapAsync([1, 2], asyncDouble);
        console.log(doubled); // [2, 4]
    }
    execute();

}
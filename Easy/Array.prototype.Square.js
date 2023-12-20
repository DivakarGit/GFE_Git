
/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
    let outputArray =[];
    outputArray = this.map((digit)=> digit*digit);
    return outputArray;
};

clickHandler =() =>{
    // let inputArray =[1,2,3,4];
    let inputArray =[-2];
    const squareArray = inputArray.square();
    console.log(`For input ${inputArray}, Square of Array are ${squareArray} values`);
}
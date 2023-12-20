/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function insertionSort(arr) {
    for(let i=1;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j-1]>arr[j]){
                //Swap numbers here
                [arr[j-1],arr[j]]= [arr[j],arr[j-1]]
            }
        }
    }
    return arr
}

clickHandler =() =>{
    let input = [9, 3, 6, 2, 1, 11];
    console.log(`Insertion sort of ${input} is ${insertionSort(input)}`)
}
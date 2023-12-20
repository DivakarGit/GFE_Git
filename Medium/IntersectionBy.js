/**
 * @param {Function} iteratee - The iteratee function to apply to each value.
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
function intersectionBy(iteratee, ...arrays) {
    let outputArray=[];
    let outputObj={};


    // const mappedArrays = arrays.map((array) => array.map(iteratee));

    // console.log(mappedArrays)

    // Creating Object with Key as  Item and Value as No.of Occurances in all given arrays
    for(let i=0;i<arrays.length;i++){
        outputArray[i]= arrays[i].map(iteratee);
        for(let k=0;k<outputArray[i].length;k++){
            if(outputObj[outputArray[i][k]]){
                ++ outputObj[outputArray[i][k]]
            }else{
                outputObj[outputArray[i][k]]=1
            }
        }
    }

    // filtered for intersection and creating [a,b] where a : item and b is no.of occurance. 
    outputArray =Object.entries(outputObj).filter(([key,val])=> val >=arrays.length)

    let finalArray =[];
   
    let searchArr =arrays[0].map(iteratee).map(val=> val.toString());
    outputArray.map((item)=>{
        let index = searchArr.indexOf(item[0]);  //we need only [a] from [a,b]. i.e item[0]
        finalArray.push(arrays[0][index])
    })
    return finalArray
}

clickHandler =()=>{
    // // Get the intersection based on the floor value of each number
    // const result1 = intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]); 

    // console.log(result1)// => [2.4]
    // // Get the intersection based on the lowercase value of each string
    // const result2 = intersectionBy(
    //     (str) => str.toLowerCase(),
    //     ['apple', 'banana', 'ORANGE', 'orange'],
    //     ['Apple', 'Banana', 'Orange'],
    // );
    // console.log(result2)  // => ['apple', 'banana', 'ORANGE']

    const result3 = intersectionBy(
       (value) => value.length,
       ['apple', 'banana', 'pear'],
       ['orange', 'kiwi', 'banana'],
       ['grape', 'pear', 'watermelon']
    )

    console.log(result3) // => ['pear'] 
}
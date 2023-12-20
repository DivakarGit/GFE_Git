/**
 * @template T
 * @param {T} value
 * @return {T}
 */
function deepClone(value) {

    /**
     * Solution 1
     */
    
    //return  JSON.parse(JSON.stringify(value));

    /**
     * Solution 2
     */

    if(typeof value!== 'object' || value ===null){
        return value;
    }
    // if(Array.isArray(value)){
    //     return value.map((item)=> deepClone(item));
    // }

    return Object.fromEntries(
                Object.entries(value).map(([key, value])=>[key,deepClone(value)])
            )

}

clickHandler =()=>{
    const obj1 = { user: { role: 'admin' } };
    const clonedObj1 = deepClone(obj1);

    clonedObj1.user.role = 'guest'; // Change the cloned user's role to 'guest'.
    console.log(clonedObj1.user.role); // 'guest'
    console.log(obj1.user.role); // Should still be 'admin'
}
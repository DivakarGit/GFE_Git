/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
function deepEqual(valueA, valueB) {
    if(!valueA || !valueB){
        if(valueA === valueB) return true
        return false
    }else if(typeof valueA !== typeof valueB){
        return false;
    }else if(typeof valueA =="boolean" && typeof valueB =="boolean"){
        return (valueA === valueB)
    }
    else if(typeof valueA =="string" && typeof valueB == "string" ){
        return (valueA === valueB);
    }else if(typeof valueA =="number" && typeof valueB =="number"){
        return (valueA === valueB);
    }else if(Array.isArray(valueA) && Array.isArray(valueB)){
            if(valueA.length ===0 && valueB.length===0) return true
            return valueA.every((item1)=>{
                if(typeof item1 !=="object"){
                    return valueB.includes(item1) && valueA.indexOf(item1) === valueB.indexOf(item1)
                }else{
                    return valueB.every((item2)=>{
                        if(!item1 || !item2){
                            if(item1 === item2) return true // null check
                        }
                        if(item1 && item2)
                            return deepEqual(Object.entries(item1)[0],Object.entries(item2)[0])
                    })
                }
            })

        
        
    }else if(typeof valueA =="object" && typeof valueB=="object"){ // type of object and Array both retuns object only
        if(valueA.length===0 || valueB.length===0) return false // this is for {},[] scenario
        if(Object.keys(valueA).length!==Object.keys(valueB).length) return false
        return deepEqual(Object.entries(valueA)[0],Object.entries(valueB)[0])
    }
}

clickHandler = () =>{
    // console.log(deepEqual('foo', 'foo')); // true
    // console.log(deepEqual({ id: 1 }, { id: 1 })); // true
    // console.log(deepEqual(['id',1] , ['id',1] )); // true
    // console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
    // console.log(deepEqual([{ id: '1' }], [{ id: '2' }])); // false
    // console.log(deepEqual([{ foo: 1 }], [{ foo: 1 }])) // true
    // console.log(deepEqual({}, [])) // false
    // console.log(deepEqual([], [])) // true
    // console.log(deepEqual([null], [null])) // true
    // console.log(deepEqual({ foo: 'bar', id: 1 }, { foo: 'bar', id: '1' })) //false
    // console.log(deepEqual({ foo: null, baz: 'baz' }, { bar: 'bar', baz: 'baz' })) //false
    console.log(deepEqual({ foo: null, bar: 'baz' }, { foo: null, bar: 'baz' }))
}
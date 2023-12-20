/**
 * @param Object
 * @return Object
 */
function camelCaseKeys(object) {

    // Case 1: Arrays
    if(Array.isArray(object)){
        return object.map((item)=>camelCaseKeys(item))
    }

    //Case 2: not an  object or null
    if(typeof object !== 'object' || object ===null ){
        return object
    }
    // Case 3: Object
    return Object.fromEntries(
       Object.entries(object).map(([key,value])=>[
        convertToCamelCase(key),camelCaseKeys(value)
       ])
    )
}

function convertToCamelCase(wordWithHyphen){
    // input : foo_bar
    let words = wordWithHyphen.toLowerCase().split('_'); // foo bar
    for(let i=1;i<words.length;i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1) //Bar
    }
    words= words.join('') //fooBar
    //Output: fooBar
    return words
}

clickHandler =() =>{
    const input1 = { foo_bar: true };
    const input2 = { foo_bar: true, bar_baz: { baz_qux: '1' } };
    const input3 = [{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }];
    const input4 = {
        foo_bar: true,
        Boo_Bar: false,
        bar_baz: [{ baz_qux: true }, { foo: true }],
      }
    console.log(camelCaseKeys(input4))

    /**
     * Threee Problems here
     * 1. How to write recursion
     * 2. camelCase conversion logic
     * 3. Object.entries/Object.fromEntries
     * 
     */

}
/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
function classNames(...args) {
    let output=''
    if(args.length==0) return output
    for(let i=0;i<args.length;i++){
        if(getValue(args[i]))
            output = output + getValue(args[i]) +' '

    }
    output = output.replaceAll(',',' ')
    return output.trim();
}
function getValue(input){
    if(typeof input!=='object'){
        return input
    }
    else if(Array.isArray(input)){
        return input.map((item)=>getValue(item));
    }

    else if(typeof input == 'object' && input){
        let str='';
        for(let k=0;k<Object.keys(input).length;k++){
            if(input[Object.keys(input)[k]]){
                str =str + Object.keys(input)[k] +' ';
            }
        }
        return str.trim();
    }
    //return Object.keys(input).filter((item) => item);
}

clickHandler =()=>{
    console.log(classNames('foo', 'bar')); // 'foo bar'
    console.log(classNames('foo', { bar: true })); // 'foo bar'
    console.log(classNames({ 'foo-bar': true })); // 'foo-bar'
    console.log(classNames({ 'foo-bar': false })); // ''
    console.log(classNames({ foo: true }, { bar: true })); // 'foo bar'
    console.log(classNames({ foo: true, bar: true })); // 'foo bar'
    console.log(classNames({ foo: true, bar: false, qux: true })); // 'foo qux'

    console.log(classNames(['foo', 'bar', 'baz'])); // 'foo bar baz'
    console.log(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''))
}
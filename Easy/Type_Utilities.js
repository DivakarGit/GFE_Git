function isBoolean(value) {
    return typeof value== 'boolean';
}

function isNumber(value) {
    return typeof value == 'number';
}

function isNull(value) {
    return (value === null)
}

function isString(value) {
    return typeof value === 'string';
}

function isSymbol(value) {
    return typeof value == 'symbol'
}

function isUndefined(value) {
    return (value === undefined)
}

clickHandler =() =>{
    console.log(`is Boolean ${isBoolean(false)}`);
    console.log(`is Number ${isNumber(123)}`);
    console.log(`is String  ${isString('hello')}`);
   


   

}
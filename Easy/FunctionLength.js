/**
 * @param {Function} fn
 * @return {number}
 */
 function functionLength(fn) {
    return fn.length;
  }

  
clickHandler =() =>{
    function foo() {}
    function bar(a) {}
    function baz(a, b) {}

    console.log(functionLength(foo));
    console.log(functionLength(bar));
    console.log(functionLength(baz));

}
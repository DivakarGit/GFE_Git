/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
    const originalMethod = this;
    return function(...args){
        return originalMethod.apply(thisArg,[...argArray,...args])
    }
};


clickHandler =()=>{
    const john = {
        age: 42,
        getAge: function () {
          return this.age;
        },
      };
      
      const unboundGetAge = john.getAge;
      console.log(unboundGetAge()); // undefined
      
      const boundGetAge = john.getAge.myBind(john,3);
      console.log(boundGetAge()); // 42


      const person = {
        name: 'John',
        getName() {
          return this.name;
        },
        dummy(a, b, c) {
          return [a, b, c];
        },
        greeting(prefix, message) {
          return `${prefix} ${this.name}, ${message}`;
        },
      };
      const greeting = person.greeting.myBind(person, 'Mr.');
      console.log(greeting('good morning!'))

}
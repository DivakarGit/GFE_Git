
// function ConstructorExample() {
//     console.log(this);
//     this.value = 10;
//     console.log(this);
// }
// new ConstructorExample();

function personFn(name,age){
    this.name = name;
    this.age = age;
}

function second(){
    console.log(this);
    this.val =10;
    console.log(this);
}

// var sample = new personFn('Deva',25);
let sample = second.bind(this)
console.log(new second.bind(this))

clickHandler =()=>{
   
    // -> {}
    // -> { value: 10 }
}


function get(objectParam, pathParam, defaultValue){
    const paramArray = Array.isArray(pathParam)? pathParam: pathParam.split('.')
    let index=0;
    while(objectParam!=null &&index<paramArray.length){
        // if(objectParam)
            objectParam = objectParam[paramArray[index]];
        index++;
    }
    const value = index && index === paramArray.length ? objectParam : undefined;
    return value !== undefined ? value : defaultValue;
}

clickHandler =() =>{
    const john = {
        profile: {
          name: { firstName: 'John', lastName: 'Doe' },
          age: 20,
          gender: 'Male',
        },
      };
      
      const jane = {
        profile: {
          age: 19,
          gender: 'Female',
          class:'Masters'
        },
      };
    console.log(get(john, 'profile.name.firstName')); // 'John'
    console.log(get(john, 'profile.gender')); // 'Male'
    console.log(get(jane, 'profile.name.firstName','divakar')); // divakar
    console.log(get({ a: { b: 2 }, c: 1 }, ['c']))
    console.log(get({ b: null   }, 'b')); //null
    console.log(get({ a: { b: null  } }, 'a.b.c'));// undefined

}
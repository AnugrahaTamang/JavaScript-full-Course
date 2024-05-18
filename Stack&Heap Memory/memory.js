// 1. Stack Memory has a fix memory size . Stack memory is liked a primittive datatypes. The primittive datatypes are null, undefined,Number,String,Boolean,Bigint,Symbol.. 
let name = "anugraha";
let name1 = name;
name1 = "Jiwan tamang"; //copy variable value is change but the original value is not change this called the stack memory occupied in system.
console.log(name); 
console.log(name1);

// 2. Heap Memory size is not fixed. It's like a non-primmitive datatypes. which value is not fixed in the memory location. Array,function,object is the best Example of it.
let obj = {
    name: "anugraha"
}
console.log(obj);
let obj1 = obj;
obj1.name = "rambahadur-mama";
console.log(obj); // the reference variable change the original variable value it's called the heap. 
console.log(obj1);

function add(a,b){
    return a+b;
}
let fun1 = add(2,3);
console.log(fun1);
let fun2 = fun1;
console.log(fun1);
console.log(fun2);




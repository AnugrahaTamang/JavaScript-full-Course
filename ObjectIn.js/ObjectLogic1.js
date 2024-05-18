// if we have a symbol datatypes . How we can access the as the symbol typeof. 
let val = Symbol("Hello");
let val1 = Symbol("Hello");
console.log(val==val1); // Note: value is false because symbol datatypes store the unique value.

let am = Symbol('raaja');
let obj = {
    name: "anu",
    age: 22,
    greet: function(a,b){
        return a+b;
    },
    arr: [1,2,3,4,5],
    am: 'raaja'
}
let obj1 = obj;
console.log(obj1);
console.log(obj.am);
console.log(typeof(obj1.am)); // datatype is show string but the datatype is not a string . It is the Symbol.


// Example two :
let bm = Symbol("raani");
let obj3 = {
    name: 'anu',
    [bm]: `rai`
}
console.log(obj3);
console.log(typeof(obj3[bm]));
let  obj4 = obj3;
obj4[bm];
console.log(obj4[bm]);
console.log(typeof(obj4[bm])); //
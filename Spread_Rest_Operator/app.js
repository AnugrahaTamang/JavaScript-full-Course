function price(num){
    return num;
}
console.log(price(200,400,500)); //output: 200 //yahi multiple value lai array ko form ma access garnako lagi hami rest operator ko use garxau 
// Example Two : 
function price2(...num){
    return num;
}
console.log(price2(200,300,400,500)); //output : [ 200, 300, 400, 500 ]


// Example three 
function price3(val1,val2,val3,...num){
    return num;
}
console.log(price3(2000,30000,4000,5000,6000)); // output: [ 5000, 6000 ]

// About the Spread Operator 
// we have a multiple object and array . How we can concatenated to single array and object. That case we use the spread operator. 
let obj1 = {name: "Anugraha",age: 22,height: 5.4};
let obj2 = {name: "jewan",age: 23,height: 5.7};
let obj3 = { name: 'shivlal',age:21,height: 5.9};
let objcon = {...obj1,...obj2,...obj3};
console.log(objcon);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2]
console.log(arr3);
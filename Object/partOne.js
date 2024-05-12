// Single tone 
// Object.create  //single tone yasma nai banxa jaha constructor ko use hunxa

// tar hami object literals sikna gairaheka xau 
// Object literals 
let obj = {};
console.log(obj);
console.log(typeof(obj));

let student = {
    name: "anugraha",
    "fullname": "AnugrahaGomja",
    age: 22
}
// console.log(student.fullname);//here is an error
console.log(student["fullname"]);//access garne autai matra method [""].
console.log(student.age);
console.log(student['name']);

let an = Symbol("key");
let bank = {
    "bank accout Name": "account name", //this is like a json metho to build the logic
    [an] : "mykey", //Note: imp to access the Symbol from object syntax
    name: "anugraha GOmja",
    age: 22,
    add: (a,b)=>{return a*b}
}
console.log(bank);
console.log(bank["bank accout Name"]);//only best method to access the keyvalue pairs.
// console.log(bank['an']);//this is not good to access the key 
console.log(bank[an]); //this is the good method to access the key.

bank.name = "jewan Tamang";
console.log(bank.name);
console.log(bank);

console.log(bank.add(2,3));
// Object.freeze(bank); Note: object lai freeze garne tarika

bank.greeting = function(){
    return "hello duniya";
}
console.log(bank.greeting());

bank.greetingtwo = function(fname){
    console.log(`hello js user ${fname}`);
}
console.log(bank.greetingtwo("anugraha"));


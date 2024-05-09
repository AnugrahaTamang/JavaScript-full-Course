//Javascript provides different type of datatypes to hold different types of values. There are two types of datatypes in js. primittive and non-primittive. primittive datatypes are string,number,boolean,undefined,null. Non-primmitive datatypes are Object,Arrays
let name = "anugraha gomja"; 
console.log(name); //output: anugrahagomja
console.log(typeof(name)); //type of String

let age = 20;
console.log(age); //output: 20
console.log(typeof(age));  //type of Number
 
let an;
console.log(an);//output: undefined
console.log(typeof(an)); //type of undefined

let bn = null;
console.log(bn); //output: null
console.log(typeof(bn)); // what are you guessing...? type of Object

let a = false;
console.log(a); //output false
console.log(typeof(a)); // typeof boolean
let b = true;
console.log(b); //output true
console.log(typeof(b));


// 2. Non-primittive datatype Example :

let array = ["AnugrahaGomja",1,2,3];
console.log(array);  //output: ['AnugrahaGomja',1,2,3]
console.log(typeof(array)); //object

let obj = {
    name: "anugraha tamang",
    age: 22
}
console.log(obj); //output: { name: 'anugraha tamang', age: 22 }
console.log(typeof(obj)); //object

function myfun(){
    console.log("hello anugraha gomja");
}
myfun();  //output : hello anugraha gomja
console.log(typeof(myfun)); // function

let arr =() => console.log("hello sathi");
arr(); //output: hello sathi
console.log(typeof(arr)); b//function

let ad = function(a,b){
    return a +b;
}
console.log(ad(2,3)); //output is 5
console.log(typeof(ad)); //function 

// Note:  null typeof value is object.


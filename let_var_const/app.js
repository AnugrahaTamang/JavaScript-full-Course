// Variable is a container for a value.   In javascript three type of variable. var,let & const // let and const is better than var. So we use the let and const. What is the region of it. Let's see from Example.
var a = 12;
console.log(a); //output is 12 var is global scope
var a = 13 ;
console.log(a); // output is 13 
a = 15;
console.log(a); //output is 15

// let a = 2;
// console.log(a); //Error because let not support the same variable name is globally.

let b = 12;
console.log(b);//output is 12
b = 1;
 console.log(b);//let is function scope

 const ab = 12;
 console.log(ab);
 ab =13;
 console.log(ab);//Error ....const case if we declare onetime there is no option for modified.....
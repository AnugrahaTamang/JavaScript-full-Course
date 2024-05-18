// Function Hoisting concept 


// what we need to mindset about this case ...here easily access the funtion declaration before //Note: this is called the function hoisting...
console.log(add(2));
function add(a){
    return a+3;
}


// This function expression case is the not possible is hoisting...
// console.log(sum(2));
// let sum = function(a){
//     return a+3;
// }


// This is about the variable hoisting....
console.log(a); // variale is declare but value is undefined . this is called the variable hoisting...Note: variable hoisting is possible on the var case.
var a = 12; 


console.log(b); // this is not possible
let b = 12;

console.log(c); // this is not possible
let c = 12;


// Note: This KEYWORD REPRESENT THE CURRENT CONTEXT/SCOPE VALUE .. 
// Example 1: 
console.log(this); // Output:  {}  // Browser ma Output: window/global objects


// Example 2:
let obj ={
    name: "anugraha tamang",
    age: 22,
    gret: function(){
        console.log(this.name);
    } 
}
console.log(obj.gret()); // Output: anugraha tamang... this keyword is used to access the current content inside the inside function...


// Example 3: 
// function name(){
//     let fname = "anu";
//     ab(){
//         console.log(this.fname);
//     }
// }
// console.log(name); // output: Error  .. In function this keyword is not allowed to access current context value.



// Example 4: 
// let bn = function(){
//     console.log(this);
// }
// output is Global object 


// function abc(){
//     console.log(this);
// }
// abc();  // Output is Global object


// let and = () =>{
//     console.log(this);
// }
// and();  Output is curly bracket..


// Note:  This keyword is only used the object case access to current context value inside function... 




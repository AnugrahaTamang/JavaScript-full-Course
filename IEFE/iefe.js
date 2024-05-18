// Note: This is about the IIFE (Immediately Invoked function Expression) ... Syntax : ()()... 

// Concept 1 about the IIEF 
(function Hi(){
    console.log("Hello Duniya");
})();


// Concept 2 about the IIEF  
(function add(a,b){
    console.log(a+b);
})(2,2);

// concept 3 
(() => console.log("hello sathi"))();


//concept 4 
((a,b) => console.log(a+b))(2,3);


// concept 5
((name) => {
    console.log(`I am ${name}`)
})("Anugraha Tamang");

// Note : This immediately invoked function expression used for global function case to reduce the variable population. 
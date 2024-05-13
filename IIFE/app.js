//Immidiately Invoked function Expression (IIFE)
(function gh(){
    console.log(12);
})();

// ()()
// Note: Global scope ko polution bada kahile kahi problem hunxa so global scope variable polution bada bachnako lagi hami IIFE ko use garxau .


(()=>{console.log("Hello sathi");})(); //Arrow function ko case ma

((name)=>{console.log(`Hello ${name}`);})("AnugrahaGomja");


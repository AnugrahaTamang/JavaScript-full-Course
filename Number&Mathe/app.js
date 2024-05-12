//This is about the Number and mathe
let score = 1200;
console.log(score);
console.log(typeof(score)); //typeof number

let num = new Number(1000);
console.log(num);
console.log(typeof(num));//typeof object 
//some number method
console.log(num.toFixed(2)); //1000.00
console.log(num.toFixed(4)); //1000.0000
console.log(num.toLocaleString()); //1,000

let nm = new Number(12.56);
console.log(nm.toPrecision(2));//13
console.log(nm.toPrecision(3)); //12.6
console.log(nm.toFixed(1)); //12.6

//---------MATH------------
console.log(Math); //Object [Math] {}
console.log(Math.random()); // 0 dekhi 1 ko bich ma value airahanxa
console.log(Math.min(1,2,3,4)); // 1
console.log(Math.max(2,3,4)); //4

console.log(Math.abs(-12)); //12 absolute value le negative number lai positive banauxa
console.log(Math.abs(10));//10

console.log(Math.sqrt(4)); //2
console.log(Math.sqrt(16)); //4

console.log(Math.PI); //output 3.141592653589793
console.log(Math.PI.toFixed(2)); //3.14

console.log((Math.random()*10)+1);//Note : +1 garnuko karan random value 1 dekhi 9 ko bich ma hos 0 naawosh vanera
 min = 20;
 max = 40;
console.log((Math.random(max-min+1)*10)+min); 

console.log(Math.ceil(12.3)); //13
console.log(Math.floor(12.3)); //12
console.log(Math.round(12.56));






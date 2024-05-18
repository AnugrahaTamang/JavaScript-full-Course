let arr = [1,2,3,4,5,6];

// 1. Push and Pop 
// arr.push(0);
// console.log(arr);
// arr.pop();
// arr.pop();
// console.log(arr);


// 2. Shift and Unshift in array 
// arr.shift();
// console.log(arr); remove from agadi bada
// arr.unshift("anugrah"); add garxa agadi 
// console.log(arr);

// 3. Join method is used for string change case
// let arr1 = arr.join();
// console.log(arr1);
// console.log(typeof(arr1));


// 4. Indexof & Includes in Array  
// console.log(arr.indexOf(9)); // yati tyo index xaina vne -1 dekhauxa sabai casema 
// console.log(arr.indexOf(2));
// console.log(arr.includes(2)); // yadi includes xa vne boolean ko rull apply hunxa true or false 
// console.log(arr.includes(arr)); // false dekhaunu parxa


// 5. slice and splice in array 
console.log(arr.slice(2,3));  
console.log(arr.splice(2,4));

let arr2 = [0,0,1,1,2,2,3,3,4,5,6,7];
const a = arr2.slice(2,5);
console.log(arr2);
console.log("a",a);
console.log(arr2);

const b = arr2.splice(2,5);
console.log(arr2);
console.log("b",b);
console.log(arr2);

// Note : slice and splice method is awesome method in js . but we know to that slice ma original value change hudaina vne splice ma original value change range bahek ko matra rahanxa . 

// 1. Shallow copy is like a Heap Memory. if we change the reference variable and Object reference that case the Original value will be Change. it's like a non-primittive datatypes. Array, Objects and Function is the Best Example of Shallow copy.  Example: 
let arr = [1,2,3,4];
console.log(arr);
let arr1 = arr;
arr1[0] = new Array('12');
console.log(arr);
console.log(arr1);






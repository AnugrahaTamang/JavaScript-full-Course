// Best method is Showing and Unbest method is commenting. 

// Which concatination is best 

// 1. 
// let arr = ["anu","jiwan",'ramit'];
// let arr2 = ['rama','name'];
// arr.push(arr2);
// console.log(arr);
// console.log(arr[3][1]);

// 2. 
// let arr = ["anu","jiwan",'ramit'];
// let arr2 = ['rama','name'];
// let arrs = arr.concat(arr2);
// console.log(arrs);

// 3. Spread Operator : spread le spread garne kam garxa it's the important
let arr = ["anu"];
let arr1 = [1,23,3];
let arr2 = ["anugraha tamang",23,true,23344,"bestfriend: jiwan tamag"];
const arrayconcatbestoption = [...arr,...arr1,...arr2,"Age"];
console.log(arrayconcatbestoption);




// flat array is use for nested array concatination. flat(Infinity) property is concatination the multiple array in JS . this is best . we understand from Example. 
let arrays = [1,3,4,4,[3,46,46,[2,3,5],3],13,[1,2[1,2],3],6];
console.log(arrays.flat(Infinity));
// 2. Deep copy is like a stack memory. Which Original reference doesn't affect the new value. This case the variable store the copy of original value. But don't replace the original Value . primittive datatype are the Example of deep copy. Example :
let name = "Anugraha Tamang";
let name1 = name;
name1 = "Anugraha Gomja";
console.log(name1);
console.log(name);
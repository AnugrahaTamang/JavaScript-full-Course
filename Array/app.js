let arr = [0,1,2,3,4,5];
console.log(arr);

let newArray = new Array(1,2,3,4);
newArray.push(2);
newArray.push(34);
console.log(newArray);
newArray.pop();
newArray.pop();
newArray.pop();
console.log(newArray);

newArray.unshift(12);
console.log(newArray);
newArray.shift();
console.log(newArray);

console.log(newArray.includes(3));

newArray.slice(1,3);
console.log("A:",newArray);
newArray.splice(1,3);
console.log("B:",newArray);

let a = ["anugraha","jiwan"];
let b = ["ramit","yahoshu"];
// a.push(b);
// console.log(a); //this is not best method to concat
// let  c = a.concat(b);
// console.log(c);

let d = [...a,...b];
console.log(d);

let e = [1,3,4,[2,3,54],[2,3,4,[2,3,4],4]];
let f = e.flat(Infinity);
console.log(f);

let name = "anugraha tamang";
let store = new Array(name);
console.log(store);
console.log(typeof store);

let student1 = "anugraha";
let student2 = "ramit";
let student3 = 'jiwan';
console.log(Array.of(student1,student2,student3));
console.log(Array.from("anu"));
console.log(Array.from({name: "Anugraha"}));


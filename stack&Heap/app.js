//Stack and Heap is memory type. stack is primittive datatype. Heap is Non-Primittive datatypes in javascript.
//Stack(copy value available) || Heap(reference value available)
let person = "anugraha tamang";
let person1 = person; // copy value 
console.log(person1);
person1 = "Jeewan Tamang";
console.log(person1);
console.log(person);

//Heap memory
let student ={
    name: "Ramit Tamang",
    age: 22
}
let st = student.name;
console.log(st);
let jt = student.name = "jethan";
console.log(jt);

console.log(student.name);
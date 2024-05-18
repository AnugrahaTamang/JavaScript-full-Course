// 1.  JavaScript objects are fundamental data structures that enable the organization and storage of data in the form of key-value pairs. Objects are unordered collection of key value pairs. These key-value pairs, known as properties. Object create method are listed Below.
// 1. Object Literals
// 2. Object constructor //Note: This also called as single value tone.....
// 3. Objecte create method  
// 4. factory function
// 5. constructor function 





// 1. Object literals  Note: Non-single tone value store
// let obj = {
//     name: 'anugraha tamang',
//     age: 22,
//     greet: function(a,b){
//         return a+b;
//     },
//     arr: [1,2,3,4]
// }
// console.log(obj);
// console.log(typeof(obj.arr));






// 2. Object Constructor   Note: Single value tone store
// let newObject = new Object();
// console.log(newObject);
// console.log(typeof(newObject));
// newObject.name = "anugraha";
// newObject.id = 123;
// console.log(newObject);
// newObject.greet = (a,b) =>{
//     return a+b;
// };
// console.log(newObject);
// console.log(newObject.greet(2,2));
// console.log(typeof(newObject.greet))





// 3. Object Create Method  
// let crea = {
//     name: "anugraha",
//     age: 22
// }
// let person = Object.create(crea);
// console.log(person);
// console.log(person.name);
// person.age = 23;
// console.log(person.age);





// 4. factory Function 
// function fn(){
//     return{
//         name: "anugraha",
//         age: 22
//     }
// }
// let aunu  = fn();
// console.log(aunu);
// console.log(typeof(aunu));

// function add(a,b){
//     return{
//         a: a,
//         b: b
//     }
// }
// let aunu2 = add(2,3);
// console.log(aunu2);





// 5. Constructor Function 
function CreatePerson(fName, lName, age){
    
    this.firstName = fName,
    this.lastName = lName,
    this.age = age,
    this.hobbies = ["sleeping", "writing", "playing"]

}

let person = new CreatePerson("Love", "Babbar", 24);

console.log(person);


function num(a,b,c){
    this.a = a,
    this.b = b,
    this.c = c
}
let abc = new num(1,2,3);
console.log(abc);





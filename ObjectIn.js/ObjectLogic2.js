// we have a multiple object inside the object . How we can deal with it . 
// let obj = {
//     fullname:{
//         fname: "anugraha",
//         lname: "tamang"
//     }
// }
// console.log(obj.fullname.fname);





// This is about the object concatination in javascript . 

let person ={
    name: "anugraha tamang",
    age: 22,
    number: 123456789,
    greet: function(){
        console.log("hello duniya");
    }
}

let person2 ={
    name: 'jiwan tamang',
    arr: [ 1,2,3,4,5,6]
}

let man = {person,person2};
console.log(man);
man = {...person,...person2};
console.log(man);
console.log(typeof(man));




// Note: this concept is very intresting and useful in javascript. 
console.log(Object.keys(person2));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(Object.apply(person2));
console.log(Object.hasOwnProperty(person2));










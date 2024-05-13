// This is about the high order loop in javascript. 
// for-of loop , for-in loop , forEach loop 
// const arr = [1,2,3,4,5];
// for(const key of arr){
//     console.log(key);
// }
const name = "AnugrahaGomja"
for(let key of name){
    console.log(key);
}

const str = "Hello sathi"
for(let strg of str){
    console.log(`${strg}`);
}

const map = new Map();
map.set('Nep', "Nepal")
map.set('USA',"united state America")
map.set('fr','france')
map.set('Nep',"Nepal") //unique value store garxa maple.
console.log(map); //Note: Map is a object . which store the unique value. 
// Output: Map(3) {
//     'Nep' => 'Nepal',
//     'USA' => 'united state America',
//     'fr' => 'france'
//   }

for(const [key,value] of map){
    console.log(key, ":-",value);
}

// About the +++For-in Loop ++_+__+
const myObject = {
opp: "object oriented programming",
js: "javascript",
py: "python"
}
for(let key in myObject){
    console.log(`${key} is the ${myObject[key]}`);
}

let arr = ['python','javascript','oop'];
for(let key in arr){
    // console.log(key); //lenth print hunxa
    console.log(arr[key]);//value print hunxa
}

for(const key in map){
    console.log(map);
}
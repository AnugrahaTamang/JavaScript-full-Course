// Single tone 
// const tinderUser = new Object();
// console.log(tinderUser);

// Non-single tone 
const tinderUser = {}
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = 'Sammu'
tinderUser.islogin = false
console.log(tinderUser);

// Nested Object 
const regularUser ={
    email: "something.com",
    fullname:{
        username:{
            fname: "Anugraha",
            lname: "Tamang"
        }
    }

}
console.log(regularUser.fullname.username.fname);
console.log(regularUser.fullname.username);

const obj1 = {a: "1",b: '2'};
const obj2 = { b: "3",c: "4"}
// const obj3 = {obj1,obj2}
// console.log(obj3);

// or 
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

const obj4 = {...obj1,...obj2};
console.log(obj4);

// Database bada value auda use garine method 
console.log(tinderUser);
console.log(Object.keys(tinderUser));//Array ma data store hunxa.....
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name')); //available vay true navay false
console.log(tinderUser.hasOwnProperty("logined"));


const user = [
    {
        id: 1,
        email: "anugrah@gamil.com"
    },
    {
        id: 2,
        email: "bijaygamil.com"
    },
    {
        id: 3,
        email: "jiwan@gamil.com"
    },
    {
        id: 4,
        email: "ramit@gamil.com"
    },  
]
console.log(user);
console.log(user[1]);
console.log(user[2].email);
// Note: Jaha hami sajilai loop lagauna sakxau .. 
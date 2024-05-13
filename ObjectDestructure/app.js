//This is about the object destructure ..
let course = {
    coursename: "js-nepali",
    coursepay: "999",
    courseinstructor: "AnugrahaGomja"
}
const{coursename} = course;
console.log(coursename);

// Note : Name change garnu parema 
let{coursepay: payment} = course;
console.log(payment);

const {courseinstructor: teacher} = course;
console.log(teacher);

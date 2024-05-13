const coding = ["js",'python','ruby','java']
coding.forEach(function(key){
    console.log(key);
})
coding.forEach((key)=>{console.log(key);})


let am = [
    {
        js: 'javascript',
        py: "Python"
    },
    {
        js: 'javascript',
        py: "Python"
    },
    {
        js: 'javascript',
        py: "Python"
    },
    {
        js: 'javascript',
        py: "Python"
    }
]
am.forEach(function(key,index,arr){
    console.log(index,arr);
})


let abc = [1,2,3,4,5,6];
// const xyz = abc.forEach((key) => {
//     return key;
// })
// console.log(xyz); //forEach loop le return gardaina

const cvb = abc.map((key)=>{
    return key;
})
console.log(cvb); //value return garxa 

const wer = abc.filter((key)=> key>4);
console.log(wer);

// Note: yadhi map ra filter loop ma block scope ko use garda return prayog garinxa kinaki value return garxa vne forEach le value return gardaina... 
// Example: 
let dkj = [1,2,3,4,54,56];
const bnm = dkj.forEach((key)=>{
    return key;
})
console.log(bnm);//Output is undefined 

let ghj = [1,2,3,34,4];
let ghk = ghj.map((key)=>{
    return key;
})
console.log(ghk); //Output is [ 1, 2, 3, 34, 4 ]

let bnmc = [1,2,3,4,5];
let rty = bnmc.filter((key)=>{
    return key;
})
console.log(rty); //Output is [ 1, 2, 3, 4, 5 ]

//Map Multi Concept 
const newNums = [1,2,3,4,5,6,7,8,9,10];
const Mynums = newNums
            .map((key)=>key*10)
            .map((key)=> key+1)
            .filter((num)=>num>50)
 console.log(Mynums);
//  Output is : [ 51, 61, 71, 81, 91, 101 ]

// About the reduce loop 
// Syntax of reduce loop  
//reduce((acc,curr){},number)
let op = [1,2,3,4,5];
let pp = op.reduce((acc,curr)=>{
    console.log(`the value of ${acc} and the current value ${curr}`);
    return acc + curr;
},0)
console.log(pp);

const dd = op.reduce((acc,cur)=> acc+cur,0);
console.log(dd);


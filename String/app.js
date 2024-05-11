//String is the collection of character in javascript.There are so many method in string . length,tolowercase,toUppercase,includes,startwith,endswith,search,match,indexof,lastindexof,replace,trim,charAt,charCodeAt,fromCharCode,concat,split,repeat,slice,substr,substring,tostring,valueof.....
var str = "Anugraha";
console.log(str.length);
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());
console.log(str.includes("A"));//string ma include xa ki xaina vnera check garxa
console.log(str.includes("Anugraha"));//true or false

console.log(str.startsWith('B'));//true or false dinxa 
console.log(str.endsWith('a'));
console.log(str.search('a'));
console.log(str.search("A"));

console.log(str.match('a'));

let Detail = "I am Anugraha Tamang From Dhading Nepal."
console.log(Detail.match("am"));
console.log(Detail.indexOf("Anugraha"));
console.log(Detail.indexOf("A"));
console.log(Detail.indexOf("gra"));
console.log(Detail.lastIndexOf("From"));


let superstar = "       RajeshHamal";
console.log(superstar.trim()); //space remove garne kam garxa in the javascript.
let rep = superstar.replace("RajeshHamal","AnugrahaGomja");
console.log(rep.trim());
console.log(rep.charAt(2));
console.log(rep.charAt(4));

console.log(rep.charCodeAt(4));



// About the String concatination 
let a = "anu"
let b = "gomja"
let c = a + b;
console.log(c);

console.log(a+" "+b);

let name1 = "Ramesh";
let name2 = "yadav";
let name3 = name1.concat(name2);
console.log(name3);
console.log(`${name1} ${name2}`);
console.log(name1.slice(1,3));
console.log(name1.split(" "));
console.log(name1.substring());
console.log(name1.valueOf());
let num = 12334;
let str1 = num.toString();
console.log(str1);
console.log(typeof str1);

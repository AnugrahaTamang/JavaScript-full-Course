function myfun(){
    const username = "AnugrahaGomja";
    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website); this is not accessible
    two();
}
myfun();

//+++++++++++++++++Difference between two return function method in javascript +++++++++++++++
console.log(addone(2));
function addone(num){
    return num+1
}

// another one 
console.log(addtwo(4));
let addtwo = function(num){
    return num +2
}

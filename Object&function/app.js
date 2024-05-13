let handleObject = {
    name: "xyz",
    price: 2200
}
function handleOne(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}
handleOne(handleObject)

//Direct object pni pass garna sakinxa 
handleOne({name:"ramit",price: 233});

// Array pni pass gari herau 
const mynewArray = [200,300,400];
function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(mynewArray));
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
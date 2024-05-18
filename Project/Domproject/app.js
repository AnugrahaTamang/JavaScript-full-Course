let h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
let h2 = document.querySelector('h2');
h2.style.textAlign = "center";
let g = document.querySelector('#gray');
g.style.border = '2px solid black';
g.style.height = "100px";
g.style.width = "100px";
g.style.backgroundColor = 'gray';
let r = document.querySelector('#red');
r.style.border = "2px solid black";
r.style.height = "100px";
r.style.width = "100px";
r.style.backgroundColor = 'red';
let y = document.querySelector("#yellow");
y.style.border = "2px solid black";
y.style.height = "100px";
y.style.width = "100px";
y.style.backgroundColor = 'yellow';
let t = document.querySelector("#teal");
t.style.border = "2px solid black";
t.style.height = "100px";
t.style.width = "100px";
t.style.backgroundColor = 'teal';

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id == 'gray'){
            body.style.backgroundColor = e.target.id; 
        }
        if(e.target.id == 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'teal'){
            body.style.backgroundColor = e.target.id;
        }
    })
})







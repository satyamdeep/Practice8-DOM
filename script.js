let h2= document.querySelector("h2");
console.log(h2.innerText);

function myFun(){  
        h2.innerText = h2.innerText + " JavaScript is Best Language";     
   
        }



//Second solution        
let box = document.querySelectorAll(".Box");
let i = 1;

function fun2() {
    for(div of box){
        div.innerText = `new box ${i}`;       
        i++;
    console.log(div.innerText);
    }
}

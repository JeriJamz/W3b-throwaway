let name = 'jeri james';
const idk = 'something';


//alert("NotePad gang");

console.log("Testing Testing");

const wassam = (name) =>{
   console.log(`Hello ${name}`);
}

wassam('Lucy');
wassam('Buck');
/*global obj when u pull this up in the console
I think the window is the global bc its well what you see and interact with
everything under that is just local scope
    like <h1>*/
/*Its also full of func that no one want to reconfig*/


//console.log(global); this pulls up all the global func

//this would be good for a cheap lil web attack

global.setTimeout(() =>{//second in the stack, but its coded first
    console.log('The timeout');
}, 3000);

setTimeout(() =>{//final output
    console.log('Timeout Two Times');
    clearInterval(int);
}, 6000);

const int = setInterval(() =>{//first in the stack repeats twices(like timer),Then three times
    console.log('This is a repeat')
}, 1000)//every second


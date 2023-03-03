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
    clearInterval(int);//(1)this is called last, the claer is here bc int is behind it(4)js is gonna jmp here and terminate whatever argument is in the method 
}, 6000);

/*clear int is high lvl. U pay attetion...follow the numbers*/

const int = setInterval(() =>{//first in the stack repeats twices(like timer),Then three times
    console.log('This is a repeat')//(3)pretend we put jmp,32 at line 40
}, 1000)//every second(2)int is stuck in a 4eva loop. Its like playing in asm


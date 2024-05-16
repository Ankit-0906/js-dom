// Q-1 Create a H2 heading element with text- "Hello Javascript". Append "From Apana Collage 
//Student" to this text using JS.
// let h2= document.querySelector("h2");
// console.log(h2.innerText);
// h2.innerText= h2.innerText +" From Apana Collage Student";

//Q-2 Create 3 divs with common class name - "box". Access them & add some unique of them.
//let divs=document.querySelectorAll(".box")
//console.log(divs);
// let n=1;
// for(div of divs){
//     div.innerText=`Unique box ${n}`;
//     n++;
// }
// div[0].innerText="Unique box 1"
// div[1].innerText="Unique box 2"
// div[2].innerText="Unique box 3"

//Q-3 Create a new button elelemnt, give it a text "Click me", background color as 'red'
//and text color as 'white'. Insert the button as the first element inside the body tag.
let btn=document.createElement("button");
btn.innerText="Click me";
btn.style.backgroundColor="red";
btn.style.color="white";

document.querySelector("body").prepend(btn);
//document.querySelector("body").append(btn);

// Q-4 Create a paragraph tag in html, give it a class and some styling. Now create a new class in css and try to append this class to the <p> element.
//Did you notice, how you overwrite the class name when you add the new one?
//solve this problem using classList
let para=document.querySelector("p");
//console.log(para.getAttribute("class"));
//para.setAttribute("class" , "newParaClass");//but it override the previous class property
// so now we need to used classList
para.classList.add("newParaClass")

// JavaScript EventListeners

//Syntax: addEventListener(event,function, useCapture)
const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");
const doSomething = () =>{
    alert("Doing something");
}

h2.addEventListener("click",doSomething, false);
h2.removeEventListener("click",doSomething,false)

/* What is event.target

<div id="box">
  <button id="btn">Click Me</button>
  </div>

  document.getElementById("box").addEventListener("click", function(event) {
  console.log("Clicked element is:", event.target);
});

event.target give output <button id="btn">Click Me</button>

*/
  



h2.addEventListener("click", function(event){
     console.log(event.target);
     event.target.textContent = "clicked";
})


document.addEventListener("readystatechange", (event)=>{
     if(event.target.readyState === "complete"){
        console.log("readyState complete");
        initApp();
        initapp();
        
     }
})

//Event Bubbling

const initApp = ()=>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click",(event)=>{
        view.style.backgroundColor = "purple";
    })
    div.addEventListener("click",(event)=>{
        div.style.backgroundColor = "yellow";
    })
    h2.addEventListener("click",(event)=>{
        h2.style.backgroundColor = "Green"
    })
}


// For view3 (form data)
// Prevent Default :- When we hit enter or click submit then the website get refreshed/reloads the page but sometimes we don't want that to happen then we use preven default function.

const initapp = ()=>{
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        console.log("submit event");
        
    })
}
 
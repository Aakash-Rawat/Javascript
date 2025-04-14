//  ++++++++ DIAGLOGUE BOXES ++++++++++++++

// 1) Alert box
alert("hello world") 

// 2) Confirm box
let myBoolean = confirm("OK === True\nCance === False");
console.log(myBoolean);

// 3) Prompt box
let n = prompt("Please enter your name");

if(n)
{   console.log(n.length)
    console.log(n.trim().length)
   console.log(n.trim());
}

// Trim is used to remove extra space but not in between string or chars


   else{
          console.log("You didn't enter your name")
   }




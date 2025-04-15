// JavaScript error and error handling

"use strict";
const makeError = ()=>{
    try {  

  throw new customError("This is a custom error");
    const name = "aakash";
    name = "joe"; 

    } catch (err) {
        console.error(err); 
        console.log(err.name);
          
        // console.error(err.message)
        // console.error(err.stack)
    }
}
makeError();

// Custom error

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`
}

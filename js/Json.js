// JSON : Javascript Object Notation
/* 
Json is used to send and recieve data.
Json is a text format that is completely laguage independent.
Meaning Json is used to send and recieve data in many languages, not just in javascript
*/

const myObj = {
    name: "aakash",
    hobbie: ["eat","sleep","code"],
    hello: function(){
        console.log("hello");
        
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

// Sending data in the form of string
const sendJson = JSON.stringify(myObj);
console.log(sendJson);
console.log(typeof sendJson);

// Converting Json back to object so that we can perform actions on recieved data
const recieveJson = sendJson.json();
console.log(recieveJson);
console.log(typeof recieveJson);








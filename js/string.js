/*console.log("Hello World");
console.log(typeof "Aakash");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
*/

//strings
const myVariable = "mathematics";

//+++++++++ STRING METHODS ++++++++++++++

//The Length property
console.log(myVariable.length);

//CharAt
console.log(myVariable.charAt(6));

//indexOf
console.log(myVariable.indexOf("a"))

//if i want second "a" then i can type characters after "a" in string to specify which "a" we are talking about
console.log(myVariable.indexOf("ati"));

//Slice method
// Slice method accept starting and ending position parameters and return character between those position excluding last position

console.log(myVariable.slice(5,8));

//toUpperCase method && toLowerCase
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

//includes methods
// if the character or group of character provided are present in this string then this method returns true.
console.log(myVariable.includes('mat'));

//Splits methods
//This method splits the string wherever the character we provide occurs and returns the resulting string as array and excludes that character.
// if we provide empty quotes will turn every character seperate string of array
console.log(myVariable.split("e"));
// we can uses this to seperate string wherever the comma occurs in string. Also for space
console.log("john,doe,jhonny,augusta".split(","));












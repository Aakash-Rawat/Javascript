// Arrays
const myArray = [];

// add elements to an array
myArray[0] = "Aakash";
myArray[1] = false;
myArray[2] = 1;

//refer to an array
console.log(myArray);

// Length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);


// Push element in array
myArray.push("School")
console.log(myArray);

// pop element from array
const lastItem = myArray.pop();
console.log(lastItem);

//unshift element (adds to the array at front)
myArray.unshift(42);
console.log(myArray);

//shift element (removing from front of the array)
myArray.shift()
console.log(myArray);

// delete any element in array (it doesn't shrink the array but put undefined at that point)
delete myArray[1];
console.log(myArray);

// splice (To remove elements from a particular starting point to particular ending point)
myArray.splice(1,1);
console.log(myArray);

//splice can also be used to replace element at a position
myArray.splice(1,1,42);
console.log(myArray);

// Slice method (prints only those elements which are under given parameter excluding last)
const array  = ["a","b","c","d","e","f"];
const newArray = array.slice(2,5);
console.log(newArray);

// Reverse method
array.reverse();
console.log(array);

// Join method
const newString = array.join();
console.log(newString);

//Split method (Creates an array of any string seperated by a certain parameter present in string)
s = "aa,ka,s,h"
st = "My name is aakash rawat"
const arr = st.split(" ")
console.log(arr);


// Array inside array and concatination of array
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const newArr = [arr1,arr2];
console.log(newArr);

const concatedArray = [...arr1, ...arr2];
console.log(concatedArray);

// 2d array or nested array 
const ar1 = [1,2,3,4,5];
const ar2 = [6,7,8,9,0];

const newAr = [ar1,ar2];
console.log(newAr[0][3]);






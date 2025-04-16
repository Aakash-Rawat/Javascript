/*       Functions :- 
 Methods = Built-in functions
(example :- toLowerCase, Math etc)
*/

function sum()
{
    return 2+2;
}

// console.log(sum());


// Parameterized function

function summ (num1,num2)
{
    return num1+num2;
}

// console.log(summ(2,6));

function getUserNameFromEmail(email)
{
    return email.slice(0,email.indexOf("@"));
}
// console.log(getUserNameFromEmail("player1@gmail.com"));

// Functions can also be stored in a variable

const getUserName = function(email)
{
    return email.slice(0,email.indexOf("@"));
}
// console.log(getUserName("aakash@gmail.com"));



// Arrow functions
const getUser = (email) =>
{
    return email.slice(0,email.indexOf("@"));
}
console.log(getUser("rawat_aakash@gmail.com"));



// Function which returns a function (Higher Order)
function multiply(x){
  return function (y){
    return x*y;
  }
};

const double = multiply(2);
console.log(double(5));

//Breakdown of double :- Here double becomes the name of function returned by multiply function. Basically double is :- 
/* 
   const double = function(y){
         return 2*y;
      }
*/    



//++++++++++++++ NOTES +++++++++++++++++++++++++

//We can't use "this" keyword with arrow function because in arrow functions "this" refers to global object.
// But if arrow function is inside normal function then arrow function inherits "this" of normal function.

/* 

a constructor function is just a normal function, but used in a special way with the new keyword.

Difference between constructor function and normal function :-
Constructor function is used to create multiple new objects using new keyword and this keyword.
In a constructor function "this" keyword refers to every new object which is created.

EXAMPLE:- Normal Function

function sayHi() {
  console.log("Hi!");
}

sayHi(); // Just a normal function call


EXAMPLE :- CONSTRUCTOR FUNCTION

function User(name) {
  this.name = name;
  this.sayHello = function () {
    console.log("Hello, I'm " + this.name);
  };
}

const user1 = new User("Aakash");
user1.sayHello(); // "Hello, I'm Aakash"











*/
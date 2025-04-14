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

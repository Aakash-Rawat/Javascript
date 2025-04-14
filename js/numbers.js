//+++++++++ NUMBERS && NUMBER METHODS ++++++++++++++

const myNumber = 42;
console.log(myNumber);

const myFloat = 42.01;
console.log(myFloat);

const myString = "42";
console.log(myNumber === myString);

// If we do string + number it gives output as string
console.log(myString+3);

//We can change string datatype to Number datatype by using Number keyword
console.log(Number(myString));

//if we pass string inside Number datatype then it give NaN which means Not a Number
console.log(Number("aakash"));

//To check if a given variable is integer or not we use keyword Number.isInteger().
console.log(Number.isInteger(myFloat));

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from argument, it reurns NaN. This method also converts string containing numbers to Number datatype and removes character from it but characters shouldn't be before number.
console.log(Number.parseFloat(myFloat));
const myString2 = "42abc"
console.log(Number.parseFloat(myString2));

//The toFixed() method formats a number and changes ot to string according to how many decimal points you provide as the parameter.
console.log(myFloat.toFixed(2));
const type = myFloat.toFixed(2);
console.log(typeof type);

//The Number.parseInt() parses an argument and return an integer. Converts other datatype to Number datatype
console.log(Number.parseInt(myString2));

// The toString() method returns a string representing the number..Converts number to string
console.log(myFloat.toString());

// The Number.isNaN() method determines whether the passed value is NaN AND its type is number







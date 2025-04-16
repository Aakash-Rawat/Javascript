/* 

ALL IMPORTANT ARRAY METHODS

✅ 1. map()
What it does: Creates a new array by changing every element in the original array.
const numbers = [1, 2, 3];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
📌 Use when you want to transform each element in an array.

✅ 2. filter()
What it does: Creates a new array with only the elements that match a condition.


const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evens); // [2, 4]
📌 Use when you want to remove some elements based on a condition.

✅ 3. reduce()
What it does: Reduces the array to one single value (e.g., sum, product).


const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function(total, current) {
  return total + current;
}, 0);

console.log(sum); // 10
📌 Use when you want to combine all values into one.

✅ 4. forEach()
What it does: Runs a function on each element, but doesn't return anything.


const fruits = ['apple', 'banana', 'mango'];

fruits.forEach(function(fruit) {
  console.log(fruit);
});
📌 Use when you just want to do something for each element, not return a new array.

✅ 5. find()
What it does: Returns the first element that matches the condition.


const numbers = [1, 3, 5, 8];

const firstEven = numbers.find(function(num) {
  return num % 2 === 0;
});

console.log(firstEven); // 8
📌 Use when you only need the first match, not all matches.

✅ 6. some()
What it does: Returns true if any element matches the condition.


const numbers = [1, 3, 5, 8];

const hasEven = numbers.some(function(num) {
  return num % 2 === 0;
});

console.log(hasEven); // true
📌 Use when you want to check if at least one item matches.

✅ 7. every()
What it does: Returns true if all elements match the condition.


const numbers = [2, 4, 6];

const allEven = numbers.every(function(num) {
  return num % 2 === 0;
});

console.log(allEven); // true
📌 Use when you want to make sure all items match a condition.

✅ 8. sort()
What it does: Sorts the array (changes the original array).


const numbers = [4, 1, 3, 2];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers); // [1, 2, 3, 4]
📌 Add (a - b) for number sorting. Otherwise it sorts as strings.

✅ 9. includes()
What it does: Checks if a value exists in an array.


const fruits = ['apple', 'banana', 'mango'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape'));  // false
📌 Use when you just want to check if a value exists.

✅ 10. splice()
What it does: Removes or adds items to an array (modifies original array).


const fruits = ['apple', 'banana', 'mango'];

fruits.splice(1, 1); // remove 1 item at index 1
console.log(fruits); // ['apple', 'mango']

fruits.splice(1, 0, 'grape'); // insert 'grape' at index 1
console.log(fruits); // ['apple', 'grape', 'mango']
📌 Use to add or remove items in-place.

✅ 11. slice()
What it does: Returns a part of the array without changing the original array.


const fruits = ['apple', 'banana', 'mango', 'grape'];

const someFruits = fruits.slice(1, 3);
console.log(someFruits); // ['banana', 'mango']
📌 Use when you want a copy of part of an array.

✅ 12. join()
What it does: Joins array elements into a string.

const words = ['Hello', 'world'];

const sentence = words.join(' ');
console.log(sentence); // "Hello world"
📌 Use to combine array into string with custom separator.

✅ 13. split()
What it does: Splits a string into an array.


const sentence = "I love JavaScript";

const words = sentence.split(' ');
console.log(words); // ['I', 'love', 'JavaScript']
📌 Use to turn string into array, opposite of join().

✅ 14. flat()
What it does: Flattens nested arrays.


const numbers = [1, [2, [3, 4]]];

const flatArray = numbers.flat(2);
console.log(flatArray); // [1, 2, 3, 4]
📌 Use to remove nested layers in arrays.

✅ 15. Object.keys(), Object.values(), Object.entries()

const user = {
  name: "Aman",
  age: 22
};

console.log(Object.keys(user));   // ['name', 'age']
console.log(Object.values(user)); // ['Aman', 22]
console.log(Object.entries(user));// [['name', 'Aman'], ['age', 22]]
📌 Use to get keys, values, or both as array of pairs from an object.

*/
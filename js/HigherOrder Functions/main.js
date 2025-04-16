// Higher order functions

// A higher order function is a function that does at least one of the following.
// Takes one or more functions as an argument(parameter).
// Returns a functions as a result.

// 1) forEach()
import { posts } from "./posts.js";
 posts.forEach((post)=>{
    console.log(post); 
 })

 console.clear();

 // 2) Filter() :- Creates a new array with only the elements that match a condition.
 const filterPost = posts.filter(post=>{
      return post.userId === 1;
 })
 console.log(filterPost);

 // 3) Map() :- Creates a new array by changing every element in the original array.
 const mappedPost = filterPost.map(post=>{
    return post.id*2;
 })
console.log(mappedPost);

 // 4) Reduce() :- Does sum of all elements of array
 const reducedPost = mappedPost.reduce((sum,post)=>{
    return sum + post;
 })

 console.log(reducedPost);
 

 // For deatiled theory, check Theory.js file..
// Fetch requires a discussion of callbacks, pormises, then and async await

// Callback :- "We're not actually giving any particular function in the callback, we are just giving a reference so that every function can use it"

// wave and hug are callback as they are passed as argument

function doSomethingNice(action) {
//   console.log("Doing something nice...");
  action(); // ❗ Call the passed function
}

function wave() {
//   console.log("👋 Waving at you!");
}

function hug() {
//   console.log("🤗 Giving you a hug!");
}

doSomethingNice(wave); 
doSomethingNice(hug);  


// Promises
// 3 states : Pending, Fulfilled, Rejected
// Resolve and Reject keywords are like return keyword but they are only used inside promises.

const myPromise = new Promise((resolve,reject)=>{
    const error = false;
    if(!error){
        resolve("Yes resolved the promise");
    }
    else{
        reject("No reject the promise")
    }
});

console.log(myPromise);

myPromise.then(value=>{
   return value+1;
   
// Important point: In JavaScript, when you return something from a .then(), that return value is automatically passed to the next .then() in the chain.
})
.then(newValue =>{
    console.log(newValue)
    
})

/*  Why does return pass the value?
.then() always returns a new promise. If you return a value inside .then(), that value is wrapped in a resolved promise and passed to the next .then() in the chain.

If you return a promise instead of a value, it will wait for that promise to resolve and then pass its result to the next .then().

*/


const anotherPromise = new Promise((resolve,reject)=>{   
    const error = true;
    if(!error){
        resolve("You resolved the error");
    }
    else{
        reject("No the error isn't resolved");
    }

})

anotherPromise.then(value=>{
     return value+2;
    
})
.then(value=>{
   console.log(value);
   
})
.catch(err=>{
    console.log(err);
    
})

// Using setTimeout

const myNextPromise = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Resolved this")
    },3000)
});

myNextPromise.then(value=>{
    // console.log(value);
    
});



// Pending State of Promises 
// When we fetch a data it always gives/returns data in form of promises so here we don't create any new promise just handle the promise using then and catch

const users = fetch("https://jsonplaceholder.typicode.com/users")

// console.log(users); 
// Output says "pending". Because we directly displaying user data instead of handling the promise. Fetching data takes time that's why promises are used

// Handling promises
// Fetching api gives response as readable string which needs to me converted into JSON so that we can work on it


fetch("https://jsonplaceholder.typicode.com/users")
   .then(response=>{
    console.log(response);
    return response.json();
    
   })
.then(data=>{
    data.forEach(user => {
        // console.log(user);
        
    });
    
})

// Promises also gets messy because of too much then statements and also if i do something outside then, it'll be executed before then excutes that's why it becomes problems sometime. That's why we use the concept of Async Await

// Async / Await

const myUsers = {
    userList: []
}

const myCoolFunction = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const jsonUserData = await response.json();
   
    
    return jsonUserData;
}

myCoolFunction();

// Here we used async on anotherFunc also because async await always returns a promise so if we don't use async where we are getting data of other async function then it'll show pending.. Also async await also does chaining like promises. Above return will send data to next async like promises does hence we have to use async await in anotherFunc too...

const anotherFunc = async () =>{
   const data =  await myCoolFunction();
    myUsers.userList = data
    console.log(myUsers.userList);
    
}

anotherFunc();
console.log(myUsers.userList); // This console log will give empty array because above until the async function is fetching data and filling it to array, it allows further code outside async to run without waiting. That's why this console log is executed even before data fetched and gives empty array





// Theory of promises
/* 

When you return a Promise from a function, you're saying:

“This function won’t give the final result right now, but it promises to give it later — either successfully or with an error.”

🔁 Instead of returning a value immediately:
Like this:


function getName() {
  return "Krishna";
}
You're doing this:


function getNameLater() {
  return new Promise((resolve, reject) => {
    resolve("Krishna");
  });
}
This returns a Promise object, not a direct string. The real value is delivered later, inside .then().

✅ So what are we actually returning?
You are returning an object created by new Promise(...).


return new Promise((resolve, reject) => {
  resolve("Hello");
});
That Promise object has:

a status: pending → fulfilled/rejected

a value or error: "Hello" or an error message

a way to attach .then() or .catch() to receive that result later..

+++++++++++++++++++++++++++++++++++++++++++++++++++

Let’s say a function gives you a box (a Promise). Inside the box, there’s a value... but you don’t know when it will be ready.


const box = waitAndGiveBox(); // This is a Promise
Since the value isn’t ready yet, you say:

"Hey box, when you're ready, call this function 👉"

And that’s exactly what .then() does:


box.then(result => {
  console.log("Box is now ready with:", result);
});
So:

👉 Attaching .then() means:
“I'm giving you a callback function — please call it when your work is done.”

Same goes for .catch():


box.catch(error => {
  console.log("Box had an error:", error);
});
You're attaching a callback that will be triggered when the promise fails.

*/

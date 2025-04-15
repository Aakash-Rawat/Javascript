// Web Storage Api :- 
// It's like your browser’s little notebook 📒 where your website can save small bits of data, so it remembers things even when the page reloads or the user comes back later.


/* WHAT IS THE USE OF SESSION STORAGE AND LOCAL STORAGE

1. localStorage – "Persistent Storage" 🏠
Use case:
localStorage is great for saving data that needs to be remembered between sessions. For example, this data will stick around even if the browser is closed and reopened.

Real-World Examples:
User Preferences:
Imagine a website where users can change the theme (light/dark mode). You'd want to save this preference so they don't have to pick it again when they come back. You can use localStorage to store their preference.


localStorage.setItem("theme", "dark");
Login Session:
If you have a "Remember Me" feature for users, localStorage can be used to keep them logged in even after closing the browser.


localStorage.setItem("isLoggedIn", true);
Shopping Cart:
In an online store, you can use localStorage to store the user's cart items. This way, even if they leave and come back later, the cart will still have their items.


localStorage.setItem("cart", JSON.stringify(cartItems));
Why use localStorage?
Data is available even after the browser or tab is closed.

It's perfect for remembering settings, user preferences, or data that doesn't change often.

2. sessionStorage – "Temporary Storage" 
Use case:
sessionStorage is for temporary storage. It only lasts as long as the tab is open. Once the user closes the tab or browser, everything in sessionStorage is wiped away.

Real-World Examples:
Form Data:
If you're filling out a multi-step form, you can use sessionStorage to store the data temporarily while the user moves between steps. If they accidentally reload the page, they won’t lose the data!


sessionStorage.setItem("formStep1", JSON.stringify(formDataStep1));
Tracking User's Current State:
If you're building a web app (like an online editor or tool), sessionStorage can be used to keep track of where the user is — e.g., what page they’re on, what settings they’ve selected, etc.


sessionStorage.setItem("currentPage", "step2");
Temporary Authentication:
After logging in, you might store some session-specific data (e.g., a temporary session token) in sessionStorage to maintain the user's session while they interact with your site.


sessionStorage.setItem("authToken", "abcd1234");
Why use sessionStorage?
Data is cleared automatically when the tab is closed.

It's perfect for storing temporary data that doesn't need to survive page reloads or sessions.

*/
const myArray = ["eat","sleep","code"];
const myObject = {
    name: "Aakash",
    hobbies: ["eat","sleep","code"],
    logName: function(){
        console.log(this.name); 
    },
}


//  Session Storage :- It stores data while we are on the website and loggedIn.
// Local Storage :- It stores persistent data and it'll continue to store data in the browser even when we leave website. So basically we can reopen browser, go back to the same website and retrieve that data and this is called persistent data.


// Session Storage syntax :- 
// sessionStorage.setItem(key, value)
//It stores data as string that's why we use json

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);



sessionStorage.setItem("mySessionArr", JSON.stringify(myArray));
const mySessionArray = JSON.parse(sessionStorage.getItem("mySessionArr"));
console.log(mySessionArray);




// Local Storage
localStorage.setItem("myLocalStore", JSON.stringify(myObject));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);


// Properties :- 
// Remove item :- used to remove local or session data
localStorage.removeItem("myLocalStore");
sessionStorage.removeItem("mySessionStore");
// clear :- it clear all data
localStorage.clear();
sessionStorage.clear();






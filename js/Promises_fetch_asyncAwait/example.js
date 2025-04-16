const getAllUserEmail = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map(user=>{
        return user.email;
    });

    // console.log(userEmailArray); 
    postWebPage(userEmailArray);

}

const postWebPage = (data)=>{
    console.log(data); 
}

getAllUserEmail();


// Example 2 :- 2nd parameter of fetch

const getDadJoke = async ()=>{
    const response = await fetch("https://icanhazdadjoke.com/", {
          
      method : "GET",
      headers : {
        Accept : "application/json"
      }
    });

    const jsonJokesData = await response.json();

    console.log(jsonJokesData.joke);
    
}

getDadJoke();


/*
 In your code: why method and headers?

{
  method: "GET",
  headers: {
    Accept: "application/json"
  }
}
method: "GET"

Explicitly tells the browser “I want to retrieve data.”

(If you omitted it, fetch would default to GET anyway.)

headers: { Accept: "application/json" }

Sets the Accept header to tell the server, “Please send your response in JSON format.”

Without it, some APIs might return HTML or plain text by default.

// This is syntax of fetch :-
fetch(url, {
  method,           // "GET", "POST", ...
  headers: {        // HTTP headers
    "Content-Type": "application/json",
    Accept: "application/json",
    // …
  },

  // other things to include in header:-
  🔹 1. method
HTTP method to use for the request.

Examples: "GET", "POST", "PUT", "DELETE"

🔹 2. headers
An object with HTTP headers to send.

Example:


headers: {
  "Content-Type": "application/json",
  "Accept": "application/json"
}
🔹 3. body
The data you want to send in a POST, PUT, or PATCH request.

Accepts:

string (e.g. JSON.stringify(data))

FormData object

Blob, ArrayBuffer, URLSearchParams, etc.

Not used with GET or HEAD requests.

🔹 4. mode
Controls CORS (Cross-Origin Resource Sharing) behavior.

Values:

"cors" – Allows cross-origin requests (default for APIs)

"no-cors" – Allows cross-origin but with limited access (opaque response)

"same-origin" – Only allow requests to the same origin

🔹 5. credentials
Controls whether cookies and credentials are sent with the request.

Values:

"omit" – Never send credentials

"same-origin" – Send credentials only to same origin (default)

"include" – Always send credentials (even cross-origin)

🔹 6. cache
Controls caching behavior.

Values:

"default" – Standard cache rules

"no-store" – Don't read or write from cache

"reload" – Always fetch from the server

"no-cache" – Validate with server before using cached

"force-cache" – Use cache without validating

"only-if-cached" – Only use cache, throw error if not cached

🔹 7. redirect
How redirects should be handled.

Values:

"follow" – Automatically follow redirects (default)

"error" – Throw error on redirect

"manual" – Handle manually via response.redirected
})
*/


// Notes for res.status from backend to frontend
/*


In Backend (Express)	
res.json({ token: "abc123" }) it converts object to JSON string and sets header

In Frontend (JavaScript)	
await res.json() is Converted to JSON string → JS object

*/


/*
// IMPORTANT TO UNDERSTAND BASIC CONCEPTS

Your question in simple words:
We used JSON.stringify() on the frontend to send data like this in form of string :- 
// FRONTEND
fetch("/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ email: "a@gmail.com", password: "1234" })
});

Then in backend we do :-
//Backend 
const {email,password} = req.body;

— how is it an object again?
Isn’t it just a string? Why can we access properties from it like an object?

✅ The Answer: Because of middleware like 
express.json()
When you send a JSON string in the request body, Express automatically parses that string back into a JavaScript object using this line:


app.use(express.json());
Without this line, req.body would stay as a plain string — unusable for accessing email, password, etc.

*/
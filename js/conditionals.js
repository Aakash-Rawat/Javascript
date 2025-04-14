//++++++++++++ If Statements +++++++++++++++++

/*syntax
if(condition)
{
    //run some code
}
else{

}
*/

let customerIsBanned = true;
let soup = "vegetabke noodle soup";
let reply;
if(customerIsBanned)
{
    reply = "No soup for you"
}
else if(soup)
{
    reply = `Here is your order ${soup}`;
}
else{
    reply =  `Sorry we are out of soup`;
}
// console.log(reply);

let testScore = 59;
let collegeStudent = true;
let grade;

if(testScore>=90)
{
    grade = "A";
}
else if(testScore>=80)
{
    grade = "B"
}
else if(testScore>=70)
{
    grade = "C"
}
else if(testScore>=60)
{
    grade = "D"
}
else{
    if(collegeStudent)
    {
        grade = "U";
    }
    else{
        grade="F";
    }
}
// console.log(grade);

//+++++++++ SWITCH STATEMENTS +++++++++++++++++++

/* swtich(expression OR value)
{
   case choice1: 
   run code
   break;

   case choice2:
    run code
    break;

    default:
        run this code if no case matches
        no need for break 
}
*/

// Rock Paper Scissors using switch statements

let playerOne = "paper";
let computer = "rock"

switch(playerOne)
{
    case computer:
        console.log("tie game!");
        break;

    case "rock":
        if(computer === "paper")
        {
            console.log("Computer wins");
            
        }
        
       else{
        console.log("You win"); 
       }
       break;

       
    
    case "paper":
        if(computer === "scissors")
        {
            console.log("Computer wins");
            
        }

        else{
            console.log("You wins");
            
        }
        break;

    default:
        if(computer === "rock")
            {
                console.log("Computer wins"); 
            }
            else{
                console.log("You win"); 
            } 
}

//++++++++ TERNARY OPERATOR +++++++++++++
//syntax :-  condition ? if true : if false

let liquid = "vegetable soup"
let res = liquid ? "Yes, we have soup" : "Sorry";
console.log(res);

// nested ternary operator

let isCustomerBanned = true;

let res2 = isCustomerBanned ? "Sorry no soup for you" : liquid ? "yes we have soup for you" : "we don't have soup today";
console.log(res2);

//+++++++ Rock paper scissor with ternary ++++++++

let computerChoice = Math.floor(Math.random()*3 + 1);
let comp = computerChoice === 1? "rock" : computerChoice === 2?  "paper" : "scissors";

let result = 
playerOne === comp? "tie game" 

: playerOne === "rock" && comp === "paper" ?  `playerOne : ${playerOne}\n Computer: ${comp}\n computer wins!`

: playerOne === "paper" && comp === "scissors" ?  `playerOne : ${playerOne}\n Computer: ${comp}\n computer wins!`

: playerOne === "scissors" && comp === "rock" ?  `playerOne : ${playerOne}\n Computer: ${comp}\n computer wins!`
:`playerOne : ${playerOne}\nComputer: ${comp}\n playerOne wins!`;

alert(result)



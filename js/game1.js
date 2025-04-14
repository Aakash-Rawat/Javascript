// Your first interactive game
let playGame = confirm("shall we play rock,paper or scissors?");
if(playGame)
{
        let playerChoice = prompt("Please enter rock, paper or scissors.");
        if(playerChoice)
        {
              let playerOne = playerChoice.trim().toLowerCase();
              if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors" )
              {
                  let computerChoice = Math.floor(Math.random()*3 + 1);
                  let comp = computerChoice===1? "rock" : computerChoice === 2? "paper" : "scissors";

                  let result = 
                  playerOne === comp? "tie game" 
                  
                  : playerOne === "rock" && comp === "paper" ?  `playerOne : ${playerOne}\n Computer: ${comp}\n computer wins!`
                  
                  : playerOne === "paper" && comp === "scissors" ?  `playerOne : ${playerOne}\n Computer: ${comp}\n computer wins!`
                  
                  : playerOne === "scissors" && comp === "rock" ?  `playerOne : ${playerOne}\n Computer: ${comp}\n computer wins!`
                  :`playerOne : ${playerOne}\nComputer: ${comp}\n playerOne wins!`;
                  
                  alert(result);
                  let playAgain = confirm("Play Again?");
                  playAgain? location.reload(): alert("Ok,thanks for playing");

              }
              else{
                alert("You didn't entered rock, paper or scissors")
              }
        }
        else{
            alert("I guess you changed your mind. Maybe next time.")
        }
}
else
{
    alert("Ok, maybe next time")
}
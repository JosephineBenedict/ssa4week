var play = prompt("Enter Rock,paper or Scissor");

//console.log(play);
//Prompt the user to enter rock,paper or scissors
//randomly get computer's selection
//display winner or tie

var computer = Math.floor(Math.random() *3);
alert(computer);

if (computer < 0) 
{
    computer = "rock";
} else if(computer <= 1) {
    computer = "paper";
} else {
    computer = "scissors";
}
/*
if (player === computer)
{
	console.log("the result is a tie");
}
else if(player === "rock")
{ 
	if (computer === "scissors")
	{ console.log("rock wins");
	}else
	{console.log("paper wins");
	}
}
else if(player === "paper")
{
	
}*/
var compare = function(choice1, choice2) 
{
    if(choice1 === choice2) {
    return "The result is a tie!";
	}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
		} else {
        return "paper wins";
		}
	}
if(choice1 === "paper") 
{
    if(choice2 === "rock") {
        return "paper wins";
    } 
	else {
        if(choice2 === "scissors")
			{
            return "scissors wins";
			}
		}
}
if(choice1 === "scissors") 
{
    if(choice2 === "rock") 
	{
        return "rock wins";
    } else 
	{
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}

};

console.log("User Choice: " + play);
console.log("Computer Choice: " + computer);
console.log(compare(play, computer));


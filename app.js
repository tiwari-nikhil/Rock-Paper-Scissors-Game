let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor= "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor= "green";
        
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor= "red";
    }
}; 

const genCompChoice = ()=> {
    const options = ["rock", "paper", "scissors"];
    const rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
};

const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ",compChoice); 

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper,scissors
            userWin = compChoice === "paper" ? false:true;
        }
        else if (userChoice === "paper"){
            // rock,scissors
            userWin = compChoice === "scissors" ? false:true;
        }
        else {
            // rock,paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
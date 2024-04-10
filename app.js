const choices=document.querySelectorAll(".choice");
const msg= document.querySelector(".message");
const userWinning=document.querySelector(".userscore");
const compWinning=document.querySelector(".compscore");
const resetBtn = document.querySelector(".reset-btn");

let userScore=0;
let compScore=0;
let userWin =true;

let gencompChoice= ()=>{
    const option=["stone","paper","scissors"];
    const randIdx = Math.floor(Math.random()* option.length);
    return option[randIdx];

}

const playGame= (userChoice)=>{
    const compChoice=gencompChoice();
if (userChoice===compChoice){
msg.innerText="Its a draw";
msg.style.backgroundColor="black";
}else{
    if (userChoice==="stone"){
        userWin = (compChoice==="scissors"?true:false);
   }
   else if(userChoice==="paper"){
    userWin=(compChoice==="stone"?true:false);
   }
   else if(userChoice==="scissors"){
    userWin=(compChoice==="paper"?true:false);
   }
    
    checkWinner(userChoice , compChoice , userWin);

}

}

const checkWinner = (userChoice, compChoice)=>{
   if (userWin){
    userScore++;
    userWinning.innerText=userScore;
    msg.innerText="You win 😃, " + userChoice + " beats " + compChoice;
    msg.style.backgroundColor="green";

   }
   else{
    compScore++;
    compWinning.innerText=compScore;
    msg.innerText="You lost 😟, " + compChoice + " beats " + userChoice;
    msg.style.backgroundColor="red";
   }
}

resetBtn.addEventListener('click', ()=>{
    userWinning.innerText="0";
    compWinning.innerText="0";
    msg.style.backgroundColor="black";
    msg.innerText="Play your move";

})

choices.forEach((choice)=>{
    choice.addEventListener('click' , ()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);


    })
});
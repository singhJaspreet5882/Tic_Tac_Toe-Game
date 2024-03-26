let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newgame-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; 

const winPatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 4 , 6],
    [2 , 5 , 8],
    [3 , 4 , 5],
    [6 , 7 , 8]
];

boxes.forEach((box)=>{
  box.addEventListener("click" , ()=>{
    console.log("box was clicked");
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
  })
})
let resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations Winner Is ${winner}  `;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
        //    alert("WINNER WINNER CHICKEN DINNER");
           console.log("winner" , pos1Val);
           showWinner(pos1Val);
        }
    }
    }
} 

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click" , resetGame);

let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () =>{
    trueO = true;
    enabledBox();
    msgContainer.classList.add("hide");
};


boxes.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        console.log("Box Was clicked");
        if(turnO){
            btn.innerText = "O";
            turnO = false;
        }else{
            btn.innerText = "X";
            turnO = true;
        }

        btn.disabled =  true;

        checkWinner();
    });
});


const disabledBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congrulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();

}

const checkWinner = () =>{
    for(let pattern of winPattterns){
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner");
                showWinner(pos1);
            }
        }
    }

    

    
}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


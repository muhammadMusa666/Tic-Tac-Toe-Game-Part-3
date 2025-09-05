let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGbtn = document.querySelector("#new-btn");
let msgcontain = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6], 
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8]
];

const resetG = () => {
    turnO = true; 
    enbox();
    msgcontain.classlist.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwin();
    });
});

const disbox = () => {
    for( let box of boxes) {
        box.disabled = true;
    }
};

const enbox = () => {
    for( let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWin = (winner) => {
    msg.innerText = `Congrats, Winner Is ${winner}`;
    msg-container.classlist.remove("hide");
    disbox();
}

const checkwin = () => {
    for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != "") {
        if(pos1val === pos2val && pos2val === pos3val) {
            showWin(pos1val);
        }
    }
  }
};

newGbtn.addEventListener("click", resetG);
resetbtn.addEventListener("click", resetG);






















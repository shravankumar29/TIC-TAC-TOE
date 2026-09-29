let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newBtn = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");
winPat = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turno = true;
let boxCnt = 0

let resetGame = () => {
    turno = true;
    boxCnt = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let newGame = () => {
    turno = true;
    boxCnt = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach(box => {
    box.addEventListener("click",() => {
        if(turno){
            box.innerText = "O";
            turno = false;
        } else{
            box.innerText="X";
            turno = true;
        }
        boxCnt = boxCnt + 1;
        checkwinner();
        box.disabled = true;
    })

})
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `${winner} WON`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showDraw = () =>{
    msg.innerText = "Draw";
    msgContainer.classList.remove("hide");
}
const checkwinner = () =>{
    for(pat of winPat){
        let posVal1 = boxes[pat[0]].innerText;
        let posVal2 = boxes[pat[1]].innerText;
        let posVal3 = boxes[pat[2]].innerText;

        if(posVal1!="" && posVal2 != "" && posVal3 !=""){
            if(posVal1 == posVal2 && posVal2==posVal3){
                if(posVal1 == "O"){
                    showWinner("A");
                    return;
                } else{
                    showWinner("B");
                    return;
                }
            }
        }
    }
    if (boxCnt == 9){
        showDraw();
    }
}
reset.addEventListener("click",resetGame);
newBtn.addEventListener("click",newGame);
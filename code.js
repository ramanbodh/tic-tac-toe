let boxes=document.querySelectorAll(".box");
let p=document.querySelector("p");
let reSet=document.querySelector(".reset");

const winning=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let turnO=true;

const resetGame=()=>{
    turnO=true;
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    p.innerText="welcome to the game!";
    p.removeAttribute("style");
};

function winnerCheck(boxes){
    for(let i of winning){
        if(boxes[i[0]].innerText!=""&&boxes[i[1]].innerText!=""&&boxes[i[2]].innerText!=""){
            if(boxes[i[0]].innerText===boxes[i[1]].innerText&&boxes[i[1]].innerText===boxes[i[2]].innerText){
                console.log(`winner is ${boxes[i[0]].innerText}`);
                boxes.forEach((box)=>{
                    box.disabled=true;
                });
                p.innerText=`winner is ${boxes[i[0]].innerText}`;
                p.style.fontSize="6vmin";
                p.style.color="#BC6C25";

                return;
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("clicked button!");
            box.innerText="O";
            box.style.color="#283618";
            turnO=false;
        }
        else{
            console.log("clicked button!");
            box.innerText="X";
            box.style.color="#BC6C25";
            turnO=true;
        }
        winnerCheck(boxes);
        box.disabled=true;
    });
});

reSet.addEventListener("click",resetGame)
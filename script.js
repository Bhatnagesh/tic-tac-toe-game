
let boxes = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#reset-game");
let newGameBtn = document.querySelector("#new-btn");
let msgConatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO = true;

const Winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let count=0;
boxes.forEach(box => {
    box.addEventListener('click', () => {
      
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        }
        else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled=true;
        count++;
        chekWinner();
        if(count==9)
        {
            console.log("drwaa")
           matchDraw();
        }
    });
});

function matchDraw()
{
    msgConatiner.classList.remove('hide');
    msg.innerText=`Macth is draw no winner`
}


function disabledBoxes()
{
    for(box of boxes)
    {
            box.disabled=true;
    }
}
function enabledBoxes()
{
    for(box of boxes)
    {
            box.disabled=false;
            box.innerText="";
    }
}

function showWinner(winner)
{
    disabledBoxes();
    msgConatiner.classList.remove('hide');
    msg.innerText=`conguratulation winnser is ${winner}`
}

const chekWinner=()=>{
    for(let patern of Winpatterns)
    {
       let pos1Val=boxes[patern[0]].innerText;
       let pos2Val=boxes[patern[1]].innerText;
       let pos3Val=boxes[patern[2]].innerText;
       
       if(pos1Val !="" && pos2Val !="" && pos3Val!="")
       {
        if(pos1Val==pos2Val && pos2Val==pos3Val)
        {
           
            showWinner(pos1Val);
         
        }
       }
      
    }

}


let resetGame=()=>
{
     count=0;
    turnO=true;
    enabledBoxes();
    msgConatiner.classList.add('hide');
}
let newGame=()=>
{
     count=0;
     turnO=true;
     enabledBoxes();
     msgConatiner.classList.add('hide');
    
}


resetGameBtn.addEventListener('click',resetGame);
newGameBtn.addEventListener('click',newGame);
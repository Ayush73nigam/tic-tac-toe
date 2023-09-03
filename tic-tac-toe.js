console.log("welcome to Tic Tac tToe game")
let turn=new Audio("ping-82822.mp3")
let gameover= new Audio("game-over.mp3")
let currentturn='X';

let GameIsOver= false;
let isReset= false;
// change turn

const turnChange =()=>{
    return currentturn==="X" ? currentturn="0":currentturn="X";
}

let WinArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const decideWin =()=>{
    let text= document.getElementsByClassName("newtext");

    WinArray.forEach(ele=> {
        if((text[ele[0]].innerText===text[ele[1]].innerText) && (text[ele[1]].innerText===text[ele[2]].innerText) && (text[ele[0]].innerText!=='')){

            document.getElementById("reset").style.marginLeft="1vw";
            GameIsOver= true;
            document.querySelector(".info").innerText = text[ele[0]].innerText + " Won";
            document.querySelector(".image").getElementsByTagName("img")[0].style.width="20vw";
            gameover.play();
        }
    })
}

let cells= document.getElementsByClassName("box");

Array.from(cells).forEach((element)=>{
    let newtext = element.querySelector(".newtext");
    element.addEventListener('click',(currentspan)=>{
        if(newtext.innerText===''){
            if(GameIsOver==false){
                if(isReset==true){
                    currentturn="X";
                    isReset=false;
                }
                else{
                    turnChange();
                }
                newtext.innerText= currentturn;
                turn.play();
                decideWin();
            }
            let declareTurn=document.getElementsByClassName("info")[0];

            if(!GameIsOver){
                document.getElementById("reset").style.marginLeft="1vw";
                declareTurn.innerText="Turn for " + currentturn;
            }
        }
    })
})

let control = document.getElementById("reset");
let restart= document.getElementsByClassName("newtext");
control.addEventListener('click',()=>{
    Array.from(restart).forEach((element)=>{
        element.innerText='';
        isReset=true;
        GameIsOver=false;
    })
    let declareTurn=document.getElementsByClassName("info")[0];
    document.getElementById("reset").style.marginLeft="0";
    declareTurn.innerText='';
    document.querySelector(".image").getElementsByTagName("img")[0].style.width="0";
})
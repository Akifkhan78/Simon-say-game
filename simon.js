// Simon says game

let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];


let level = 0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

function userFlash(btn) {
    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 100);
}

function levelUp() {
    userSeq = [];
    level++;

    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    

}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }
    }
    else{
        h2.innerHTML = `Game Over! <b>Your Score was ${level}. <br>Press any to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        });
        reset();
    }
}

function btnPress() {
    let btn = this;
    // console.log(this);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    userFlash(btn);
    checkAns(userSeq.length - 1);
    // checkAns();
}

let allBtn = document.querySelectorAll(".btn");

for (let btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}



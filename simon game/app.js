let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ['yellow', 'red', 'purple', 'green'];

document.addEventListener("keypress", function() {
    if (started == false) {
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 500)
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash")
    }, 500)
}


function levelUp() {

    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomind = Math.floor(Math.random() * 3);
    let randcolor = btns[randomind];
    let randombtn = document.querySelector(`.${randcolor}`);

    gameSeq.push(randcolor);

    gameFlash(randombtn);
}

function checkAns(idx) {



    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {

        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250)
        h2.innerHTML = `Game over!  Score was :: ${level} <br>Press Any key to restart!`;
        gameReset();
    }
}

function btnpress() {
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function gameReset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
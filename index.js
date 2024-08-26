var userNameBtn = document.querySelector('#userBtn');
var alertBox = document.querySelector('.alertbox');
var startBox = document.querySelector('.start');
var inputBox = document.querySelector('#inptbox');
var usr = document.querySelector('#usr');
var usrImg = document.querySelector("#usrimage");
var gameUsrImg = document.querySelector("#gameusr");
var gameUsrName = document.querySelector("#usrname");
var startBtn = document.querySelector("#startBtn");
var btns = document.querySelector(".choices");
var computerimg;
var compResultImg = document.querySelector("#compresult");
var usrResultImg = document.querySelector("#usrresult");
var resultQuote = document.querySelector("#result1");
var resultWin = document.querySelector("#result2");
var snakeBtn = document.querySelector("#snake");
var waterBtn = document.querySelector("#water");
var gunBtn = document.querySelector("#gun");
let score = document.querySelector(".score");
var userImage;
var winAudio = new Audio("Sounds/win.mp3");
var looseAudio = new Audio("Sounds/loose.mp3");
var snakeaudio = new Audio("Sounds/snake.mp3");
var wateraudio = new Audio("Sounds/water.mp3");
var gunaudio = new Audio("Sounds/gun.mp3");

userNameBtn.addEventListener('click', () => {
    alertBox.classList.add('alertboxShow');
    var username = inputBox.value;
    alertBox.innerHTML = "Welcome @" + username;
    usr.innerHTML = username;
    gameUsrName.innerHTML = username;
    usrImg.setAttribute("src", "images/profile.png");
    gameUsrImg.setAttribute("src", "images/profile.png");
    setTimeout(() => {
        alertBox.classList.remove('alertboxShow');
    }, 3000);
    startBox.classList.add('startShow');
});

startBtn.addEventListener('click', () => {
    btns.classList.add('choiceshow');
});

function getRandomNumber() {
    var n = Math.random();
    n = n * 12;
    var k = Math.floor(n);
    return k;
}

function compChoice() {
    var num = getRandomNumber();
    if (num <= 3) {
        compResultImg.setAttribute("src", "images/water-gun.png");
    } else if (num === 4 || num <= 7) {
        compResultImg.setAttribute("src", "images/water.png");
    } else {
        compResultImg.setAttribute("src", "images/snake.png");
    }
    return num;
}

snakeBtn.addEventListener('click', () => {
    usrResultImg.setAttribute("src", "images/snake.png");
    var numm = compChoice();
    if (numm <= 3) {
        resultQuote.innerHTML = "Your Snake got a shot.";
        gunaudio.play();
        resultWin.innerHTML = "You Loose.";
        looseAudio.play();
    } else if (numm === 4 || numm <= 7) {
        resultQuote.innerHTML = "Snake drank the water.";
        wateraudio.play();
        resultWin.innerHTML = "You won.";
        score.innerHTML = parseInt(score.innerHTML) + 1;
        winAudio.play();
    } else {
        resultQuote.innerHTML = "It's a tie";
        resultWin.innerHTML = "It's a tie";
        snakeaudio.play();
    }
});

waterBtn.addEventListener('click', () => {
    usrResultImg.setAttribute("src", "images/water.png");
    var numm = compChoice();
    if (numm <= 3) {
        resultQuote.innerHTML = "Water made computers gun useless.";
        wateraudio.play();
        resultWin.innerHTML = "You won."
        score.innerHTML = parseInt(score.innerHTML) + 1;
        winAudio.play();
    } else if (numm === 4 || numm <= 7) {
        resultQuote.innerHTML = "It's a tie";
        resultWin.innerHTML = "It's a tie";
        wateraudio.play();
    } else {
        resultQuote.innerHTML = "Computers snake drank your water.";
        snakeaudio.play();
        resultWin.innerHTML = "You Loose.";
        looseAudio.play();
    }
});

gunBtn.addEventListener('click', () => {
    usrResultImg.setAttribute("src", "images/water-gun.png");
    var numm = compChoice();
    if (numm <= 3) {
        resultQuote.innerHTML = "It's a tie.";
        resultWin.innerHTML = "It's a tie.";
        gunaudio.play();
    } else if (numm === 4 || numm <= 7) {
        resultQuote.innerHTML = "Computers water made your gun useless.";
        wateraudio.play();
        resultWin.innerHTML = "You Loose.";
        looseAudio.play();
    } else {
        resultQuote.innerHTML = "Computers snake got a shot.";
        gunaudio.play();
        resultWin.innerHTML = "You Won.";
        score.innerHTML = parseInt(score.innerHTML) + 1;
        winAudio.play();
    }
});

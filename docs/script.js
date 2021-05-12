var startBtn = document.querySelector(".begin");
var highscores = document.querySelector(".Highscores");
var viewScores = document.querySelector(".viewHigh");
var timerEl = document.querySelector(".timer");
var questionEl = document.querySelector(".qText");
var a = document.querySelector(".A");
var b = document.querySelector(".B");
var c = document.querySelector(".C");
var d = document.querySelector(".D");
var btnA = document.querySelector(".btnA");
var btnB = document.querySelector(".btnB");
var btnC = document.querySelector(".btnC");
var btnD = document.querySelector(".btnD");
var title = document.querySelector(".title");
var nameScores = '';

var timer;
var timerCount = 20;
var correct = 0;
var score = 0;
var questionNum = 0;

var quizQ = ["What method stores user input information to be referenced later?",
    "What do you use to create a timer?", 
    "What can you use to select elements in the HTML using javascript?",
    "What is '.this' in javascript?"];

var answers = [" .localStorage()", " .stringify()", " .function()", " .setInterval()",
    " .function()", " .countDown()", " .setInterval()", " #timer",
    " .getElementById()", " .getElementByClassName()", " .querySelector()", 
    " All of the above", "Asks you about '.that'", "Creates a '.that'", 
    "References object in immediate scope", "References '.localStorage' for object"];




function setScores() {
    localStorage.setItem("Players", nameScores)
}
function getScores(){
    var s1 = localStorage.getItem()
}

function startGame() {
    startBtn.disabled = false;
    timerCount = 20;

    score = 0;
    questionNum = 0;
    title.textContent = "Javascript Quiz"
    startTimer();
    updateQA()
    // userA();
    setScores()
}

function updateQA() {
    console.log(questionNum)
    // questionNum++;

    var answerNum = questionNum;
    if (questionNum === 0) {
        questionEl.textContent = quizQ[questionNum];
        a.textContent = answers[answerNum];
        b.textContent = answers[answerNum + 1];
        c.textContent = answers[answerNum + 2];
        d.textContent = answers[answerNum + 3];
    } else if (questionNum === 1) {
        questionEl.textContent = quizQ[questionNum];
        a.textContent = answers[answerNum + 3];
        b.textContent = answers[answerNum + 4];
        c.textContent = answers[answerNum + 5];
        d.textContent = answers[answerNum + 6];
    } else if (questionNum === 2) {
        questionEl.textContent = quizQ[questionNum];
        a.textContent = answers[answerNum + 6];
        b.textContent = answers[answerNum + 7];
        c.textContent = answers[answerNum + 8];
        d.textContent = answers[answerNum + 9];
    } else if (questionNum === 3) {
        questionEl.textContent = quizQ[questionNum];
        a.textContent = answers[answerNum + 9];
        b.textContent = answers[answerNum + 10];
        c.textContent = answers[answerNum + 11];
        d.textContent = answers[answerNum + 12];
    }
};


function end() {
    clearInterval(timer);
    title.textContent = "Quiz has Ended";
    var name = prompt("Your Name: ");
    nameScores = name + " Score: " + score + " ";
    
    startBtn.disabled=false;
    setScores();
    var storedNames = localStorage.getItem("Players");
    var liEl = document.createElement('li');
    liEl.setAttribute('class', 'dropdown-item');
    liEl.textContent = storedNames;
    viewScores.append(liEl);
};


function startTimer() {
    // timer;
    timerCount = 20;
    questionNum = 0;
    startBtn.disabled = true;
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0) {
            // still time left
            if (correct && timerCount > 0) {
                clearInterval(timer);
            }
        }
        if (timerCount <= 0) {
            // Time ran out
            clearInterval(timer);
            end()
        }
    }, 1000)
}



// updateQA()
// startGame()
startBtn.addEventListener("click", startGame);
// console.log(questionNum)

btnA.addEventListener("click", function () {
    if (questionNum === 0) {
        score += 100;
        questionNum = 1;
        updateQA();
    } else if (questionNum === 1) {
        score -= 50;
        timerCount -= 2;
        questionNum = 2;
        updateQA();
    } else if (questionNum === 2) {
        score -= 50;
        timerCount -= 2;
        questionNum = 3;
        updateQA();
    } else if (questionNum === 3) {
        score -= 50;
        timerCount -= 2;
        // questionNum = 3;
        updateQA();
        end()
    }
});
btnB.addEventListener("click", function () {
    if (questionNum === 0) {
        score -= 50;
        timerCount -= 2;
        questionNum = 1;
        updateQA();
    } else if (questionNum === 1) {
        score -= 50;
        timerCount -= 2;
        questionNum = 2
        updateQA();
    } else if (questionNum === 2) {
        score -= 50;
        timerCount -= 2;
        questionNum = 3;
        updateQA();
    } else if (questionNum === 3) {
        score -= 50;
        timerCount -= 2;
        // questionNum = 3;
        updateQA();
        end()
    }
});
btnC.addEventListener("click", function () {
    if (questionNum === 0) {
        score -= 50;
        timerCount -= 2;
        questionNum = 1;
        updateQA();
    } else if (questionNum === 1) {
        score += 100;
        questionNum = 2;
        updateQA();
    } else if (questionNum === 2) {
        score -= 50;
        timerCount -= 2;
        questionNum = 3;
        updateQA();
    } else if (questionNum === 3) {
        score += 100;
        // questionNum = 3;
        updateQA();
        end();
    }
});

btnD.addEventListener("click", function () {
    if (questionNum === 0) {
        score -= 50;
        timerCount -= 2;
        questionNum = 1;
        updateQA();
    } else if (questionNum === 1) {
        score -= 50;
        timerCount -= 2;
        questionNum = 2;
        updateQA();
    } else if (questionNum === 2) {
        score += 100;
        questionNum = 3;
        updateQA();
    } else if (questionNum === 3) {
        score -= 50;
        timerCount -= 2;
        // questionNum = 3;
        updateQA();
        end()
    }
});
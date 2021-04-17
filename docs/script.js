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

var score = 0;
var chosen = "";

var questionNum = 0;
var correct = false;
var wrong = 0;

var clickA = false;
var clickB = false;
var clickC = false;
var clickD = false;

var quizQ = ["What method stores user input information to be referenced later?",
    "What do you use to create a timer?", "What can you use to select elements in the HTML using javascript?"];

var answers = [" .localStorage()", " .stringify()", " .function()", " .setInterval()",
    " .function()", " .countDown()", " .setInterval()", " #timer", 
    " .getElementById()", " .getElementByClassName()", " .querySelector()", " All of the above"];


var timer;
var timerCount = 120;

function init() {

    startBtn.addEventListener("click", function () {
        startTimer();
        userA();
    });

}

function updateQA() {
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
    }  else if (questionNum === 2) {
        questionEl.textContent = quizQ[questionNum];
        a.textContent = answers[answerNum + 6];
        b.textContent = answers[answerNum + 7];
        c.textContent = answers[answerNum + 8];
        d.textContent = answers[answerNum + 9];
    }};


function userA() {
    updateQA()
    
    btnA.addEventListener("click", function () {
        if (questionNum === 0) {
            score += 100;
            questionNum++;
            updateQA();
        } else if (questionNum === 1) {
            score -= 50;
            timerCount -= 15;
            questionNum++
            updateQA();
        } else if (questionNum === 2) {
            score -= 50;
            timerCount -= 15;
            questionNum++
            updateQA();
        }
    });
    btnB.addEventListener("click", function () {
        if (questionNum === 0) {
            score -= 50;
            timerCount -= 15;
            questionNum++
            updateQA();
        } else if (questionNum === 1) {
            score -= 50;
            timerCount -= 15;
            questionNum++
            updateQA();
        } else if (questionNum === 1) {
            score -= 50;
            timerCount -= 15;
            questionNum++
            updateQA();
        }
    });
    btnC.addEventListener("click", function () {
        if (questionNum === 0) {
            score -= 50;
            timerCount -= 15;
            questionNum++
            updateQA();
        } else if (questionNum === 1) {
            score += 100;
            questionNum++;
            updateQA();
        } else if (questionNum === 1) {
            score -= 50;
            timerCount -= 15;
            questionNum++
            updateQA();
        }
    });

    btnD.addEventListener("click", function () {
        if (questionNum === 0) {
            score -= 50;
            timerCount -= 15;
            questionNum++
            updateQA();
        } else if (questionNum === 1) {
            score -= 50;
            timerCount -= 15;
            questionNum++
            updateQA();
        } else if (questionNum === 1) {
            score += 100;
            questionNum++;
            updateQA();
        }
    });
};
// view scores





function startTimer() {
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
        if (timerCount === 0) {
            // Time ran out
            clearInterval(timer);
        }
    }, 1000)
}


// updateQA()
init()
// console.log(questionNum)
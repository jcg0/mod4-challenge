const startBtn = document.querySelector("#startBtn");
const mainContainer = document.querySelector("#container");
const landingSection = document.querySelector("#landingSection");
const ol = document.querySelector("#ol");
const span = document.querySelector("#span");
const validation = document.querySelector("#validation");
const quizSection = document.querySelector("#quizSection");
const div = document.querySelector("#div");
let scoreEl = document.querySelector("#score");
let timerEl = document.querySelector("#timer");

let score = 0;
let questionCount = 0;

let timerInterval;
let timer = 60;
timerEl.innerText = timer;

let questionTemplate = [
  {
    question: "question one",
    selection: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 3",
  },
  {
    question: "question two",
    selection: ["answer 5", "answer 6", "answer 7", "answer 8"],
    answer: "answer 6",
  },
  {
    question: "question three",
    selection: ["answer 9", "answer 10", "answer 11", "answer 12"],
    answer: "answer 9",
  },
  {
    question: "question four",
    selection: ["answer 13", "answer 14", "answer 15", "answer 16"],
    answer: "answer 16",
  },
];

function checkAnswer(event) {
  if (event.target.innerText === questionTemplate[questionCount].answer) {
    console.log(true);
    scoreEl.innerText = ++score;
    validation.style.color = "green";
    validation.innerText = "Correct!";
  } else {
    console.log(false);
    validation.style.color = "red";
    validation.innerText = "Incorrect";
    timer.innerText = timer - 5;
  }

  questionCount++;
  for (let i = 0; i < questionTemplate.length; i++) {
    span.innerText = questionTemplate[questionCount].question;
    ol.childNodes[0].innerText = questionTemplate[questionCount].selection[0];
    ol.childNodes[1].innerText = questionTemplate[questionCount].selection[1];
    ol.childNodes[2].innerText = questionTemplate[questionCount].selection[2];
    ol.childNodes[3].innerText = questionTemplate[questionCount].selection[3];
  }

  if (questionCount === questionTemplate[questionCount].question) {
    endQuiz();
    return;
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  if (questionCount === questionTemplate[questionCount].question) {
    div.innerText = `quiz over here is you score: ${score}`;
  }
}

function startGame() {
  startBtn.addEventListener("click", function () {
    landingSection.remove();
    span.innerText = questionTemplate[questionCount].question;
    scoreEl.innerText = `Score: ${score}`;
    span.style.fontSize = "150%";

    for (let i = 0; i < questionTemplate[questionCount].selection.length; i++) {
      let li = document.createElement("li");
      li.innerText = questionTemplate[questionCount].selection[i];
      li.addEventListener("click", checkAnswer);
      ol.append(li);
    }

    timerInterval = setInterval(function () {
      timer--;
      timerEl.innerText = timer;
      if (!timer) {
        clearInterval(timerInterval);
        quizSection.remove();
        div.innerText = `Game Over. Here is your score: ${score}`;
      }
    }, 1000);
  });
}

startGame();

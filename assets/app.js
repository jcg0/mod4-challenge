const startBtn = document.querySelector("#startBtn");
const mainContainer = document.querySelector("#container");
const landingSection = document.querySelector("#landingSection");
const olEl = document.querySelector("#ol");
const span = document.querySelector("#span");
const validation = document.querySelector("#validation");
const quizSection = document.querySelector("#quizSection");
const div = document.querySelector("#div");
const highScore = document.querySelector("#high-score");
const form = document.querySelector("#form");
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
  {
    question: "question five",
    selection: ["answer 13", "answer 14", "answer 15", "answer 16"],
    answer: "answer 16",
  },
  {
    question: "question six",
    selection: ["answer 13", "answer 14", "answer 15", "answer 16"],
    answer: "answer 16",
  },
  {
    question: "question seven",
    selection: ["answer 13", "answer 14", "answer 15", "answer 16"],
    answer: "answer 16",
  },
  {
    question: "question eight",
    selection: ["answer 13", "answer 14", "answer 15", "answer 16"],
    answer: "answer 16",
  },
  {
    question: "question nine",
    selection: ["answer 13", "answer 14", "answer 15", "answer 16"],
    answer: "answer 16",
  },
  {
    question: "question ten",
    selection: ["answer 13", "answer 14", "answer 15", "answer 16"],
    answer: "answer 16",
  },
];

function checkAnswer(event) {
  // console.log(event.target.innerText);
  var selectionBtn = event.target;
  if (!selectionBtn.matches(".selection")) {
    return;
  }
  if (selectionBtn.value !== questionTemplate[questionCount].answer) {
    console.log(false);
    timer -= 5;
    timerEl.textContent = timer;
    validation.style.color = "red";
    validation.innerText = "Incorrect";
  } else {
    console.log(true);
    scoreEl.innerText = ++score;
    validation.style.color = "green";
    validation.innerText = "Correct!";
  }
  questionCount++;

  if (questionCount === questionTemplate[questionCount].length || timer <= 0) {
    endQuiz();
  } else {
    getQuestions();
  }
}

// for (let i = 0; i < questionTemplate.length; i++) {
//   span.innerText = questionTemplate[questionCount].question;
//   ol.childNodes[0].innerText = questionTemplate[questionCount].selection[0];
//   ol.childNodes[1].innerText = questionTemplate[questionCount].selection[1];
//   ol.childNodes[2].innerText = questionTemplate[questionCount].selection[2];
//   ol.childNodes[3].innerText = questionTemplate[questionCount].selection[3];
// }

function endQuiz() {
  clearInterval(timerInterval);
  quizSection.remove();
  div.innerText = `Quiz over. Here is your score: ${score}`;
}

function getQuestions() {
  span.innerText = questionTemplate[questionCount].question;
  scoreEl.innerText = `Score: ${score}`;
  span.style.fontSize = "150%";

  olEl.innerHTML = "";

  for (let i = 0; i < questionTemplate[questionCount].selection.length; i++) {
    var selection = questionTemplate[questionCount].selection[i];
    let btn = document.createElement("button");
    // btn.innerText = questionTemplate[questionCount].selection[i];

    btn.setAttribute("class", "selection");
    btn.setAttribute("value", selection);
    btn.classList.add("btn");

    // btn.addEventListener("click", checkAnswer);
    btn.textContent = i + 1 + ". " + selection;
    olEl.append(btn);
  }
  // checkAnswer();
}

function clock() {
  timer--;
  timerEl.textContent = timer;
  if (timer < 0) {
    endQuiz();
  }
}

function startGame() {
  startBtn.addEventListener("click", function () {
    landingSection.remove();
    getQuestions();

    // timerInterval = setInterval(function () {
    //   timer--;
    //   timerEl.innerText = timer;
    //   if (!timer) {
    //     clearInterval(timerInterval);
    //     quizSection.remove();
    //     div.innerText = `Game Over. Here is your score: ${score}`;
    //     highScore.innerText = score;
    //     let input = document.createElement("input");
    //     form.append(input);

    //     localStorage.getItem("high score", score);
    //     localStorage.getItem("input", input);
    //   }
    // }, 1000);
    timerInterval = setInterval(clock, 1000);
  });
}

olEl.onclick = checkAnswer;

startGame();

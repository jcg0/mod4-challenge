const startBtn = document.querySelector("#startBtn");
const mainContainer = document.querySelector("#container");
const quizSection = document.querySelector("#quizSection");
const ol = document.querySelector("#ol");
const span = document.querySelector("#span");

let questionCount = 0;

let questionTemplate = [
  {
    question: "question one",
    selection: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 3",
  },
  {
    question: "question two",
    selection: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 2",
  },
];

function checkAnswer(event) {
  console.log(event.target.innerText);
  console.log(questionTemplate[questionCount].answer);
  if (event.target.innerText === questionTemplate[questionCount].answer) {
    console.log("Correct!");
  } else {
    console.log("Sorry that is incorrect.");
  }
}

function startGame() {
  startBtn.addEventListener("click", function () {
    quizSection.remove();
    span.innerText = questionTemplate[questionCount].question;
    span.style.fontSize = "150%";

    for (let i = 0; i < questionTemplate[questionCount].selection.length; i++) {
      let li = document.createElement("li");
      li.textContent = questionTemplate[questionCount].selection[i];
      li.addEventListener("click", checkAnswer);
      ol.append(li);
    }
  });
}

startGame();

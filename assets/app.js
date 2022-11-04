const startBtn = document.querySelector("#startBtn");
const mainContainer = document.querySelector("#container");
const quizSection = document.querySelector("#quizSection");
const ol = document.querySelector("#ol");
const span = document.querySelector("#span");

let answers = [
  "javascript answer 1 javascript answer 1 javascript answer 1 javascript answer 1 javascript answer 1",
  "javascript answer 1 javascript answer 1 javascript answer 1 javascript answer 1 javascript answer 1",
  "javascript answer 1 javascript answer 1 javascript answer 1 javascript answer 1 javascript answer 1",
  "javascript answer 1 javascript answer 1 javascript answer 1 javascript answer 1 javascript answer 1",
];

let questions = [
  "question 1 question 1 question 1 v v v vquestion 1 question 1 ",
  "question 2",
  "question 3",
  "question 4",
];

startBtn.addEventListener("click", function () {
  quizSection.remove();
  span.innerText = questions[0];
  span.style.fontSize = "150%";
  for (let i = 0; i < 4; i++) {
    let li = document.createElement("li");
    li.textContent = answers[i];
    ol.append(li);
  }
});

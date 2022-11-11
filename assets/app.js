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
    question: "What character is not part of the Fellowship?",
    selection: ["Gandalf", "Boromir", "Pippen", "Haldir"],
    answer: "Haldir",
  },
  {
    question: "How many rings of power existed in middle earth?",
    selection: ["One", "Three", "Eleven", "Twenty"],
    answer: "Twenty",
  },
  {
    question: "What is the name of Frodo's sword?",
    selection: ["Isildur's Bane", "Elrond", "Sting", "Embercleve"],
    answer: "Sting",
  },
  {
    question: "whose nickname is Sharkey?",
    selection: ["Sauron", "Sarumon", "Perriwinkle", "Durin's Bane"],
    answer: "Sarumon",
  },
  {
    question: "Where do the Hobbits live?",
    selection: ["Valinor", "Gondor", "Rohan", "The Shire"],
    answer: "The Shire",
  },
  {
    question: "Who is the rightful heir to the throne of Gondor?",
    selection: ["Throndir", "Aragorn", "Boromir", "Denethor"],
    answer: "Aragorn",
  },
  {
    question:
      "During the path of the dead whose four sons rode with Aragorn, Legolas, and Gimli",
    selection: ["Jim Raynor", "Elrond", "Théoden", "Denethor"],
    answer: "Elrond",
  },
  {
    question: "Which forest does Treebeard belong to?",
    selection: [
      "Mirkwood",
      "Tom Bombadil's Old Forest",
      "Lothlórien",
      "Fangorn Forest",
    ],
    answer: "Fangorn Forest",
  },
  {
    question: "What the are hooded riders in black called?",
    selection: ["Nazgul", "Fellbeasts", "Goblin", "Balrog"],
    answer: "Nazgul",
  },
  {
    question: "Who bites the ring off Frodo's finger in Mt.Doom",
    selection: ["Gollum", "Gimli", "Sam", "Sauron"],
    answer: "Gollum",
  },
];

//need to complete the localstorage of the score and the initials and render them to another page.
function highScores() {
  let initials = document.querySelector("#initials").value;
  localStorage.setItem("score", JSON.stringify(score));
  localStorage.setItem("initials", initials);
}

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

  //this block of code is giving me the most trouble and is a place to start working from in the futurs
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

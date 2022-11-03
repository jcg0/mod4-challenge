const startBtn = document.querySelector("#startBtn");
let ol = document.createElement("ol");
let li = document.createElement("li");

// function questionAnswer() {
//   let olEl = document.createElement("ol");
//   let liEl = document.createElement("li");
//   liEl.textContent = "hello there";
//   olEl.body.append(liEl);
// }

startBtn.addEventListener("click", function () {
  console.log("clicked");
  startBtn.style.color = "blue";
});

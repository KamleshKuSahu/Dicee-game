var ran1 = Math.floor(1 + Math.random() * 6);
var ran2 = Math.floor(1 + Math.random() * 6);
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + ran1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + ran2 + ".png");

var x = document.querySelector("h1");
if (ran1 == ran2) {
  x.innerHTML = "Draw!";
} else if (ran1 > ran2) {
  x.innerHTML = "🚩Plqyer 1 Wins!";
} else {
  x.innerHTML = "Player 2 Wins!🚩";
}

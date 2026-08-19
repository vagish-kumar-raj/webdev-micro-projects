let count = document.getElementById("count");
let save = document.getElementById("saves");

let X = 0;
let S = "| ";

function add() {
  X += 1;
  count.innerText = X;
}

function sub() {
  X -= 1;
  count.innerText = X;
}

function reset() {
  X = 0;
  count.innerText = X;
}

function saves() {
  S = S + String(X) + " | ";
  save.innerText = S;
}

function clh() {
  S = "";
  save.innerText = S;
  S = "| ";
}

let count = document.querySelector('#count');
let add = document.querySelector('#addi');
let sub = document.querySelector('#sub');
let clear = document.querySelector('#clear');
let save = document.querySelector('#save');
let reset = document.querySelector('#reset');
let hist = document.querySelector('#hist');
let c = 0;

function addition() {
  c = c + 1;
  count.textContent = c;
}

function subtraction() {
  c = c - 1;
  count.textContent = c;
}

function clear0() {
  c = 0;
  count.textContent = 0;
}

function saveHist() {
  if (hist.textContent === '') {
    hist.textContent = count.textContent;
  } else {
    hist.textContent = hist.textContent + '    |    ' + count.textContent;
  }
}

function hist0() {
  hist.textContent = '';
}

add.addEventListener('click', addition);
sub.addEventListener('click', subtraction);
clear.addEventListener('click', clear0);
save.addEventListener('click', saveHist);
reset.addEventListener('click', hist0);

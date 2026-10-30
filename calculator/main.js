let Input = document.querySelector('#inputnum');
let AC = document.querySelector('#AC');
let C = document.querySelector('#C');
let perc = document.querySelector('#perc');
let div = document.querySelector('#div');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let multi = document.querySelector('#multi');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let sub = document.querySelector('#sub');
let three = document.querySelector('#three');
let two = document.querySelector('#two');
let one = document.querySelector('#one');
let add = document.querySelector('#addi');
let zero = document.querySelector('#zero');
let deci = document.querySelector('#deci');
let eq = document.querySelector('#eq');
let current = document.querySelector('#current');
let num1 = '0';
let num2 = '0';

Input.textContent = num1;

function clickDigit(event) {
  let digit = event.target.value;
  if (num1 === '0') {
    num1 = digit;
  } else {
    num1 = num1 + digit;
  }
  Input.textContent = num1;
}

function clickDigit2(event) {
  Input.textContent = num2;
  let digit2 = event.target.value;
  if (num2 === '0') {
    num2 = digit2;
  } else {
    num2 = num2 + digit2;
  }
  Input.textContent = num2;
}

function clickdot() {
  if (Input.textContent === '0') {
    num1 = '0.';
    Input.textContent = num1;
  } else {
    if (num1.includes('.') === false) {
      num1 = num1 + '.';
      Input.textContent = num1;
    }
  }
}

function clickdot2() {
  if (Input.textContent === '0') {
    num2 = '0.';
    Input.textContent = num2;
  } else {
    if (num2.includes('.') === false) {
      num2 = num2 + '.';
      Input.textContent = num2;
    }
  }
}

function clickC() {
  num1 = '0';
  Input.textContent = num1;
}

function clickAC() {
  num1 = '0';
  num2 = '0';
  Input.textContent = num1;
}

AC.addEventListener('click', clickAC);
deci.addEventListener('click', clickdot);
C.addEventListener('click', clickC);

let op = '';
function addition() {
  op = 'add';
  Input.textContent = num2;
}
function subtract() {
  op = 'sub';
  Input.textContent = num2;
}
function multiply() {
  op = 'multi';
  Input.textContent = num2;
}
function divide() {
  op = 'div';
  Input.textContent = num2;
}
function percent() {
  op = 'perc';
  Input.textContent = num2;
}

add.addEventListener('click', addition);
perc.addEventListener('click', subtract);
multi.addEventListener('click', multiply);
sub.addEventListener('click', divide);
div.addEventListener('click', percent);

if (op === '') {
  one.addEventListener('click', clickDigit);
  two.addEventListener('click', clickDigit);
  three.addEventListener('click', clickDigit);
  four.addEventListener('click', clickDigit);
  five.addEventListener('click', clickDigit);
  six.addEventListener('click', clickDigit);
  seven.addEventListener('click', clickDigit);
  eight.addEventListener('click', clickDigit);
  nine.addEventListener('click', clickDigit);
  zero.addEventListener('click', clickDigit);
} else {
  one.addEventListener('click', clickDigit2);
  two.addEventListener('click', clickDigit2);
  three.addEventListener('click', clickDigit2);
  four.addEventListener('click', clickDigit2);
  five.addEventListener('click', clickDigit2);
  six.addEventListener('click', clickDigit2);
  seven.addEventListener('click', clickDigit2);
  eight.addEventListener('click', clickDigit2);
  nine.addEventListener('click', clickDigit2);
  zero.addEventListener('click', clickDigit2);
}
let final = num1;
function equal() {
  if (op == 'add') {
  } else if (op == 'sub') {
  } else if (op == 'multi') {
  } else if (op == 'div') {
  } else if (op == 'perc') {
  }
}
current.textContent = final;

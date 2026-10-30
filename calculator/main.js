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
let final = document.querySelector('#final');
let OPR = document.querySelector('#OPR');
let tempNum = '0';
let currentNum = '0';
let finalNum = '0';
OPR.textContent = '';
Input.textContent = tempNum;
final.textContent = finalNum;

function digits(event) {
  let digit = event.target.value;
  if (tempNum === '0') {
    tempNum = digit;
  } else {
    tempNum = tempNum + digit;
  }
  Input.textContent = tempNum;
}

function clickdot() {
  if (Input.textContent === '0') {
    tempNum = '0.';
    Input.textContent = tempNum;
  } else {
    if (tempNum.includes('.') === false) {
      tempNum = tempNum + '.';
      Input.textContent = tempNum;
    }
  }
}

function clickC() {
  tempNum = '0';
  Input.textContent = tempNum;
}

function clickAC() {
  tempNum = '0';
  finalNum = '0';
  currentNum = '0';
  final.textContent = finalNum;
  Input.textContent = tempNum;
  OPR.textContent = '';
}

function addition() {
  currentNum = +currentNum + +tempNum;
  finalNum = currentNum;
  tempNum = '0';
  Input.textContent = tempNum;
  final.textContent = finalNum;
  OPR.textContent = '+';
}

function subtraction() {
  currentNum = +currentNum - +tempNum;
  finalNum = currentNum;
  tempNum = '0';
  Input.textContent = tempNum;
  final.textContent = finalNum;
  OPR.textContent = '-';
}

function multiplication() {
  if (currentNum === '0') {
    currentNum = tempNum;
  } else {
    currentNum = +currentNum * +tempNum;
  }
  finalNum = currentNum;
  tempNum = '0';
  Input.textContent = tempNum;
  final.textContent = finalNum;
  OPR.textContent = '×';
}

function division() {
  if (currentNum === '0') {
    currentNum = tempNum;
    currentNum = +currentNum / +tempNum;
  } else {
    currentNum = +currentNum / +tempNum;
  }
  finalNum = currentNum;
  tempNum = '0';
  Input.textContent = tempNum;
  final.textContent = finalNum;
  OPR.textContent = '÷';
}

function percentage() {
  if (currentNum === '0') {
    currentNum = tempNum;
    currentNum = (+currentNum * +tempNum) / 100;
  } else {
    currentNum = (+currentNum * +tempNum) / 100;
  }

  finalNum = currentNum;
  tempNum = '0';
  Input.textContent = tempNum;
  final.textContent = finalNum;
}

let OP = '';

function addOP() {
  OP = 'A';
  addition();
}

function subOP() {
  OP = 'S';
  subtraction();
}

function multiOP() {
  OP = 'M';
  multiplication();
}

function divOP() {
  OP = 'D';
  division();
}

function perOP() {
  OP = 'P';
  percentage();
}

function equal() {
  if (OP === 'A') {
    addition();
  } else if (OP === 'S') {
    subtraction();
  } else if (OP === 'M') {
    multiplication();
  } else if (OP === 'D') {
    division;
  } else if (OP === 'P') {
    percentage;
  } else {
  }
}

one.addEventListener('click', digits);
two.addEventListener('click', digits);
three.addEventListener('click', digits);
four.addEventListener('click', digits);
five.addEventListener('click', digits);
six.addEventListener('click', digits);
seven.addEventListener('click', digits);
eight.addEventListener('click', digits);
nine.addEventListener('click', digits);
zero.addEventListener('click', digits);
deci.addEventListener('click', clickdot);
AC.addEventListener('click', clickAC);
C.addEventListener('click', clickC);
add.addEventListener('click', addOP);
sub.addEventListener('click', subOP);
multi.addEventListener('click', multiOP);
div.addEventListener('click', divOP);
perc.addEventListener('click', perOP);
eq.addEventListener('click', equal);

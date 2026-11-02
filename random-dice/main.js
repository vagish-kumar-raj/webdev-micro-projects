let die = document.querySelector('#die');
let roll = document.querySelector('#roll');
let clearHistory = document.querySelector('#clear');
let history = document.querySelector('p');

let hist = '';

function rollDie() {
  let a = Math.floor(Math.random() * 6) + 1;
  if (a == 1) {
    die.setAttribute('src', '../img/dice-one-solid-full.svg');
    die.setAttribute('alt', 'one');
  } else if (a == 2) {
    die.setAttribute('src', '../img/dice-two-solid-full.svg');
    die.setAttribute('alt', 'two');
  } else if (a == 3) {
    die.setAttribute('src', '../img/dice-three-solid-full.svg');
    die.setAttribute('alt', 'three');
  } else if (a == 4) {
    die.setAttribute('src', '../img/dice-four-solid-full.svg');
    die.setAttribute('alt', '/img/four');
  } else if (a == 5) {
    die.setAttribute('src', '../img/dice-five-solid-full.svg');
    die.setAttribute('alt', 'five');
  } else {
    die.setAttribute('src', '../img/dice-six-solid-full.svg');
    die.setAttribute('alt', 'six');
  }

  if (hist === '') {
    hist = a;
  } else {
    hist = hist + ' - ' + a;
  }
  history.textContent = hist;
}

function clearHist() {
  hist = '';
  history.textContent = hist;
}

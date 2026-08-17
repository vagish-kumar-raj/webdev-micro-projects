let count = document.getElementById("count")

let X = 0

function add() {
    X = X + 1
    count.innerText = X
}

function sub() {
    X = X - 1
    count.innerText = X
}

function reset() {
    X = 0
    count.innerText = X
}
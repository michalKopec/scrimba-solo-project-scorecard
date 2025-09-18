function updateScore(who, score) {
    let scoreEl = document.getElementById(`${who}-score`);
    scoreEl.textContent = +scoreEl.textContent + score; //convert to a number using unary +
}

function reset() {
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
}
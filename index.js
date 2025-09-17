function updateScore(who, score) {
    let scoreEl = document.getElementById(`${who}-score`);
    scoreEl.textContent = +scoreEl.textContent + score; //convert to a number using unary +
}
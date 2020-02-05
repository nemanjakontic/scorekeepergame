var btnPlayer1 = document.getElementById("player1");
var btnPlayer2 = document.getElementById("player2");
var btnReset = document.getElementById("reset");

var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");

var broj = document.getElementById("broj");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

btnPlayer1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if(p1Score ===winningScore){
            gameOver = true;
            span1.classList.add("boja");
        }
        span1.textContent = p1Score;
    }

});

btnPlayer2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if(p2Score ===winningScore){
            gameOver = true;
            span2.classList.add("boja");
        }
        span2.textContent = p2Score;
    }
});

btnReset.addEventListener("click", function () {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    span1.textContent = p1Score;
    span2.textContent = p2Score;
    gameOver = false;
    span1.classList.remove("boja");
    span2.classList.remove("boja");
}

broj.addEventListener("change", function () {
    winningScore = Number(broj.value);
    span3.textContent = winningScore;
    reset();
});

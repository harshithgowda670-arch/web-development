let score = 0;
let time = 30;
let mole = -1;
let game = false;
let timer;
let move;

function startGame() {
    if (game) return;

    score = 0;
    time = 30;
    game = true;

    document.getElementById("score").innerText = score;
    document.getElementById("time").innerText = time;
    document.getElementById("message").innerText = "Catch the mole!";

    document.getElementById("start").disabled = true;

    changeMole();

    move = setInterval(changeMole, 1000);

    timer = setInterval(function() {
        time--;
        document.getElementById("time").innerText = time;

        if (time <= 0) {
            endGame();
        }
    }, 1000);
}

function changeMole() {
    let holes = document.querySelectorAll(".hole");

    holes.forEach(function(h) {
        h.innerText = "";
    });

    mole = Math.floor(Math.random() * 9);
    holes[mole].innerText = "🐰";
}

function hit(number) {
    if (!game) return;

    if (number === mole) {
        score++;
        document.getElementById("score").innerText = score;
        document.getElementById("message").innerText = "Great hit! 🎉";
        changeMole();
    } else {
        document.getElementById("message").innerText = "Oops! Missed!";
    }
}

function endGame() {
    game = false;

    clearInterval(timer);
    clearInterval(move);

    mole = -1;

    document.querySelectorAll(".hole").forEach(function(h) {
        h.innerText = "";
    });

    document.getElementById("message").innerText =
        "Game Over! Your score: " + score;

    document.getElementById("start").disabled = false;
    document.getElementById("start").innerText = "PLAY AGAIN";
}
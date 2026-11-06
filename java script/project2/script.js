let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {

    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if (guess < 1 || guess > 10 || guess === 0) {

        message.textContent = "Enter a number between 1 and 10!";

    }

    else if (guess < secretNumber) {

        message.textContent = "Too low! Try again.";

    }

    else if (guess > secretNumber) {

        message.textContent = "Too high! Try again.";

    }

    else {

        message.textContent = "🎉 Congratulations! You won!";

    }

}

function restartGame() {

    secretNumber = Math.floor(Math.random() * 10) + 1;

    document.getElementById("guess").value = "";

    document.getElementById("message").textContent = "New game! Try again.";

}
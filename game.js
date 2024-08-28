// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner of the game
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    // Logic for determining the winner
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return "You win!";
        } else {
            return "You lose! You die!";
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return "You win!";
        } else {
            return "You lose! You die!";
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return "You win!";
        } else {
            return "You lose! You die!";
        }
    }
}

// Function to show the "This is Sparta!" quote
function showSparta() {
    document.getElementById('sparta-container').style.display = 'block'; // Show Sparta container
}

// Function to start the game, triggered by the Start button
function startGame() {
    document.getElementById('start-game').style.display = 'none'; // Hide the start button
    document.getElementById('choices').style.display = 'block'; // Show the game choices
}

// Function to handle the game logic when a choice is made
function playGame(userChoice) {
    const computerChoice = getComputerChoice(); // Get the computer's choice

    document.getElementById('user-choice').innerText = `You chose: ${userChoice}`; // Display user's choice
    document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`; // Display computer's choice

    const result = determineWinner(userChoice, computerChoice); // Determine the winner
    document.getElementById('game-result').innerText = result; // Display the result

    if (result === "You win!") {
        showSparta(); // Show Sparta quote if user wins
    }

    document.getElementById('choices').style.display = 'none'; // Hide choices after selection
    document.getElementById('play-again').style.display = 'block'; // Show the Play Again button
    document.getElementById('result').style.display = 'block'; // Show the result
}

// Function to reset the game state for a new round
function resetGame() {
    document.getElementById('user-choice').innerText = ''; // Clear user choice text
    document.getElementById('computer-choice').innerText = ''; // Clear computer choice text
    document.getElementById('game-result').innerText = ''; // Clear result text

    document.getElementById('choices').style.display = 'block'; // Show game choices again
    document.getElementById('play-again').style.display = 'none'; // Hide the Play Again button
    document.getElementById('result').style.display = 'none'; // Hide the result
    document.getElementById('sparta-container').style.display = 'none'; // Hide the Sparta quote
}

// Function to change the theme based on user selection
function changeTheme() {
    const theme = document.getElementById('theme-selector').value; // Get the selected theme
    const bodyClassList = document.body.classList; // Access the body class list

    // Remove any existing theme class
    bodyClassList.remove('fiery', 'hellish', 'funny');

    // Add the selected theme class
    bodyClassList.add(theme);
}

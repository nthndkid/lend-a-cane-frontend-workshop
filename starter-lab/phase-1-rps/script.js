/**
 * PHASE 1: Rock Paper Scissors
 *
 * Follow the steps below to build your game logic!
 */

// 1. Initialize Scores (Player and Computer)
let playerScore = 0;
let computerScore = 0;

// 2. Select DOM Elements (Player Score, Computer Score, Message, Reset Button, Choice Buttons)
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const messageEl = document.getElementById('message');
const choices = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('reset-btn');

// 3. Define Game Choices (Rock, Paper, Scissors)
const gameChoices = ['rock', 'paper', 'scissors'];
const choiceEmojis = {rock: '🪨', paper: '📃', scissors: '🌟'};

// 4. Create a function to get the Computer's random choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameChoices.length)
    console.log(randomIndex)
    return gameChoices[randomIndex]
}

// 5. Create a function to play a single round and update scores
function playRound(playerChoice){
    const computerChoice = getComputerChoice(); // this is how we get computer choice

    if(playerChoice === computerChoice) {
        console.log("draw")
        updateUI('draw', playerChoice, computerChoice);
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        updateUI('win', playerChoice, computerChoice);
        console.log("Player Win");
    } else {
        computerScore++;
        updateUI('lose', playerChoice, computerChoice);
        console.log("Computer Win");
    }
}

// 6. Create a function to update the HTML (Score text and Message)
function updateUI(result, player, computer) {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    messageEl.className = result;

    if (result === 'draw') {
        messageEl.textContent = `It's a draw Both chose ${choiceEmojis[player]}`
    } else if (result === 'win') {
        messageEl.textContent = `You win! ${choiceEmojis[player]} beats ${choiceEmojis[computer]}`
    } else {
        messageEl.textContent = `You Lose! ${choiceEmojis[computer]} beats ${choiceEmojis[player]}`
    }
}

// 7. Create a function to reset the game
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    messageEl.textContent = 'Choose one!';
    messageEl.className = '';
}

// 8. Add Event Listeners for Choice Buttons and the Reset Button
choices.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id)
    });
});

resetBtn.addEventListener('click', resetGame);
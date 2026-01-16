// Initialize scores
let playerScore = 0;
let computerScore = 0;

// DOM Elements
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const messageEl = document.getElementById('message');
const resetBtn = document.getElementById('reset-btn');
const choices = document.querySelectorAll('.choice-btn');

// Possible choices
const gameChoices = ['rock', 'paper', 'scissors'];
const choiceEmojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

// Game Logic
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        updateUI('draw', playerChoice, computerChoice);
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        updateUI('win', playerChoice, computerChoice);
    } else {
        computerScore++;
        updateUI('lose', playerChoice, computerChoice);
    }
}

function updateUI(result, player, computer) {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    messageEl.className = result; // Apply color class

    if (result === 'draw') {
        messageEl.textContent = `It's a draw! Both chose ${choiceEmojis[player]}`;
    } else if (result === 'win') {
        messageEl.textContent = `You win! ${choiceEmojis[player]} beats ${choiceEmojis[computer]}`;
    } else {
        messageEl.textContent = `You lose! ${choiceEmojis[computer]} beats ${choiceEmojis[player]}`;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    messageEl.textContent = 'Choose one!';
    messageEl.className = '';
}

// Event Listeners
choices.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

resetBtn.addEventListener('click', resetGame);

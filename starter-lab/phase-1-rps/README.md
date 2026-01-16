# 🎮 Phase 1: Rock Paper Scissors (Step-by-Step)

Follow along with your instructor to build the game piece by piece!

---

### 1️⃣ The Scoreboard (HTML)
In your `index.html`, find `<div class="score-board">` and add the "YOU" and "COM" containers:
```html
<div class="score-item">
    <span class="label">YOU</span>
    <span id="player-score" class="value">0</span>
</div>
<div class="score-item">
    <span class="label">COM</span>
    <span id="computer-score" class="value">0</span>
</div>
```

### 2️⃣ The Action Buttons (HTML)
Find `<div class="choices">` and add your three buttons:
```html
<button class="choice-btn" id="rock">🪨</button>
<button class="choice-btn" id="paper">📄</button>
<button class="choice-btn" id="scissors">✂️</button>
```

### 3️⃣ The Mastery (CSS)
Open `style.css`. We will style the `.score-board` and `.choice-btn` together.
1. Control colors with **Variables** in `:root`.
2. Center things with **Flexbox**.
3. Add breathing room with **Padding**.
4. Smooth it out with **Border-Radius**.

### 4️⃣ The Brain (JS)
Open `script.js` and we will write the logic for the computer move and the score tracking.

### 🚀 Bonus Challenge: "The Streak"
Finished early? Try adding a **Win Streak** counter!
- **Goal**: If the player wins 3 times in a row, change the message to "🔥 You are on FIRE!"
- **Hint**: You'll need a new variable to keep track of consecutive wins. Reset it to 0 if the player loses or draws.

---

> **Stuck?** Check `solution-vault/phase-1-rps` for the "Master Key" code!

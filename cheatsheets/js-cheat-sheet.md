# 🧠 JavaScript Cheat Sheet (The Brain)

JavaScript makes your page **interactive**.

### 📥 1. Selecting Elements
```javascript
const scoreEl = document.getElementById('score');
const btn = document.querySelector('.btn-primary');
```

### 👂 2. Event Listeners
```javascript
btn.addEventListener('click', () => {
  console.log('Button was clicked!');
});
```

### 🎲 3. Logic & Randomness
```javascript
// Random number between 0 and 2
const randomIndex = Math.floor(Math.random() * 3);

// Arrays
const choices = ['Rock', 'Paper', 'Scissors'];
const computerMove = choices[randomIndex];
```

### 🌐 4. Fetching Data (API)
```javascript
async function getData() {
  const response = await fetch('data.json');
  const data = await response.json();
  console.log(data);
}
```

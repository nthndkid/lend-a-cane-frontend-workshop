# Phase 1: Rock Paper Scissors (Ultra-Lean)

In this phase, we build a classic Rock Paper Scissors game using an **Ultra-Lean** approach. We focus on master-level code with absolute minimal characters.

## 🎯 Learning Objectives
- **Semantic HTML**: Building a structure with ~30 lines of code.
- **The "Essential 5" CSS**: Flexbox, Spacing, Variables, Colors, and Hover states.
- **Clean Logic**: Wiring up game events without the bloat.

## 📂 Folder Structure
- `part-1/`: Static UI only (Focus on "Essential 5" CSS).
- `part-2/`: Interactive game (Focus on JavaScript).

---

## 🚶 Step-by-Step Guide

### Part 1: Building the UI (HTML & CSS)
1. **Structural HTML**: Create a `.container` with an `<h1>`, a `.score-board`, and a `.choices` area. Keep it flat and simple.
2. **Setup Variables**: Define your `--primary`, `--bg`, and `--card` colors in `:root`.
3. **The Essential CSS**: 
   - Use `display: flex` for centering and layout.
   - Use `padding` and `border-radius` for that premium modern feel.
   - Add a `transition` to your `.choice-btn` for smooth hover scaling.

### Part 2: Adding the Logic (JavaScript)
1. **DOM Selection**: Grab only the elements you absolute need (`player-score`, `computer-score`, `message`).
2. **The "Brain"**: Use an array `['rock', 'paper', 'scissors']` and `Math.random()` to let the computer choose.
3. **Comparison**: Use a simple `if/else` block to determine the winner.
4. **The Reset**: Clear the scores and reset the message text with a single function.

---

## 🛠️ Key Concepts

### The "Essential 5" CSS
We focus on the most powerful properties that do 90% of the work:
1. **Flexbox**: `display: flex; justify-content: center;`
2. **Variables**: `--primary: #3b82f6;`
3. **Spacing**: `padding: 2rem;`
4. **Rounding**: `border-radius: 1rem;`
5. **Interactive**: `transition: 0.2s;`

### Logic in a Nutshell
```javascript
const choices = ['rock', 'paper', 'scissors'];
const computerMove = choices[Math.floor(Math.random() * 3)];
```

---

> **Tip**: Focus on why we use these 5 CSS properties. If you master these, you can build 99% of modern landing pages!

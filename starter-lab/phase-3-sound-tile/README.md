# ⚡ Phase 3: Whack-a-Tile Game (Vue.js Starter)

Time to enter the world of Modern Frameworks! We'll use **Vue.js 3** to build a high-reflex action game while learning about reactivity and component-driven design.

---

### 1️⃣ Project Setup
Open your terminal in this folder and run:
```bash
npm install
npm run dev
```

### 2️⃣ The Architecture
We will build the game across three main components in `src/components/SoundMatrix/`:
- **`SoundBoard.vue`**: The "Game Engine." This is where we handle the score, timers, and the core game loop.
- **`SoundTile.vue`**: The individual interactive tiles.
- **`BaseButton.vue`**: A reusable button component for learning slots and props.

### 3️⃣ The Steps (Code-Along)
1.  **Reactivity (`ref`)**: Make our score and timer variables "live" in `SoundBoard.vue`.
2.  **Parent-Child Communication**: Pass data down as **Props** to the tiles and receive clicks back via **Emits**.
3.  **The Game Loop**: Use `setTimeout` and `setInterval` within the Vue lifecycle to create the challenge.
4.  **Reusable Design**: Use **Slots** in `BaseButton.vue` to create a flexible UI.

---

### 🚀 Bonus Challenge: "Hard Mode"
Mastered the basics? Let's make it a real challenge!
- **Goal**: Add **Adaptive Speed**. Every time the score increases by 5, make the tiles pop up (or disappear) 100ms faster.
- **Hint**: Use a computed property or a `watch()` on your score to update the timer interval.

---

> **Feeling Lost?** The "Master Key" is in `solution-vault/phase-3-sound-tile`!

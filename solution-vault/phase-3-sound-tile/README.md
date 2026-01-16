# Phase 3: Whack-a-Tile Game (Vue.js)

Welcome to the final phase! We are moving away from manual DOM manipulation and entering the world of **Modern Frameworks**. We'll use **Vue.js 3** with the **Composition API** to build a high-reflex action game.

---

## 🎯 Learning Objectives

1.  **Reactivity (`ref`)**: Understanding how data-driven UI works.
2.  **Composition API**: Using the modern `<script setup>` syntax.
3.  **Parent-Child Communication**: Using **Props** and **Emits**.
4.  **Reusable Components**: Using **Slots** to build a flexible UI.
5.  **Lifecycle Hooks**: Managing resources with `onUnmounted`.

---

## 📂 The Architecture

- **`App.vue`**: The main entry point that hosts our board.
- **`SoundBoard.vue`**: The "Game Engine." It holds the score, timer, and picks the random targets.
- **`SoundTile.vue`**: The "Target." It pulses when active and signals the board when clicked.
- **`BaseButton.vue`**: A reusable button component used for Start/Stop actions.

---

## 🚶 Step-by-Step Guide

### 1. Creating the Reactive "Brain"
In `SoundBoard.vue`, we use `ref()` to create dynamic variables. When these variables change, Vue automatically updates the screen for us.
- `score`: Track hits.
- `timeLeft`: A 30-second countdown.
- `currentTargetId`: Which tile is the "Goal"?

### 2. Passing Data Down (Props)
The board tells each tile if it is the target by passing a boolean prop:
```vue
<SoundTile :is-target="tile.id === currentTargetId" />
```

### 3. Talking Back to the Parent (Emits)
When a tile is clicked, it doesn't manage the score itself. Instead, it "shouts" to the parent using `emit('play')`. The parent then decides if the click was a success.

### 4. The "Piano Echo" Effect
To make the game feel premium, we use a reactive `flashColor` style on the background. When a hit is detected, the `SoundBoard` flashes the tile's color for 200ms using a simple CSS transition.

### 5. Cleaning Up (Crucial!)
We use `onUnmounted` to stop all timers and music when the user leaves. This is a "Senior Dev" habit that prevents memory leaks!

---

## 🛠️ Key Concepts for Students

### `v-if` vs `v-else`
Perfect for showing the "Start Game" overlay vs the active game grid.

### `v-for`
Instead of writing 9 tiles manually, we loop through an array of data. This makes our code "DRY" (Don't Repeat Yourself).

### Slots
In `BaseButton.vue`, we use `<slot />`. This is like a "hole" in the component where we can drop any text we want from the parent.

---

## 🚀 Speed Run Commands
```bash
# Install dependencies
npm install

# Start the interactive workshop
npm run dev
```

> **Pro-Tip**: Look for the comments in the source code marked with **"LOGIC"** or **"REACTIVE STATE"**—they explain exactly why each line exists!

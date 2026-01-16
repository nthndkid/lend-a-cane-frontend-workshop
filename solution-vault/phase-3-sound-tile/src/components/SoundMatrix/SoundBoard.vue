<script setup>
import { ref, onUnmounted } from 'vue'
import SoundTile from './SoundTile.vue'
import BaseButton from './BaseButton.vue'

// 1. Array of objects with unique colors
const tiles = ref([
  { id: 1, label: 'Kick', color: '#ef4444', active: false, sound: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3' },
  { id: 2, label: 'Snare', color: '#f59e0b', active: false, sound: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3' },
  { id: 3, label: 'Hat', color: '#10b981', active: false, sound: 'https://assets.mixkit.co/active_storage/sfx/2575/2575-preview.mp3' },
  { id: 4, label: 'Clap', color: '#3b82f6', active: false, sound: 'https://assets.mixkit.co/active_storage/sfx/2580/2580-preview.mp3' },
  { id: 5, label: 'Cowbell', color: '#8b5cf6', active: false, sound: 'https://assets.mixkit.co/active_storage/sfx/2590/2590-preview.mp3' },
  { id: 6, label: 'Tom', color: '#ec4899', active: false, sound: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3' },
  { id: 7, label: 'Rim', color: '#06b6d4', active: false, sound: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3' },
  { id: 8, label: 'Cymbal', color: '#84cc16', active: false, sound: 'https://assets.mixkit.co/active_storage/sfx/2575/2575-preview.mp3' },
  { id: 9, label: 'Fx', color: '#f97316', active: false, sound: 'https://assets.mixkit.co/active_storage/sfx/2580/2580-preview.mp3' },
])

// 1. REACTIVE STATE: The "Brain" of our game
// 'ref' allows Vue to watch these variables and update the UI instantly when they change.
const flashColor = ref('transparent') // Controls the background "echo" color
const score = ref(0)                  // Current player score
const timeLeft = ref(30)              // Countdown timer starting at 30 seconds
const isPlaying = ref(false)          // Game state toggle
const currentTargetId = ref(null)     // The ID of the tile the player MUST click

// 2. NON-REACTIVE STATE: Utility variables
// We use regular variables for timers because we don't need to show these in the UI.
let gameInterval = null
let timerInterval = null

/**
 * START GAME: Resets state and triggers the main game loop
 */
const startGame = () => {
  score.value = 0
  timeLeft.value = 30
  isPlaying.value = true
  
  nextTarget()
  startTimer()
}

/**
 * TIMER LOOP: Decreases the time every 1 second
 */
const startTimer = () => {
  timerInterval = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      stopGame()
    }
  }, 1000)
}

/**
 * GAME LOOP: Randomly picks the next tile to "Whack"
 */
const nextTarget = () => {
  if (!isPlaying.value) return
  
  // LOGIC: Make the game faster as the score increases!
  const delay = Math.max(500, 1500 - (score.value * 50))
  
  // Pick a random ID from 1 to 9 (ensuring it's not the same as the current one)
  let newTargetId
  do {
    newTargetId = Math.floor(Math.random() * 9) + 1
  } while (newTargetId === currentTargetId.value)
  
  currentTargetId.value = newTargetId
  
  // Schedule the next refresh if the user doesn't click in time
  clearTimeout(gameInterval)
  gameInterval = setTimeout(() => {
    if (isPlaying.value) nextTarget()
  }, delay)
}

/**
 * CLEANUP: Always stop timers when the user leaves the page!
 * This prevents "memory leaks" where timers keep running invisible in the background.
 */
onUnmounted(() => {
  stopGame()
})

/**
 * HANDLE TILE INTERACTION: The main bridge between Child and Parent
 * @param tile The tile object passed up from SoundTile.vue
 */
const handlePlay = (tile) => {
  // Always give visual feedback when a button is pressed
  tile.active = true
  setTimeout(() => tile.active = false, 150)

  if (isPlaying.value) {
    if (tile.id === currentTargetId.value) {
      // SUCCESS: Point scored!
      score.value++
      
      // EFFECT: Flash the background with the tile's unique color
      flashColor.value = tile.color
      setTimeout(() => {
        flashColor.value = 'transparent'
      }, 200)

      nextTarget() // Immediately move to the next target
    } else {
      // ERROR: Wrong tile clicked!
      flashColor.value = '#ef444466' // Red flash for penalty
      setTimeout(() => flashColor.value = 'transparent', 200)
    }
  }
}
</script>

<template>
  <div 
    class="min-h-screen transition-colors duration-500 flex flex-col items-center justify-center p-6"
    :style="{ backgroundColor: flashColor !== 'transparent' ? flashColor : '#0f172a' }"
  >
    <header class="text-center mb-10">
      <h1 class="text-5xl font-black text-white mb-2 tracking-tighter uppercase">
        Whack-A-<span class="text-amber-400">Tile</span>
      </h1>
      
      <div v-if="isPlaying" class="flex justify-center gap-8 items-end mt-4">
        <div class="text-center">
          <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Score</p>
          <p class="text-4xl font-black text-white leading-none">{{ score }}</p>
        </div>
        <div class="text-center">
          <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Time</p>
          <p class="text-4xl font-black leading-none" :class="timeLeft < 10 ? 'text-rose-500 animate-pulse' : 'text-amber-400'">
            {{ timeLeft }}s
          </p>
        </div>
      </div>
      <p v-else class="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
        Hit the glowing tiles to score!
      </p>
    </header>

    <div class="grid grid-cols-3 gap-6 w-full max-w-sm p-6 bg-slate-800/50 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-3xl relative">
      <SoundTile 
        v-for="tile in tiles" 
        :key="tile.id" 
        :tile="tile"
        :is-target="tile.id === currentTargetId"
        @play="handlePlay"
      />
      
      <!-- Start/Game Over Overlay -->
      <div v-if="!isPlaying" class="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-xl rounded-[3rem] z-20 text-center p-8 transition-all duration-300">
        <div class="mb-6">
          <h2 v-if="score > 0" class="text-white text-3xl font-black mb-2 uppercase tracking-tighter">Mission Accomplished</h2>
          <h2 v-else class="text-white text-3xl font-black mb-2 uppercase tracking-tighter">Ready for Duty?</h2>
          <p v-if="score > 0" class="text-slate-400 text-sm uppercase tracking-[0.2em] font-bold">Points Secured: <span class="text-amber-400 text-lg">{{ score }}</span></p>
          <p v-else class="text-slate-400 text-sm uppercase tracking-[0.2em] font-bold">Fast reflexes required</p>
        </div>
        
        <BaseButton @click="startGame" variant="primary" class="scale-125">
          {{ score > 0 ? 'Restart Mission' : 'Initiate Game' }}
        </BaseButton>
      </div>
    </div>

    <div v-if="isPlaying" class="mt-8">
      <BaseButton @click="stopGame" variant="danger">
        Abandon Mission
      </BaseButton>
    </div>

    <footer class="mt-16 text-slate-500 text-xs font-mono uppercase tracking-widest">
      &ndash; Final Project: Logic & Reactivity &ndash;
    </footer>
  </div>
</template>

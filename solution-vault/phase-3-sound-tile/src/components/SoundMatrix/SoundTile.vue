<script setup>
import { defineProps, defineEmits } from 'vue'

/**
 * PROPS: Data passed DOWN from SoundBoard.vue
 * 'isTarget' is the toggle that lets this tile know it's currently "Active"
 */
const props = defineProps({
  tile: {
    type: Object,
    required: true
  },
  isTarget: {
    type: Boolean,
    default: false
  }
})

/**
 * EMITS: Events sent UP to SoundBoard.vue
 * When this button is clicked, we notify the parent.
 */
const emit = defineEmits(['play'])

const handleClick = () => {
  // Tell the parent which tile was clicked
  emit('play', props.tile)
  
  // AUDIO API: Play sound immediately in the browser
  const audio = new Audio(props.tile.sound)
  audio.currentTime = 0
  audio.play()
}
</script>

<template>
  <button 
    @mousedown="handleClick"
    :class="[
      // BASE STYLES: 3:3 Aspect ratio, rounded corners, transitions
      'w-full aspect-square rounded-3xl border-2 transition-all duration-150 flex flex-col items-center justify-center select-none relative overflow-hidden',
      
      // DYNAMIC CLASS: Target state vs Default state
      isTarget ? 'border-amber-400 scale-105 shadow-[0_0_30px_rgba(251,191,36,0.5)] z-10' : 'border-white/5 hover:border-white/20 hover:bg-white/5',
      
      // DYNAMIC CLASS: Pressed state (active)
      tile.active ? 'scale-90 border-white brightness-125' : '',
    ]"
    :style="{ 
      // DYNAMIC INLINE STYLE: Apply the unique hex color from our data
      backgroundColor: tile.active ? tile.color : (isTarget ? `${tile.color}33` : 'rgba(30, 41, 59, 0.5)'),
    }"
  >
    <!-- 1. FEEDBACK: The Ring animation only shows if isTarget is true -->
    <div v-if="isTarget" class="absolute inset-0 border-4 border-amber-400/30 rounded-3xl animate-ping pointer-events-none"></div>
    
    <!-- 2. CONTENT: The Label (Kick, Snare, etc) -->
    <span class="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors pointer-events-none">
      {{ tile.label }}
    </span>
  </button>
</template>

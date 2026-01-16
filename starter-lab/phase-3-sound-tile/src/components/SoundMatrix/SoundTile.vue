<script setup>
// 1. Define Props (tile, isTarget)
// Hint: props allow data to flow DOWN from the parent

// 2. Define Emits (play)
// Hint: emits allow events to flow UP to the parent

const handleClick = () => {
  // 3. Emit the 'play' event with the tile object
}
</script>

<template>
  <!-- 4. Build your Tile structure here -->
  <!-- Use dynamic classes for isTarget and tile.active states -->
  <button 
    class="w-full aspect-square rounded-3xl border-2 transition-all duration-150 flex flex-col items-center justify-center select-none relative overflow-hidden"
  >
    <!-- Add your tile label here -->
  </button>
</template>

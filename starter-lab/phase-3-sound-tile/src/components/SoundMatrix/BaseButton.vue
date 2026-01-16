<script setup>
// 1. Define Props (variant, disabled)
</script>

<template>
  <!-- 2. Build the Button structure with conditional classes for variants -->
  <button
    class="px-6 py-2 rounded-xl font-black transition-all transform active:scale-95 disabled:opacity-50"
  >
    <!-- 3. Use a Slot to let the parent inject text -->
    <slot />
  </button>
</template>

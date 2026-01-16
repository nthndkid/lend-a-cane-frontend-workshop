<script setup>
/**
 * REUSABLE COMPONENTS:
 * Instead of styling every button, we create one "Base" and use 
 * Props and Slots to change its personality.
 */
defineProps({
  variant: {
    type: String,
    default: 'primary' // Options: primary, danger, secondary
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    :disabled="disabled"
    class="px-6 py-2 rounded-xl font-black transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-xs"
    :class="[
      // VARIANT LOGIC: Switch colors based on the 'variant' prop
      variant === 'primary' ? 'bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-lg shadow-amber-400/20' : '',
      variant === 'danger' ? 'bg-rose-500 text-white hover:bg-rose-400 shadow-lg shadow-rose-500/20' : '',
      variant === 'secondary' ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700' : ''
    ]"
  >
    <!-- SLOTS: The parent injects text here (e.g., "START GAME") -->
    <slot />
  </button>
</template>

<template>
  <button
    :disabled="loading"
    class="loading-btn"
  >
    <div class="relative">
      <span :class="loading ? 'invisible' : ''"><slot /></span>
      <span v-if="loading" class="spinner absolute left-[calc(50%-0.5em)] top-[calc(50%-0.5em)]"></span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  loading: boolean
}>();
</script>

<style scoped>
.loading-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  border: 1px solid #007acc;
  background-color: #007acc;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.loading-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}


.spinner {
  width: 1em;
  height: 1em;
  border: 2px solid transparent;
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}


@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>

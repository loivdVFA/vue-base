<template>
  <div class="default-layout">
    <main class="main h-[100vh]">
      <main-header />
      <div>
        <router-view />
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import MainHeader from '@/components/main/MainHeader.vue';
</script>

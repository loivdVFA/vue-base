<template>
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Search ..."
      class="pl-[44px] py-[14px] pr-[40px] rounded-[30px] shadow-shadow-search w-full bg-white"
      @input="$emit('input', $event.target)"
    />
    <icon-search class="absolute top-[14px] left-[14px]" />
  </div>
</template>
<script lang="ts" setup>
defineEmits(['input']);
</script>
<style lang="scss" scoped>
input {
  outline: none;
}
input::placeholder {
  font-size: 13px;
}
</style>
